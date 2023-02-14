"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const link = require("./link.js");
const _hoisted_1 = ["href"];
const __default__ = vue.defineComponent({
  name: "EtuLink"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: link.linkProps,
  emits: link.linkEmits,
  setup(__props, { emit }) {
    const props = __props;
    const bem = index.useNamespace("link");
    let linkKls = [
      bem.b(),
      bem.m(props.type),
      bem.is("disabled", props.disabled),
      bem.is("underline", props.underline && !props.disabled)
    ];
    function handleClick(event) {
      if (!props.disabled)
        emit("click", event);
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("a", {
        class: vue.normalizeClass(vue.unref(linkKls)),
        href: _ctx.disabled || !_ctx.href ? void 0 : _ctx.href,
        onClick: handleClick
      }, [
        _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("span", {
          key: 0,
          class: vue.normalizeClass(vue.unref(bem).e("inner"))
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2)) : vue.createCommentVNode("", true)
      ], 10, _hoisted_1);
    };
  }
});
module.exports = _sfc_main;
