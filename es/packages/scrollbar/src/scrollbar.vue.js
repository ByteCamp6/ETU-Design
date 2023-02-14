import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, normalizeStyle, renderSlot } from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
import { scrollbarProps } from "./scrollbar.js";
const __default__ = {
  name: "EtuScrollbar"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: scrollbarProps,
  setup(__props) {
    const props = __props;
    const wrapperStyle = computed(() => {
      return {
        height: typeof props.height === "number" ? props.height + "px" : props.height,
        maxHeight: typeof props.height === "number" ? props.height + "px" : props.height
      };
    });
    console.log(wrapperStyle);
    const ns = useNamespace("scrollbar");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns).b())
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(ns).e("wrapper")),
          style: normalizeStyle(unref(wrapperStyle))
        }, [
          createElementVNode("div", {
            class: normalizeClass(unref(ns).e("view"))
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2)
        ], 6)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
