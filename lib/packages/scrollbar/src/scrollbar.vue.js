"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../utils/types.js");
require("../../hooks/use-z-index/index.js");
const scrollbar = require("./scrollbar.js");
const __default__ = {
  name: "EtuScrollbar"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: scrollbar.scrollbarProps,
  setup(__props) {
    const props = __props;
    const wrapperStyle = vue.computed(() => {
      return {
        height: typeof props.height === "number" ? props.height + "px" : props.height,
        maxHeight: typeof props.height === "number" ? props.height + "px" : props.height
      };
    });
    console.log(wrapperStyle);
    const ns = index.useNamespace("scrollbar");
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(vue.unref(ns).b())
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(vue.unref(ns).e("wrapper")),
          style: vue.normalizeStyle(vue.unref(wrapperStyle))
        }, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(vue.unref(ns).e("view"))
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 2)
        ], 6)
      ], 2);
    };
  }
});
module.exports = _sfc_main;
