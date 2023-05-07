import { defineComponent, createVNode } from "vue";
import { useTable } from "../use-table.js";
import { useNamespace } from "../../../hooks/use-namespace/index.js";
import { addClass, removeClass } from "../../../utils/dom/style.js";
import "../../../hooks/use-z-index/index.js";
import { combineClass, fixedStyle } from "../utils.js";
const TableBody = /* @__PURE__ */ defineComponent({
  name: "ElTableBody",
  setup() {
    const ns = useNamespace("table");
    const { data, originColumns, rowClass, emit } = useTable();
    return () => {
      return createVNode("tbody", null, [
        data.value.map((rowData, rowIndex) => {
          return createVNode(
            "tr",
            {
              key: rowData.id,
              class: combineClass([ns.e("row")], rowClass, {
                record: rowData,
                rowIndex,
              }),
              onClick: ($event) => {
                emit("row-click", rowData, $event);
              },
              onMouseenter: ($event) => {
                const el = $event.currentTarget;
                addClass(el, "hover-row");
              },
              onMouseleave: ($event) => {
                const el = $event.currentTarget;
                removeClass(el, "hover-row");
              },
            },
            [
              originColumns.value.map((column, columnIndex) => {
                return createVNode(
                  "td",
                  {
                    key: columnIndex,
                    class: combineClass(
                      [
                        ns.e("cell"),
                        ns.is(column.align),
                        ns.bm("fixed-column", column.fixed),
                        ns.is("last-column", column.stylePosition === "last"),
                        ns.is("first-column", column.stylePosition === "first"),
                      ],
                      column == null ? void 0 : column.bodyCellClass,
                      {
                        cellData: rowData[column.prop],
                        column,
                        columnIndex,
                        record: rowData,
                        rowIndex,
                      },
                    ),
                    style: fixedStyle(column),
                    onClick: ($event) => {
                      emit("cell-click", rowData, column, $event);
                    },
                  },
                  [
                    createVNode(
                      "div",
                      {
                        class: "cell",
                      },
                      [
                        column.cellRender
                          ? column.cellRender({
                              cellData: rowData[column.prop],
                              column,
                              columnIndex,
                              record: rowData,
                              rowIndex,
                            })
                          : rowData[column.prop],
                      ],
                    ),
                  ],
                );
              }),
            ],
          );
        }),
      ]);
    };
  },
});
export { TableBody as default };
