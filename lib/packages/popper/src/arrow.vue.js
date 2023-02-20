"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "arrow",
  setup(__props) {
    const ns = index.useNamespace("popper");
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(vue.unref(ns).e("arrow")),
        "data-popper-arrow": ""
      }, null, 2);
    };
  }
});
module.exports = _sfc_main;
