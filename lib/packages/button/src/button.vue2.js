"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const _hoisted_1 = ["disabled"];
const __default__ = {
  name: "EtuButton"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
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
    const bem = index.useNamespace("Button");
    const state = vue.ref(porps.disabled);
    const tClass = vue.computed(() => {
      return [
        bem.be(porps.circle, porps.size),
        bem.bem(porps.type, porps.Hollow, porps.Curvature),
        bem.e(porps.disabled)
      ];
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", {
        class: vue.normalizeClass(vue.unref(tClass)),
        disabled: state.value
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 10, _hoisted_1);
    };
  }
});
module.exports = _sfc_main;
