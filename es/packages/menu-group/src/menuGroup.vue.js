import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, renderSlot } from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
const __default__ = defineComponent({
  name: "EtuMenuGroup"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    mode: {
      type: String,
      default: "vertical"
    },
    collapse: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: "#ffffff"
    },
    textColor: {
      type: String,
      default: "#303133"
    },
    defaultActive: {
      type: String,
      default: ""
    },
    menuTrigger: {
      type: String,
      default: "hover"
    }
  },
  setup(__props) {
    const props = __props;
    const bem = useNamespace("menuGroup");
    const tClass = computed(() => {
      return [
        bem.e(props.mode),
        bem.bem(props.menuTrigger, props.bgColor, props.textColor)
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(tClass))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
