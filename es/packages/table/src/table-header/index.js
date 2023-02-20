import { defineComponent, createVNode } from "vue";
import _sfc_main from "./filter-panel.vue.js";
import { useTable } from "../use-table.js";
import { useNamespace } from "../../../hooks/use-namespace/index.js";
import "../../../hooks/use-z-index/index.js";
import { combineClass, fixedStyle } from "../utils.js";
const TableHeader = /* @__PURE__ */ defineComponent({
  name: "ElTableHeader",
  setup() {
    const ns = useNamespace("table");
    const {
      originColumns,
      changeSortingColumn,
      sortingColumn,
      emit
    } = useTable();
    return () => {
      return createVNode("thead", null, [createVNode("tr", null, [originColumns.value.map((column, columnIndex) => {
        var _a, _b;
        return createVNode("th", {
          "key": column.prop,
          "class": combineClass([ns.e("cell"), column.headerAlign ? ns.is(column.headerAlign) : ns.is(column.align), ns.bm("fixed-column", column.fixed), ns.is("last-column", column.stylePosition === "last"), ns.is("first-column", column.stylePosition === "first"), ((_a = sortingColumn.value) == null ? void 0 : _a.column) === column.prop ? sortingColumn.value.sortDirections : void 0], column == null ? void 0 : column.headerCellClass, {
            column,
            columnIndex
          }),
          "style": fixedStyle(column),
          "onClick": ($event) => emit("header-click", column, $event)
        }, [createVNode("div", {
          "class": "cell"
        }, [column.headerRender ? column.headerRender({
          column,
          columnIndex
        }) : column.label, column.sortable && createVNode("span", {
          "class": "caret-wrapper"
        }, [column.sortable.sortDirections.includes("ascend") && createVNode("i", {
          "class": ["etu-i-arrow-up-filling", "sort-caret"],
          "onClick": () => {
            changeSortingColumn({
              column: column.prop,
              sortDirections: "ascend"
            });
          }
        }, null), column.sortable.sortDirections.includes("descend") && createVNode("i", {
          "class": ["etu-i-arrow-down-filling", "sort-caret"],
          "onClick": () => {
            changeSortingColumn({
              column: column.prop,
              sortDirections: "descend"
            });
          }
        }, null)]), column.filterable && createVNode(_sfc_main, {
          "placement": ((_b = column.filterable) == null ? void 0 : _b.filterPlacement) || "bottom-start",
          "column": column
        }, null)])]);
      })])]);
    };
  }
});
export {
  TableHeader as default
};
