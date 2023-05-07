"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const icon = require("./icon.js");
const __default__ = {
  name: "EtuIcon",
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: icon.iconProps,
  setup(__props) {
    const props = __props;
    const bem = index.useNamespace("i");
    const classes = vue.computed(() => {
      const { name } = props;
      return [bem.b(name), bem.b()];
    });
    return (_ctx, _cache) => {
      return (
        vue.openBlock(),
        vue.createElementBlock(
          "i",
          {
            class: vue.normalizeClass(vue.unref(classes)),
          },
          [vue.renderSlot(_ctx.$slots, "default")],
          2,
        )
      );
    };
  },
});
module.exports = _sfc_main;
