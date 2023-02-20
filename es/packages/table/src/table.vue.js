import { defineComponent, computed, provide, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, normalizeStyle, renderSlot, createVNode, withCtx } from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
import _sfc_main$1 from "./tableColgroup.vue.js";
import { tableProps } from "./table.js";
import { TableKey } from "../../tokens/table.js";
import TableHeader from "./table-header/index.js";
import TableBody from "./table-body/index.js";
import scrollbar from "../../scrollbar/index.js";
import { useTableColumn } from "./table-column/use-table-column.js";
import { useTableStyle } from "./use-table-style.js";
import { useTableData } from "./use-table-data.js";
const _hoisted_1 = {
  ref: "hiddenColumns",
  class: "hidden-columns"
};
const __default__ = defineComponent({
  name: "EtuTable"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: tableProps,
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
    const { Scrollbar: EtuScrollbar } = scrollbar;
    const ns = useNamespace("table");
    const hasKey = computed(() => {
      var _a;
      return (_a = props.columns) == null ? void 0 : _a.some((column) => column.prop === props.rowKey);
    });
    const {
      originColumns,
      getSelectionRows,
      toggleRowSelection,
      toggleAllSelection,
      setCurrentRow
    } = useTableColumn(props, hasKey, emit);
    const {
      sortingColumn,
      filterData,
      changeSortingColumn,
      changeFilterRules,
      clearSort
    } = useTableData(props, hasKey, emit);
    const {
      tableInnerStyle,
      scrollbarHeight,
      scrollBarRef,
      scrollingPosition,
      bindScroll,
      scrollbarMaxHeight
    } = useTableStyle(props);
    provide(TableKey, {
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
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(ns).b(),
          unref(ns).is(`scrolling-${unref(scrollingPosition)}`),
          unref(ns).m("enable-row-hover")
        ])
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(ns).e("inner-wrapper")),
          style: normalizeStyle(unref(tableInnerStyle))
        }, [
          createElementVNode("div", _hoisted_1, [
            renderSlot(_ctx.$slots, "default")
          ], 512),
          createElementVNode("div", {
            class: normalizeClass(unref(ns).e("header-wrapper")),
            ref: "headerWrapper"
          }, [
            createElementVNode("table", {
              class: normalizeClass(unref(ns).e("header")),
              border: "0",
              cellpadding: "0",
              cellspacing: "0",
              style: {
                width: "100%",
                tableLayout: "fixed"
              }
            }, [
              createVNode(_sfc_main$1),
              createVNode(unref(TableHeader))
            ], 2)
          ], 2),
          createElementVNode("div", {
            ref: "bodyWrapper",
            class: normalizeClass(unref(ns).e("body-wrapper"))
          }, [
            createVNode(unref(EtuScrollbar), {
              ref_key: "scrollBarRef",
              ref: scrollBarRef,
              height: unref(scrollbarHeight),
              maxHeight: unref(scrollbarMaxHeight),
              onScroll: unref(bindScroll)
            }, {
              default: withCtx(() => [
                createElementVNode("table", {
                  ref: "tableBodyNativeRef",
                  class: normalizeClass(unref(ns).e("body")),
                  cellspacing: "0",
                  cellpadding: "0",
                  border: "0",
                  style: {
                    width: "100%",
                    tableLayout: "fixed"
                  }
                }, [
                  createVNode(_sfc_main$1),
                  createVNode(unref(TableBody))
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
export {
  _sfc_main as default
};
