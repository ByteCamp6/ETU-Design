import { defineComponent, createVNode } from "vue";
import checkbox from "../../../checkbox/index.js";
import { useTable } from "../use-table.js";
import { useNamespace } from "../../../hooks/use-namespace/index.js";
import "../../../hooks/use-z-index/index.js";
import { combineClass } from "../utils.js";
const TableHeader = /* @__PURE__ */ defineComponent({
  name: "ElTableHeader",
  components: {
    EtuCheckbox: checkbox
  },
  setup() {
    const ns = useNamespace("table");
    const {
      originColumns
    } = useTable();
    return () => {
      return createVNode("thead", null, [createVNode("tr", null, [originColumns.value.map((column, columnIndex) => {
        return createVNode("th", {
          "key": column.prop,
          "class": combineClass([ns.e("cell"), column.headerAlign ? ns.is(column.headerAlign) : ns.is(column.align)], column == null ? void 0 : column.headerCellClass, {
            column,
            columnIndex
          })
        }, [createVNode("div", {
          "class": "cell"
        }, [column.headerRender ? column.headerRender({
          column,
          columnIndex
        }) : column.label])]);
      })])]);
    };
  }
});
export {
  TableHeader as default
};
