"use strict";
const vue = require("vue");
const index = require("../../../hooks/use-namespace/index.js");
require("../../../hooks/use-z-index/index.js");
const usePagination = require("../use-pagination.js");
const total = require("./total.js");
const _hoisted_1 = ["disabled"];
const __default__ = vue.defineComponent({
  name: "EtuPaginationTotal"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: total.paginationTotalProps,
  setup(__props) {
    const props = __props;
    const ns = index.useNamespace("pagination");
    const { disabled } = usePagination.usePagination();
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("span", {
        class: vue.normalizeClass(vue.unref(ns).e("total")),
        disabled: vue.unref(disabled)
      }, vue.toDisplayString(`总计${props.total}条`), 11, _hoisted_1);
    };
  }
});
module.exports = _sfc_main;
