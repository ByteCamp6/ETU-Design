"use strict";
const vue = require("vue");
const filterPanel_vue_vue_type_script_setup_true_lang = require("./filter-panel.vue.js");
const useTable = require("../use-table.js");
const index = require("../../../hooks/use-namespace/index.js");
require("../../../hooks/use-z-index/index.js");
const utils = require("../utils.js");
const TableHeader = /* @__PURE__ */ vue.defineComponent({
  name: "ElTableHeader",
  setup() {
    const ns = index.useNamespace("table");
    const { originColumns, changeSortingColumn, sortingColumn, emit } =
      useTable.useTable();
    return () => {
      return vue.createVNode("thead", null, [
        vue.createVNode("tr", null, [
          originColumns.value.map((column, columnIndex) => {
            var _a, _b;
            return vue.createVNode(
              "th",
              {
                key: column.prop,
                class: utils.combineClass(
                  [
                    ns.e("cell"),
                    column.headerAlign
                      ? ns.is(column.headerAlign)
                      : ns.is(column.align),
                    ns.bm("fixed-column", column.fixed),
                    ns.is("last-column", column.stylePosition === "last"),
                    ns.is("first-column", column.stylePosition === "first"),
                    ((_a = sortingColumn.value) == null
                      ? void 0
                      : _a.column) === column.prop
                      ? sortingColumn.value.sortDirections
                      : void 0,
                  ],
                  column == null ? void 0 : column.headerCellClass,
                  {
                    column,
                    columnIndex,
                  },
                ),
                style: utils.fixedStyle(column),
                onClick: ($event) => emit("header-click", column, $event),
              },
              [
                vue.createVNode(
                  "div",
                  {
                    class: "cell",
                  },
                  [
                    column.headerRender
                      ? column.headerRender({
                          column,
                          columnIndex,
                        })
                      : column.label,
                    column.sortable &&
                      vue.createVNode(
                        "span",
                        {
                          class: "caret-wrapper",
                        },
                        [
                          column.sortable.sortDirections.includes("ascend") &&
                            vue.createVNode(
                              "i",
                              {
                                class: ["etu-i-arrow-up-filling", "sort-caret"],
                                onClick: () => {
                                  changeSortingColumn({
                                    column: column.prop,
                                    sortDirections: "ascend",
                                  });
                                },
                              },
                              null,
                            ),
                          column.sortable.sortDirections.includes("descend") &&
                            vue.createVNode(
                              "i",
                              {
                                class: [
                                  "etu-i-arrow-down-filling",
                                  "sort-caret",
                                ],
                                onClick: () => {
                                  changeSortingColumn({
                                    column: column.prop,
                                    sortDirections: "descend",
                                  });
                                },
                              },
                              null,
                            ),
                        ],
                      ),
                    column.filterable &&
                      vue.createVNode(
                        filterPanel_vue_vue_type_script_setup_true_lang,
                        {
                          placement:
                            ((_b = column.filterable) == null
                              ? void 0
                              : _b.filterPlacement) || "bottom-start",
                          column: column,
                        },
                        null,
                      ),
                  ],
                ),
              ],
            );
          }),
        ]),
      ]);
    };
  },
});
module.exports = TableHeader;
