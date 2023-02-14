"use strict";
const vue = require("vue");
const index = require("../../../checkbox/index.js");
const index$1 = require("../../../radio/index.js");
const useTable = require("../use-table.js");
const index$2 = require("../../../hooks/use-namespace/index.js");
require("../../../hooks/use-z-index/index.js");
const utils = require("../utils.js");
const TableBody = /* @__PURE__ */ vue.defineComponent({
  name: "ElTableHeader",
  components: {
    EtuCheckbox: index,
    EtuRadio: index$1
  },
  setup() {
    const ns = index$2.useNamespace("table");
    const {
      data,
      originColumns,
      rowClass
    } = useTable.useTable();
    return () => {
      return vue.createVNode("tbody", null, [data.map((rowData, rowIndex) => {
        return vue.createVNode("tr", {
          "key": rowIndex,
          "class": utils.combineClass([ns.e("row")], rowClass, {
            record: rowData,
            rowIndex
          })
        }, [originColumns.value.map((column, columnIndex) => {
          return vue.createVNode("td", {
            "key": columnIndex,
            "class": utils.combineClass([ns.e("cell"), ns.is(column.align)], column == null ? void 0 : column.bodyCellClass, {
              cellData: rowData[column.prop],
              column,
              columnIndex,
              record: rowData,
              rowIndex
            })
          }, [vue.createVNode("div", {
            "class": "cell"
          }, [column.cellRender ? column.cellRender({
            cellData: rowData[column.prop],
            column,
            columnIndex,
            record: rowData,
            rowIndex
          }) : rowData[column.prop]])]);
        })]);
      })]);
    };
  }
});
module.exports = TableBody;
