import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, renderSlot, createBlock, withModifiers, createCommentVNode } from "vue";
import "../../icon/index.js";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
import { tagProps, tagEmits } from "./tag.js";
import _sfc_main$1 from "../../icon/src/icon.vue.js";
const __default__ = defineComponent({
  name: "EtuTag"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: tagProps,
  emits: tagEmits,
  setup(__props, { emit }) {
    const props = __props;
    const classes = computed(() => {
      const { type, size, effect, closable, round } = props;
      return [
        ns.b(),
        ns.is("closable", closable),
        ns.m(type),
        ns.m(size),
        ns.m(effect),
        ns.is("round", round)
      ];
    });
    const ns = useNamespace("tag");
    const handleClick = (event) => {
      emit("click", event);
    };
    const handleClose = (event) => {
      emit("click", event);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(classes)),
        onClick: handleClick
      }, [
        createElementVNode("span", {
          class: normalizeClass(unref(ns).e("content"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        props.closable ? (openBlock(), createBlock(unref(_sfc_main$1), {
          key: 0,
          name: "close",
          class: normalizeClass(unref(ns).e("close")),
          onClick: withModifiers(handleClose, ["stop"])
        }, null, 8, ["class", "onClick"])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
