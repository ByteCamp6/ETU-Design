<template>
  <div
    :class="[
      ns.b(),
      ns.is(`scrolling-${scrollingPosition}`),
      ns.m('enable-row-hover'),
    ]"
  >
    <div :class="ns.e('inner-wrapper')" :style="tableInnerStyle">
      <div ref="hiddenColumns" class="hidden-columns">
        <slot />
      </div>
      <div :class="ns.e('header-wrapper')" ref="headerWrapper">
        <table
          :class="ns.e('header')"
          border="0"
          cellpadding="0"
          cellspacing="0"
          :style="{
            width: '100%',
            tableLayout: 'fixed',
          }"
        >
          <TableColgroup></TableColgroup>
          <TableHeader></TableHeader>
        </table>
      </div>
      <div ref="bodyWrapper" :class="ns.e('body-wrapper')">
        <EtuScrollbar
          ref="scrollBarRef"
          :height="scrollbarHeight"
          :maxHeight="scrollbarMaxHeight"
          @scroll="bindScroll"
        >
          <table
            ref="tableBodyNativeRef"
            :class="ns.e('body')"
            cellspacing="0"
            cellpadding="0"
            border="0"
            :style="{
              width: '100%',
              tableLayout: 'fixed',
            }"
          >
            <TableColgroup></TableColgroup>
            <TableBody></TableBody>
          </table>
        </EtuScrollbar>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="EtuTable">
import { useNamespace } from "@etu-design/hooks";
import TableColgroup from "./tableColgroup.vue";
import { tableProps } from "./table.ts";
import { computed, provide, ref, unref } from "vue";
import { TableKey } from "@etu-design/tokens";
import TableHeader from "./table-header";
import TableBody from "./table-body";
import etuScrollbar from "@etu-design/scrollbar";
import { useTableColumn } from "./table-column";
import { useTableStyle } from "./use-table-style";
import type {
  TableColumnCtx,
  FilterColumn,
  SortingColumn,
} from "./table-column";
import { cloneDeep, isEqual } from "lodash-unified";
import { isEmpty } from "@etu-design/utils";

const { Scrollbar: EtuScrollbar } = etuScrollbar;

type Row = (typeof props.data)[number];
const props = defineProps(tableProps);
defineEmits(["select", "select-all", "selection-change", "select-radio"]);
const ns = useNamespace("table");

const hasKey = computed(() => {
  return props.columns?.some((column) => column.prop === props.rowKey);
});

const { selectionColumn } = useTableColumn(props, hasKey);

const leftFixedColumns = computed<TableColumnCtx<Row>[]>(() => {
  let styleOffsetWidth = 0;
  const columns = props.columns!.filter((column) => column?.fixed === "left");
  if (selectionColumn.value && props.rowSelection!.fixed) {
    columns.unshift(selectionColumn.value!);
  }
  columns.forEach((column) => {
    column.styleOffsetWidth = styleOffsetWidth;
    styleOffsetWidth += column.width!;
  });
  columns[columns.length - 1].stylePosition = "last";
  return columns;
});
const noFixedColumns = computed<TableColumnCtx<Row>[]>(() => {
  const columns = props.columns!.filter((column) => column.fixed === undefined);
  if (selectionColumn.value && !props.rowSelection!.fixed) {
    columns.unshift(selectionColumn.value!);
  }
  return columns;
});
const rightFixedColumns = computed<TableColumnCtx<Row>[]>(() => {
  let styleOffsetWidth = 0;
  const columns = props.columns!.filter((column) => column?.fixed === "right");
  columns.reverse();
  columns.forEach((column) => {
    column.styleOffsetWidth = styleOffsetWidth;
    styleOffsetWidth += column.width!;
  });
  columns[columns.length - 1].stylePosition = "first";
  columns.reverse();
  return columns;
});

const originColumns = computed<TableColumnCtx<Row>[]>(() => {
  let columns = [];
  const LeftFixedColumns = leftFixedColumns.value;
  const NoFixedColumns = noFixedColumns.value;
  const RightFixedColumns = rightFixedColumns.value;
  return columns.concat(LeftFixedColumns, NoFixedColumns, RightFixedColumns);
});

let seed = 1;

const originData = computed<Row[]>(() => {
  const data = props.data;
  const rowKey = props.rowKey;
  if (!data) {
    return [];
  }
  if (hasKey.value) {
    data.forEach((each) => {
      each.id = each[rowKey];
    });
  } else {
    data.forEach((each) => {
      each.id = String(seed++);
    });
  }
  return data;
});

const sortingColumn = ref<SortingColumn>({});

const changeSortingColumn = (data: SortingColumn) => {
  sortingColumn.value = isEqual(sortingColumn.value, data) ? {} : data;
};

const sortedData = computed<Row[]>(() => {
  if (sortingColumn.value.column) {
    const columns = props.columns!;
    const sortColumn = columns.find(
      (column) => sortingColumn.value.column === column.prop,
    );
    const data = cloneDeep(originData.value);
    if (sortColumn.sortable?.sorter) {
      data.sort(sortColumn.sortable.sorter);
    } else {
      data.sort((dataFirst: Row, dataSecond: Row) => {
        let valueFirst = dataFirst[sortColumn.prop];
        let valueSecond = dataSecond[sortColumn.prop];
        if (valueFirst < valueSecond) {
          return -1;
        } else if (valueFirst > valueSecond) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    if (sortingColumn.value.sortDirections === "descend") {
      data.reverse();
    }
    return data;
  }
  return originData.value;
});
const filterRules = ref<FilterColumn>({});

const changeFilterRules = (columnProp: string, filtersValue: string[]) => {
  console.log(filterRules.value[columnProp]);
  if (!filterRules.value[columnProp]) {
    filterRules.value[columnProp] = {};
  }
  filterRules.value[columnProp].filtersValue = filtersValue;
};

const filterData = computed(() => {
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

const {
  tableInnerStyle,
  scrollbarHeight,
  scrollBarRef,
  scrollingPosition,
  bindScroll,
  scrollbarMaxHeight,
} = useTableStyle(props);

// @ts-ignore
provide(TableKey, {
  hasKey,
  originColumns,
  data: filterData,
  rowClass: props.rowClass,
  sortingColumn,
  changeSortingColumn,
  changeFilterRules,
});
</script>
