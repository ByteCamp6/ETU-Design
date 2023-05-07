import {
  defineComponent,
  computed,
  openBlock,
  createElementBlock,
  unref,
  toDisplayString,
  createCommentVNode,
  createVNode,
} from "vue";
import "../../../icon/index.js";
import { paginationPrevProps, paginationPrevEmits } from "./prev.js";
import _sfc_main$1 from "../../../icon/src/icon.vue.js";
const _hoisted_1 = ["disabled"];
const _hoisted_2 = { key: 0 };
const __default__ = defineComponent({
  name: "EtuPaginationPrev",
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: paginationPrevProps,
  emits: paginationPrevEmits,
  setup(__props) {
    const props = __props;
    const internalDisabled = computed(
      () => props.disabled || props.currentPage <= 1,
    );
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          "button",
          {
            type: "button",
            class: "btn-prev",
            disabled: unref(internalDisabled),
            onClick:
              _cache[0] ||
              (_cache[0] = ($event) => _ctx.$emit("click", $event)),
          },
          [
            props.prevText
              ? (openBlock(),
                createElementBlock(
                  "span",
                  _hoisted_2,
                  toDisplayString(props.prevText),
                  1,
                ))
              : createCommentVNode("", true),
            createVNode(unref(_sfc_main$1), { name: "arrow-left-bold" }),
          ],
          8,
          _hoisted_1,
        )
      );
    };
  },
});
export { _sfc_main as default };
