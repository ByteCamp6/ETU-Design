import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, renderSlot, createCommentVNode } from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import { isUndefined } from "../../utils/types.js";
import "../../hooks/use-z-index/index.js";
import { dividerProps } from "./divider.js";
const __default__ = {
  name: "EtuDivider"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: dividerProps,
  setup(__props) {
    const props = __props;
    const bem = useNamespace("divider");
    const style = computed(() => {
      return {
        "--border-style": isUndefined(props.borderStyle) ? "solid" : props.borderStyle
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(bem).b(), unref(bem).m(props.direction)]),
        style: normalizeStyle(unref(style))
      }, [
        _ctx.$slots.default && props.direction !== "vertical" ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(bem).e("text"), unref(bem).is(props.contentPosition)])
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)) : createCommentVNode("", true)
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
