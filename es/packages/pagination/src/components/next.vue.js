import { defineComponent, computed, openBlock, createElementBlock, unref, toDisplayString, createCommentVNode, createVNode } from "vue";
import "../../../icon/index.js";
import { paginationNextProps, paginationNextEmits } from "./next.js";
import _sfc_main$1 from "../../../icon/src/icon.vue.js";
const _hoisted_1 = ["disabled"];
const _hoisted_2 = { key: 0 };
const __default__ = defineComponent({
  name: "EtuPaginationNext"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: paginationNextProps,
  emits: paginationNextEmits,
  setup(__props) {
    const props = __props;
    const internalDisabled = computed(
      () => props.disabled || props.currentPage === props.pageCount || props.pageCount === 0
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: "btn-next",
        disabled: unref(internalDisabled),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, [
        props.nextText ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(props.nextText), 1)) : createCommentVNode("", true),
        createVNode(unref(_sfc_main$1), { name: "arrow-right-bold" })
      ], 8, _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
