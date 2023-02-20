"use strict";
const vue = require("vue");
const useTable = require("../use-table.js");
const index = require("../../../hooks/use-namespace/index.js");
const style = require("../../../utils/dom/style.js");
require("../../../hooks/use-z-index/index.js");
const utils = require("../utils.js");
const TableBody = /* @__PURE__ */ vue.defineComponent({
  name: "ElTableBody",
  setup() {
    const ns = index.useNamespace("table");
    const {
      data,
      originColumns,
      rowClass,
      emit
    } = useTable.useTable();
    return () => {
      return vue.createVNode("tbody", null, [data.value.map((rowData, rowIndex) => {
        return vue.createVNode("tr", {
          "key": rowData.id,
          "class": utils.combineClass([ns.e("row")], rowClass, {
            record: rowData,
            rowIndex
          }),
          "onClick": ($event) => {
            emit("row-click", rowData, $event);
          },
          "onMouseenter": ($event) => {
            const el = $event.currentTarget;
            style.addClass(el, "hover-row");
          },
          "onMouseleave": ($event) => {
            const el = $event.currentTarget;
            style.removeClass(el, "hover-row");
          }
        }, [originColumns.value.map((column, columnIndex) => {
          return vue.createVNode("td", {
            "key": columnIndex,
            "class": utils.combineClass([ns.e("cell"), ns.is(column.align), ns.bm("fixed-column", column.fixed), ns.is("last-column", column.stylePosition === "last"), ns.is("first-column", column.stylePosition === "first")], column == null ? void 0 : column.bodyCellClass, {
              cellData: rowData[column.prop],
              column,
              columnIndex,
              record: rowData,
              rowIndex
            }),
            "style": utils.fixedStyle(column),
            "onClick": ($event) => {
              emit("cell-click", rowData, column, $event);
            }
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
