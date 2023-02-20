"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const __default__ = vue.defineComponent({
  name: "EtuDropdownMenu"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  setup(__props) {
    const ns = index.useNamespace("dropdown");
    const dropdownMenuCls = [ns.b("menu")];
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("ul", {
        class: vue.normalizeClass(dropdownMenuCls)
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
module.exports = _sfc_main;
