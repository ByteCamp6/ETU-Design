"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const breadcrumb = require("./breadcrumb.js");
const breadcrumb$1 = require("../../tokens/breadcrumb.js");
const __default__ = {
  name: "EtuBreadcrumb"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: breadcrumb.breadcrumbProps,
  setup(__props) {
    const props = __props;
    const bem = index.useNamespace("breadcrumb");
    vue.provide(breadcrumb$1.breadcrumbKey, props);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        ref: "breadcrumb",
        class: vue.normalizeClass(vue.unref(bem).b())
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
module.exports = _sfc_main;
