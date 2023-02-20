"use strict";
const vue = require("vue");
require("../../icon/index.js");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const tag = require("./tag.js");
const icon_vue_vue_type_script_setup_true_lang = require("../../icon/src/icon.vue.js");
const __default__ = vue.defineComponent({
  name: "EtuTag"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: tag.tagProps,
  emits: tag.tagEmits,
  setup(__props, { emit }) {
    const props = __props;
    const classes = vue.computed(() => {
      const { type, size, effect, closable, round } = props;
      return [
        ns.b(),
        ns.is("closable", closable),
        ns.m(type),
        ns.m(size),
        ns.m(effect),
        ns.is("round", round)
      ];
    });
    const ns = index.useNamespace("tag");
    const handleClick = (event) => {
      emit("click", event);
    };
    const handleClose = (event) => {
      emit("click", event);
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("span", {
        class: vue.normalizeClass(vue.unref(classes)),
        onClick: handleClick
      }, [
        vue.createElementVNode("span", {
          class: vue.normalizeClass(vue.unref(ns).e("content"))
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2),
        props.closable ? (vue.openBlock(), vue.createBlock(vue.unref(icon_vue_vue_type_script_setup_true_lang), {
          key: 0,
          name: "close",
          class: vue.normalizeClass(vue.unref(ns).e("close")),
          onClick: vue.withModifiers(handleClose, ["stop"])
        }, null, 8, ["class", "onClick"])) : vue.createCommentVNode("", true)
      ], 2);
    };
  }
});
module.exports = _sfc_main;
