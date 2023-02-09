import { defineComponent, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, toDisplayString, renderSlot } from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../utils/types.js";
import "../../hooks/use-z-index/index.js";
import { optionGroupProps } from "./optionGrop.js";
const __default__ = {
  name: "EtuOptionGroup"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: optionGroupProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("select-option-group");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns).b())
      }, [
        createElementVNode("span", {
          class: normalizeClass(unref(ns).e("title"))
        }, toDisplayString(props.label), 3),
        renderSlot(_ctx.$slots, "default"),
        createElementVNode("span", {
          class: normalizeClass(unref(ns).e("line"))
        }, null, 2)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
