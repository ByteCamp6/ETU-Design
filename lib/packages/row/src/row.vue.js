"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const row = require("./row.js");
const __default__ = {
  name: "EtuRow",
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: row.rowProps,
  setup(__props) {
    const props = __props;
    const bem = index.useNamespace("row");
    const rowRef = vue.ref();
    const classes = vue.computed(() => {
      const isFlex = props.type === "flex";
      const temp = isFlex ? bem.m("flex") : bem.b();
      const name = [temp];
      if (isFlex) {
        name.push(`etu-row-flex-justify-${props.justify}`);
        name.push(`etu-row-flex-align-${props.align}`);
      }
      return name;
    });
    const setColAttrs = () => {
      const row2 = rowRef.value.children || [];
      let len = row2.length;
      if (len === 0) return;
      for (let i = 0; i < len; i++) {
        row2[i].classList.add("etu-col");
        if (props.gutter !== 0 && len > 1) {
          if (i !== 0) row2[i].style.paddingLeft = `${props.gutter}px`;
          if (i !== len - 1) row2[i].style.paddingRight = `${props.gutter}px`;
        }
      }
    };
    vue.onMounted(() => {
      setColAttrs();
    });
    return (_ctx, _cache) => {
      return (
        vue.openBlock(),
        vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass(vue.unref(classes)),
            ref_key: "rowRef",
            ref: rowRef,
          },
          [vue.renderSlot(_ctx.$slots, "default")],
          2,
        )
      );
    };
  },
});
module.exports = _sfc_main;
