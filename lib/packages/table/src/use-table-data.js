"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const types = require("../../utils/types.js");
const cloneDeep = require("../../../node_modules/lodash-es/cloneDeep.js");
const isEqual = require("../../../node_modules/lodash-es/isEqual.js");
const useTableData = (props, hasKey, emit) => {
  let seed = 1;
  const originData = vue.computed(() => {
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
  const sortingColumn = vue.ref({});
  const changeSortingColumn = (data) => {
    sortingColumn.value = isEqual(sortingColumn.value, data) ? {} : data;
    emit(
      "sort-change",
      sortingColumn.value.column,
      sortingColumn.value.sortDirections
    );
  };
  const sortedData = vue.computed(() => {
    var _a;
    if (sortingColumn.value.column) {
      const columns = props.columns;
      const sortColumn = columns.find(
        (column) => sortingColumn.value.column === column.prop
      );
      const data = cloneDeep(originData.value);
      if ((_a = sortColumn.sortable) == null ? void 0 : _a.sorter) {
        data.sort(sortColumn.sortable.sorter);
      } else {
        data.sort((dataFirst, dataSecond) => {
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
      if (sortingColumn.value.sortDirections === "descend") {
        data.reverse();
      }
      return data;
    }
    return originData.value;
  });
  const filterRules = vue.ref({});
  const changeFilterRules = (columnProp, filtersValue) => {
    if (!filterRules.value[columnProp]) {
      filterRules.value[columnProp] = {
        filtersValue: []
      };
    }
    filterRules.value[columnProp].filtersValue = filtersValue;
    emit("filter-change", columnProp, filtersValue);
  };
  const filterData = vue.computed(() => {
    if (!types.isEmpty(filterRules.value)) {
      const columns = props.columns;
      let data = cloneDeep(sortedData.value);
      columns.forEach((column) => {
        var _a, _b;
        const columnFilterRules = filterRules.value[column.prop];
        if (column.filterable && !types.isEmpty(columnFilterRules) && !types.isEmpty(columnFilterRules.filtersValue)) {
          const filter = (_a = column.filterable) == null ? void 0 : _a.filter;
          const filterCombine = (_b = column.filterable) == null ? void 0 : _b.filterCombine;
          const innerFilterFunction = (record, filter2, filterCombine2) => {
            if (!filter2) {
              filter2 = (value, record2) => record2[column.prop] === value;
            }
            if (filterCombine2 && filterCombine2 === "and") {
              return columnFilterRules.filtersValue.every(
                (value) => filter2 == null ? void 0 : filter2(value, record)
              );
            } else {
              return columnFilterRules.filtersValue.some(
                (value) => filter2 == null ? void 0 : filter2(value, record)
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
    clearSort
  };
};
exports.useTableData = useTableData;
