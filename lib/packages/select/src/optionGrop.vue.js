"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const optionGrop = require("./optionGrop.js");
const __default__ = {
  name: "EtuOptionGroup"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: optionGrop.optionGroupProps,
  setup(__props) {
    const props = __props;
    const ns = index.useNamespace("select-option-group");
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(vue.unref(ns).b())
      }, [
        vue.createElementVNode("span", {
          class: vue.normalizeClass(vue.unref(ns).e("title"))
        }, vue.toDisplayString(props.label), 3),
        vue.renderSlot(_ctx.$slots, "default"),
        vue.createElementVNode("span", {
          class: vue.normalizeClass(vue.unref(ns).e("line"))
        }, null, 2)
      ], 2);
    };
  }
});
module.exports = _sfc_main;
