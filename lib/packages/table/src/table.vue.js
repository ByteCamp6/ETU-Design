"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const tableColgroup_vue_vue_type_script_setup_true_lang = require("./tableColgroup.vue.js");
const table = require("./table.js");
const table$1 = require("../../tokens/table.js");
const index$1 = require("./table-header/index.js");
const index$2 = require("./table-body/index.js");
const index$3 = require("../../scrollbar/index.js");
const useTableColumn = require("./table-column/use-table-column.js");
const useTableStyle = require("./use-table-style.js");
const useTableData = require("./use-table-data.js");
const _hoisted_1 = {
  ref: "hiddenColumns",
  class: "hidden-columns"
};
const __default__ = vue.defineComponent({
  name: "EtuTable"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: table.tableProps,
  emits: [
    "select",
    "select-all",
    "selection-change",
    "select-radio",
    "cell-click",
    "row-click",
    "header-click",
    "sort-change",
    "filter-change"
  ],
  setup(__props, { expose, emit }) {
    const props = __props;
    const { Scrollbar: EtuScrollbar } = index$3.default;
    const ns = index.useNamespace("table");
    const hasKey = vue.computed(() => {
      var _a;
      return (_a = props.columns) == null ? void 0 : _a.some((column) => column.prop === props.rowKey);
    });
    const {
      originColumns,
      getSelectionRows,
      toggleRowSelection,
      toggleAllSelection,
      setCurrentRow
    } = useTableColumn.useTableColumn(props, hasKey, emit);
    const {
      sortingColumn,
      filterData,
      changeSortingColumn,
      changeFilterRules,
      clearSort
    } = useTableData.useTableData(props, hasKey, emit);
    const {
      tableInnerStyle,
      scrollbarHeight,
      scrollBarRef,
      scrollingPosition,
      bindScroll,
      scrollbarMaxHeight
    } = useTableStyle.useTableStyle(props);
    vue.provide(table$1.TableKey, {
      emit,
      hasKey,
      originColumns,
      data: filterData,
      rowClass: props.rowClass,
      sortingColumn,
      changeSortingColumn,
      changeFilterRules
    });
    expose({
      getSelectionRows,
      toggleRowSelection,
      toggleAllSelection,
      setCurrentRow,
      clearSort
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([
          vue.unref(ns).b(),
          vue.unref(ns).is(`scrolling-${vue.unref(scrollingPosition)}`),
          vue.unref(ns).m("enable-row-hover")
        ])
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(vue.unref(ns).e("inner-wrapper")),
          style: vue.normalizeStyle(vue.unref(tableInnerStyle))
        }, [
          vue.createElementVNode("div", _hoisted_1, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 512),
          vue.createElementVNode("div", {
            class: vue.normalizeClass(vue.unref(ns).e("header-wrapper")),
            ref: "headerWrapper"
          }, [
            vue.createElementVNode("table", {
              class: vue.normalizeClass(vue.unref(ns).e("header")),
              border: "0",
              cellpadding: "0",
              cellspacing: "0",
              style: {
                width: "100%",
                tableLayout: "fixed"
              }
            }, [
              vue.createVNode(tableColgroup_vue_vue_type_script_setup_true_lang),
              vue.createVNode(vue.unref(index$1))
            ], 2)
          ], 2),
          vue.createElementVNode("div", {
            ref: "bodyWrapper",
            class: vue.normalizeClass(vue.unref(ns).e("body-wrapper"))
          }, [
            vue.createVNode(vue.unref(EtuScrollbar), {
              ref_key: "scrollBarRef",
              ref: scrollBarRef,
              height: vue.unref(scrollbarHeight),
              maxHeight: vue.unref(scrollbarMaxHeight),
              onScroll: vue.unref(bindScroll)
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("table", {
                  ref: "tableBodyNativeRef",
                  class: vue.normalizeClass(vue.unref(ns).e("body")),
                  cellspacing: "0",
                  cellpadding: "0",
                  border: "0",
                  style: {
                    width: "100%",
                    tableLayout: "fixed"
                  }
                }, [
                  vue.createVNode(tableColgroup_vue_vue_type_script_setup_true_lang),
                  vue.createVNode(vue.unref(index$2))
                ], 2)
              ]),
              _: 1
            }, 8, ["height", "maxHeight", "onScroll"])
          ], 2)
        ], 6)
      ], 2);
    };
  }
});
module.exports = _sfc_main;
