import { defineComponent, ref, computed, openBlock, createElementBlock, normalizeClass, unref, renderSlot } from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
const _hoisted_1 = ["disabled"];
const __default__ = defineComponent({
  name: "EtuButton"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    type: {
      type: String,
      default: "default"
    },
    disabled: {
      state: Boolean,
      default: false
    },
    Hollow: {
      Hollow: String,
      default: "solid"
    },
    Curvature: {
      Curvature: String,
      default: "Microcurvature"
    },
    shape: {
      shape: String,
      default: "rectangle"
    },
    circle: {
      disable: String,
      default: "false"
    },
    size: {
      size: String,
      default: "normal"
    }
  },
  setup(__props) {
    const porps = __props;
    const bem = useNamespace("Button");
    const state = ref(porps.disabled);
    const tClass = computed(() => {
      return [
        bem.be(porps.circle, porps.size),
        bem.bem(porps.type, porps.Hollow, porps.Curvature),
        bem.e(porps.disabled)
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(unref(tClass)),
        disabled: state.value
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
