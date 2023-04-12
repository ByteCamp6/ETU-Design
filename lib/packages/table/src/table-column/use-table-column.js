"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const index$1 = require("../../../checkbox/index.js");
const index = require("../../../radio/index.js");
const types = require("../../../utils/types.js");
const {
  Checkbox: EtuCheckbox
} = index$1;
const {
  Radio: EtuRadio
} = index;
const useTableColumn = (props, hasKey, emit) => {
  const selectData = vue.ref({});
  const selectCheckboxData = vue.ref([]);
  const selectRadioData = vue.ref("");
  vue.watch(() => selectCheckboxData.value, (newValue) => {
    emit("selection-change", newValue);
  });
  const SelectionCell = ({
    value,
    intermediate = false,
    onChange
  }) => {
    return vue.createVNode(EtuCheckbox, {
      "onChange": onChange,
      "modelValue": value,
      "indeterminate": intermediate
    }, null);
  };
  const selectionColumn = vue.computed(() => {
    if (!hasKey.value) {
      console.warn("没有传入key，无法使用单选和多选");
      return void 0;
    }
    if (props.rowSelection) {
      const rowSelection = props.rowSelection;
      const selectRender = {
        label: "",
        prop: "selection",
        width: props.rowSelection.width ?? 50,
        fixed: props.rowSelection.fixed ? "left" : void 0
      };
      const rowKeyColumn = props.rowKey;
      if (rowSelection.type === "checkbox") {
        selectRender.cellRender = ({
          record
        }) => {
          const rowKey = record[rowKeyColumn];
          const onChange = (value) => {
            selectData.value[rowKey] = value;
            selectCheckboxData.value = Object.keys(selectData.value).filter((selectKey) => {
              return selectData.value[selectKey];
            });
            emit("select", selectCheckboxData.value, value, rowKey, record);
          };
          return vue.createVNode(SelectionCell, {
            "value": selectData.value[rowKey],
            "onChange": onChange
          }, null);
        };
        if (rowSelection == null ? void 0 : rowSelection.showCheckedAll) {
          selectRender.headerRender = () => {
            const _data = props.data;
            const onChange = (value) => {
              _data.map((record) => {
                selectData.value[record[rowKeyColumn]] = value;
              });
              value ? selectCheckboxData.value = Object.keys(selectData.value) : selectCheckboxData.value = [];
              emit("select-all", selectCheckboxData.value, value);
            };
            const allSelected = _data.every((record) => selectData.value[record[rowKeyColumn]]);
            const containsChecked = _data.some((record) => selectData.value[record[rowKeyColumn]]);
            return vue.createVNode(SelectionCell, {
              "value": allSelected,
              "intermediate": containsChecked && !allSelected,
              "onChange": onChange
            }, null);
          };
        }
      } else if (rowSelection.type === "radio") {
        selectRender.cellRender = ({
          record
        }) => {
          const rowKey = record[rowKeyColumn];
          const onChange = () => {
            selectRadioData.value = rowKey;
            emit("select-radio", rowKey, record);
          };
          return vue.createVNode(EtuRadio, {
            "modelValue": selectRadioData.value,
            "onChange": onChange,
            "label": rowKey
          }, {
            default: () => [vue.createVNode("span", null, null)]
          });
        };
      }
      return selectRender;
    }
    return void 0;
  });
  const leftFixedColumns = vue.computed(() => {
    let styleOffsetWidth = 0;
    const columns = props.columns.filter((column) => (column == null ? void 0 : column.fixed) === "left");
    if (selectionColumn.value && props.rowSelection.fixed) {
      columns.unshift(selectionColumn.value);
    }
    columns.forEach((column) => {
      column.styleOffsetWidth = styleOffsetWidth;
      styleOffsetWidth += column.width;
    });
    if (!types.isEmpty(columns)) {
      columns[columns.length - 1].stylePosition = "last";
    }
    return columns;
  });
  const noFixedColumns = vue.computed(() => {
    const columns = props.columns.filter((column) => column.fixed === void 0);
    if (selectionColumn.value && !props.rowSelection.fixed) {
      columns.unshift(selectionColumn.value);
    }
    return columns;
  });
  const rightFixedColumns = vue.computed(() => {
    let styleOffsetWidth = 0;
    const columns = props.columns.filter((column) => (column == null ? void 0 : column.fixed) === "right");
    columns.reverse();
    columns.forEach((column) => {
      column.styleOffsetWidth = styleOffsetWidth;
      styleOffsetWidth += column.width;
    });
    if (!types.isEmpty(columns)) {
      columns[columns.length - 1].stylePosition = "first";
    }
    columns.reverse();
    return columns;
  });
  const originColumns = vue.computed(() => {
    const columns = [];
    const LeftFixedColumns = leftFixedColumns.value;
    const NoFixedColumns = noFixedColumns.value;
    const RightFixedColumns = rightFixedColumns.value;
    return columns.concat(LeftFixedColumns, NoFixedColumns, RightFixedColumns);
  });
  function getSelectionRows() {
    const rowKeyColumn = props.rowKey;
    if (props.rowSelection) {
      const data = props.data;
      if (props.rowSelection.type === "checkbox") {
        return data.filter((record) => {
          return selectData.value[record[rowKeyColumn]];
        });
      } else {
        return data.find((record) => {
          return record[rowKeyColumn] === selectRadioData.value;
        });
      }
    }
    return [];
  }
  function toggleRowSelection(rowKey, selected) {
    selected ? selectData.value[rowKey] = selected : selectData.value[rowKey] = !selectData.value[rowKey];
    selectCheckboxData.value = Object.keys(selectData.value).filter((selectKey) => {
      return selectData.value[selectKey];
    });
  }
  function toggleAllSelection() {
    const data = props.data;
    const rowKeyColumn = props.rowKey;
    const allSelected = data.every((record) => selectData.value[record[rowKeyColumn]]);
    data.map((record) => {
      selectData.value[record[rowKeyColumn]] = !allSelected;
    });
    !allSelected ? selectCheckboxData.value = Object.keys(selectData.value) : selectCheckboxData.value = [];
  }
  function setCurrentRow(rowKey) {
    selectRadioData.value = rowKey;
  }
  return {
    selectionColumn,
    originColumns,
    getSelectionRows,
    toggleRowSelection,
    toggleAllSelection,
    setCurrentRow
  };
};
exports.useTableColumn = useTableColumn;