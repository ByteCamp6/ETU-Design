"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const col = require("./col.js");
const __default__ = {
  name: "EtuCol",
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: col.colProps,
  setup(__props) {
    const props = __props;
    const bem = index.useNamespace("col");
    let colClassName = vue.computed(() => {
      let temp = bem.b();
      let className = [];
      props.span !== 0 ? className.push(`${temp}-${props.span}`) : "";
      props.offset !== 0
        ? className.push(`${temp}-offset-${props.offset}`)
        : "";
      return className;
    });
    return (_ctx, _cache) => {
      return (
        vue.openBlock(),
        vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass(vue.unref(colClassName)),
          },
          [vue.renderSlot(_ctx.$slots, "default")],
          2,
        )
      );
    };
  },
});
module.exports = _sfc_main;
