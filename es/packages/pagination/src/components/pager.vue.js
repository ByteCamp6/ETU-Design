import { defineComponent, ref, computed, watchEffect, openBlock, createElementBlock, normalizeClass, unref, createCommentVNode, createVNode, Fragment, renderList, toDisplayString } from "vue";
import "../../../icon/index.js";
import { paginationPagerProps } from "./pager.js";
import { useNamespace } from "../../../hooks/use-namespace/index.js";
import "../../../hooks/use-z-index/index.js";
import _sfc_main$1 from "../../../icon/src/icon.vue.js";
const _hoisted_1 = ["onClick"];
const __default__ = defineComponent({
  name: "EtuPaginationPager"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: paginationPagerProps,
  emits: ["change"],
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("pager");
    const showPrevMore = ref(false);
    const showNextMore = ref(false);
    const pagers = computed(() => {
      const pagerCount = props.pagerCount;
      const halfPagerCount = (pagerCount - 1) / 2;
      const currentPage = Number(props.currentPage);
      const pageCount = Number(props.pageCount);
      let showPrevMore2 = false;
      let showNextMore2 = false;
      if (pageCount > pagerCount) {
        if (currentPage > pagerCount - halfPagerCount) {
          showPrevMore2 = true;
        }
        if (currentPage < pageCount - halfPagerCount) {
          showNextMore2 = true;
        }
      }
      const array = [];
      if (showPrevMore2 && !showNextMore2) {
        const startPage = pageCount - (pagerCount - 2);
        for (let i = startPage; i < pageCount; i++) {
          array.push(i);
        }
      } else if (!showPrevMore2 && showNextMore2) {
        for (let i = 2; i < pagerCount; i++) {
          array.push(i);
        }
      } else if (showPrevMore2 && showNextMore2) {
        const offset = Math.floor(pagerCount / 2) - 1;
        for (let i = currentPage - offset; i <= currentPage + offset; i++) {
          array.push(i);
        }
      } else {
        for (let i = 2; i < pageCount; i++) {
          array.push(i);
        }
      }
      return array;
    });
    watchEffect(() => {
      const halfPagerCount = (props.pagerCount - 1) / 2;
      showPrevMore.value = false;
      showNextMore.value = false;
      if (props.pageCount > props.pagerCount) {
        if (props.currentPage > props.pagerCount - halfPagerCount) {
          showPrevMore.value = true;
        }
        if (props.currentPage < props.pageCount - halfPagerCount) {
          showNextMore.value = true;
        }
      }
    });
    function onPagerClick(pager) {
      if (props.disabled) {
        return;
      }
      const pageCount = props.pageCount;
      const currentPage = props.currentPage;
      let newPage = pager;
      if (!Number.isNaN(+newPage)) {
        if (newPage < 1) {
          newPage = 1;
        }
        if (newPage > pageCount) {
          newPage = pageCount;
        }
      }
      if (newPage !== currentPage) {
        emit("change", newPage);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ul", {
        class: normalizeClass([unref(ns).b()])
      }, [
        props.pageCount > 0 ? (openBlock(), createElementBlock("li", {
          key: 0,
          class: normalizeClass(["number", [
            unref(ns).is("active", props.currentPage === 1),
            unref(ns).is("disabled", props.disabled)
          ]]),
          onClick: _cache[0] || (_cache[0] = ($event) => onPagerClick(1))
        }, " 1 ", 2)) : createCommentVNode("", true),
        showPrevMore.value ? (openBlock(), createElementBlock("li", {
          key: 1,
          class: normalizeClass([unref(ns).is("disabled", props.disabled)]),
          onClick: _cache[1] || (_cache[1] = ($event) => onPagerClick(props.currentPage - props.pagerCount + 2))
        }, [
          createVNode(unref(_sfc_main$1), { name: "elipsis" })
        ], 2)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(pagers), (pager) => {
          return openBlock(), createElementBlock("li", {
            class: normalizeClass([[
              unref(ns).is("active", props.currentPage === pager),
              unref(ns).is("disabled", props.disabled)
            ], "number"]),
            key: pager,
            onClick: ($event) => onPagerClick(pager)
          }, toDisplayString(pager), 11, _hoisted_1);
        }), 128)),
        showNextMore.value ? (openBlock(), createElementBlock("li", {
          key: 2,
          class: normalizeClass([unref(ns).is("disabled", props.disabled)]),
          onClick: _cache[2] || (_cache[2] = ($event) => onPagerClick(props.currentPage + props.pagerCount - 2))
        }, [
          createVNode(unref(_sfc_main$1), { name: "elipsis" })
        ], 2)) : createCommentVNode("", true),
        props.pageCount > 1 ? (openBlock(), createElementBlock("li", {
          key: 3,
          class: normalizeClass([[
            unref(ns).is("active", props.currentPage === props.pageCount),
            unref(ns).is("disabled", props.disabled)
          ], "number"]),
          onClick: _cache[3] || (_cache[3] = ($event) => onPagerClick(props.pageCount))
        }, toDisplayString(props.pageCount), 3)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
