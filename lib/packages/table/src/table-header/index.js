"use strict";
const vue = require("vue");
const index = require("../../../checkbox/index.js");
const useTable = require("../use-table.js");
const index$1 = require("../../../hooks/use-namespace/index.js");
require("../../../hooks/use-z-index/index.js");
const utils = require("../utils.js");
const TableHeader = /* @__PURE__ */ vue.defineComponent({
  name: "ElTableHeader",
  components: {
    EtuCheckbox: index
  },
  setup() {
    const ns = index$1.useNamespace("table");
    const {
      originColumns
    } = useTable.useTable();
    return () => {
      return vue.createVNode("thead", null, [vue.createVNode("tr", null, [originColumns.value.map((column, columnIndex) => {
        return vue.createVNode("th", {
          "key": column.prop,
          "class": utils.combineClass([ns.e("cell"), column.headerAlign ? ns.is(column.headerAlign) : ns.is(column.align)], column == null ? void 0 : column.headerCellClass, {
            column,
            columnIndex
          })
        }, [vue.createVNode("div", {
          "class": "cell"
        }, [column.headerRender ? column.headerRender({
          column,
          columnIndex
        }) : column.label])]);
      })])]);
    };
  }
});
module.exports = TableHeader;
