import type { TableProps } from "./table";
import { computed, ref } from "vue";
import type { FilterColumn, SortingColumn } from "./table-column";
import { cloneDeep, isEqual } from "lodash-unified";
import { isEmpty } from "@etu-design/utils";
import type { ComputedRef } from "vue";

export const useTableData = (
  props: TableProps<any>,
  hasKey: ComputedRef<boolean>,
  emit: (event: string, ...args: any[]) => void,
) => {
  type Row = (typeof props.data)[number];

  let seed = 1;

  // 原始数据，如果没有key，那么手动添加key
  const originData = computed<Row[]>(() => {
    const data = props.data;
    const rowKey = props.rowKey;
    if (!data) {
      return [];
    }
    if (hasKey.value) {
      data.forEach((each) => {
        each.id = each[rowKey!];
      });
    } else {
      data.forEach((each) => {
        each.id = String(seed++);
      });
    }
    return data;
  });

  // 当前选中的需要排序的Column
  const sortingColumn = ref<SortingColumn>({});

  // 如果和之前不一样就更新，如果一样就去除sorting
  const changeSortingColumn = (data: SortingColumn) => {
    sortingColumn.value = isEqual(sortingColumn.value, data) ? {} : data;
    emit(
      "sort-change",
      sortingColumn.value.column,
      sortingColumn.value.sortDirections,
    );
  };

  // 排序后的数据
  const sortedData = computed<Row[]>(() => {
    if (sortingColumn.value.column) {
      const columns = props.columns!;
      // 找到需要排序的列
      const sortColumn = columns.find(
        (column) => sortingColumn.value.column === column.prop,
      )!;
      // 为了防止修改之前的数据，需要克隆一份新的
      const data = cloneDeep(originData.value);

      //如果有sort函数，就执行sort，否则执行默认的升序排序
      if (sortColumn.sortable?.sorter) {
        data.sort(sortColumn.sortable.sorter);
      } else {
        data.sort((dataFirst: Row, dataSecond: Row) => {
          const valueFirst = dataFirst[sortColumn.prop];
          const valueSecond = dataSecond[sortColumn.prop];
          if (valueFirst < valueSecond) {
            return -1;
          } else if (valueFirst > valueSecond) {
            return 1;
          } else {
            return 0;
          }
        });
      }

      // 如果要求降序，那么就反转
      if (sortingColumn.value.sortDirections === "descend") {
        data.reverse();
      }
      return data;
    }
    return originData.value;
  });
  const filterRules = ref<FilterColumn>({});

  const changeFilterRules = (columnProp: string, filtersValue: string[]) => {
    if (!filterRules.value[columnProp]) {
      filterRules.value[columnProp] = {
        filtersValue: [],
      };
    }
    filterRules.value[columnProp].filtersValue = filtersValue;
    emit("filter-change", columnProp, filtersValue);
  };

  const filterData = computed<Row[]>(() => {
    if (!isEmpty(filterRules.value)) {
      const columns = props.columns!;
      let data = cloneDeep(sortedData.value);
      columns.forEach((column) => {
        const columnFilterRules = filterRules.value[column.prop];
        if (
          column.filterable &&
          !isEmpty(columnFilterRules) &&
          !isEmpty(columnFilterRules.filtersValue)
        ) {
          const filter = column.filterable?.filter;
          const filterCombine = column.filterable?.filterCombine;
          const innerFilterFunction = (
            record: Row,
            filter: ((value: string, record: any) => boolean) | undefined,
            filterCombine: "and" | "or" | undefined,
          ) => {
            if (!filter) {
              filter = (value, record) => record[column.prop] === value;
            }
            if (filterCombine && filterCombine === "and") {
              return columnFilterRules.filtersValue.every((value) =>
                filter?.(value, record),
              );
            } else {
              return columnFilterRules.filtersValue.some((value) =>
                filter?.(value, record),
              );
            }
          };
          data = data.filter((record) => {
            return innerFilterFunction(record, filter, filterCombine);
          });
        }
      });
      return data;
    }
    return sortedData.value;
  });

  function clearSort() {
    sortingColumn.value = {};
  }

  return {
    originData,
    sortedData,
    filterData,
    sortingColumn,
    changeSortingColumn,
    changeFilterRules,
    clearSort,
  };
};
