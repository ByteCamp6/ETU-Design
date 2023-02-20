"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const __default__ = vue.defineComponent({
  name: "EtuMenuItem"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
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
      default: "inherit"
    },
    textColor: {
      type: String,
      default: "inherit"
    },
    defaultActive: {
      type: String,
      default: ""
    },
    menuTrigger: {
      type: String,
      default: "hover"
    },
    disabled: {
      type: String,
      default: "false"
    },
    component: {
      type: String,
      default: null
    }
  },
  emits: ["click"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const bem = index.useNamespace("menuItem");
    const tClass = vue.computed(() => {
      return [
        bem.e(props.disabled),
        bem.bem(props.menuTrigger, props.bgColor, props.textColor)
      ];
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(vue.unref(tClass)),
        onClick: _cache[0] || (_cache[0] = //@ts-ignore
        (...args) => _ctx.handleClick && _ctx.handleClick(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
module.exports = _sfc_main;
