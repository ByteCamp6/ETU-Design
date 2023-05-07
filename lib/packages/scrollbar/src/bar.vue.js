"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const bar = require("./bar.js");
const thumb_vue_vue_type_script_setup_true_lang = require("./thumb.vue.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "bar",
  props: bar.barProps,
  setup(__props, { expose }) {
    const props = __props;
    const moveX = vue.ref(0);
    const moveY = vue.ref(0);
    const handleScroll = (wrap) => {
      if (wrap) {
        const offsetHeight = wrap.offsetHeight - 4;
        const offsetWidth = wrap.offsetWidth - 4;
        moveY.value = ((wrap.scrollTop * 100) / offsetHeight) * props.ratioY;
        moveX.value = ((wrap.scrollLeft * 100) / offsetWidth) * props.ratioX;
      }
    };
    index.useNamespace("scrollbar");
    expose({
      handleScroll,
    });
    return (_ctx, _cache) => {
      return (
        vue.openBlock(),
        vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createVNode(
              thumb_vue_vue_type_script_setup_true_lang,
              {
                move: moveX.value,
                ratio: _ctx.ratioX,
                size: _ctx.width,
                always: _ctx.always,
              },
              null,
              8,
              ["move", "ratio", "size", "always"],
            ),
            vue.createVNode(
              thumb_vue_vue_type_script_setup_true_lang,
              {
                move: moveY.value,
                ratio: _ctx.ratioY,
                size: _ctx.height,
                vertical: "",
                always: _ctx.always,
              },
              null,
              8,
              ["move", "ratio", "size", "always"],
            ),
          ],
          64,
        )
      );
    };
  },
});
module.exports = _sfc_main;
