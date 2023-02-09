"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../utils/types.js");
require("../../hooks/use-z-index/index.js");
const tag = require("./tag.js");
const __default__ = vue.defineComponent({
  name: "EtuTag"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: tag.tagProps,
  emits: tag.tagEmits,
  setup(__props, { emit }) {
    const props = __props;
    const classes = vue.computed(() => {
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
    const ns = index.useNamespace("tag");
    const handleClick = (event) => {
      emit("click", event);
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("span", {
        class: vue.normalizeClass(vue.unref(classes)),
        onClick: handleClick
      }, [
        vue.createElementVNode("span", {
          class: vue.normalizeClass(vue.unref(ns).e("content"))
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2)
      ], 2);
    };
  }
});
module.exports = _sfc_main;
