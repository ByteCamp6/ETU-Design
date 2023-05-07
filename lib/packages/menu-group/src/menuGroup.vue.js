"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const __default__ = vue.defineComponent({
  name: "EtuMenuGroup",
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: {
    mode: {
      type: String,
      default: "vertical",
    },
    collapse: {
      type: Boolean,
      default: false,
    },
    bgColor: {
      type: String,
      default: "#ffffff",
    },
    textColor: {
      type: String,
      default: "#303133",
    },
    defaultActive: {
      type: String,
      default: "",
    },
    menuTrigger: {
      type: String,
      default: "hover",
    },
  },
  setup(__props) {
    const props = __props;
    const bem = index.useNamespace("menuGroup");
    const tClass = vue.computed(() => {
      return [
        bem.e(props.mode),
        bem.bem(props.menuTrigger, props.bgColor, props.textColor),
      ];
    });
    return (_ctx, _cache) => {
      return (
        vue.openBlock(),
        vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass(vue.unref(tClass)),
          },
          [vue.renderSlot(_ctx.$slots, "default")],
          2,
        )
      );
    };
  },
});
module.exports = _sfc_main;
