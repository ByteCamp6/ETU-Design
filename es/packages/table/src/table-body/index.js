import { defineComponent, createVNode } from "vue";
import checkbox from "../../../checkbox/index.js";
import radio from "../../../radio/index.js";
import { useTable } from "../use-table.js";
import { useNamespace } from "../../../hooks/use-namespace/index.js";
import "../../../hooks/use-z-index/index.js";
import { combineClass } from "../utils.js";
const TableBody = /* @__PURE__ */ defineComponent({
  name: "ElTableHeader",
  components: {
    EtuCheckbox: checkbox,
    EtuRadio: radio
  },
  setup() {
    const ns = useNamespace("table");
    const {
      data,
      originColumns,
      rowClass
    } = useTable();
    return () => {
      return createVNode("tbody", null, [data.map((rowData, rowIndex) => {
        return createVNode("tr", {
          "key": rowIndex,
          "class": combineClass([ns.e("row")], rowClass, {
            record: rowData,
            rowIndex
          })
        }, [originColumns.value.map((column, columnIndex) => {
          return createVNode("td", {
            "key": columnIndex,
            "class": combineClass([ns.e("cell"), ns.is(column.align)], column == null ? void 0 : column.bodyCellClass, {
              cellData: rowData[column.prop],
              column,
              columnIndex,
              record: rowData,
              rowIndex
            })
          }, [createVNode("div", {
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
export {
  TableBody as default
};
