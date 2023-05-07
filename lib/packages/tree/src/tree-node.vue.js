"use strict";
const vue = require("vue");
const __default__ = {
  name: "EtuTree-node",
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: {
    options: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  setup(__props) {
    const props = __props;
    vue.ref(props.options);
    return (_ctx, _cache) => {
      return (
        vue.openBlock(),
        vue.createElementBlock("ul", null, [
          vue.renderSlot(_ctx.$slots, "default"),
        ])
      );
    };
  },
});
module.exports = _sfc_main;
