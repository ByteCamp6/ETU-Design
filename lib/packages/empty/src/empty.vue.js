"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const empty = require("./empty.js");
const _hoisted_1 = ["src"];
const _hoisted_2 = {
  key: 2,
  x: "1674394526690",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "10441",
  width: "200",
  height: "200"
};
const _hoisted_3 = /* @__PURE__ */ vue.createElementVNode("path", {
  d: "M839.2 101.3H184.9L65.3 539.5 64 922.7h896V549.3l-120.8-448zM241.9 176h540.3L884 549.3H678.7l-74.7 112H420l-74.7-112H140.1L241.9 176z",
  "p-id": "10442"
}, null, -1);
const _hoisted_4 = [
  _hoisted_3
];
const _hoisted_5 = { key: 1 };
const __default__ = vue.defineComponent({
  name: "EtuEmpty"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: empty.emptyProps,
  setup(__props) {
    const props = __props;
    const ns = index.useNamespace("empty");
    const imageStyle = vue.computed(() => ({
      width: props.imageSize ? `${props.imageSize}px` : ""
    }));
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(vue.unref(ns).b())
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(vue.unref(ns).e("image"))
        }, [
          _ctx.$slots.image ? vue.renderSlot(_ctx.$slots, "image", { key: 0 }) : props.image ? (vue.openBlock(), vue.createElementBlock("img", {
            key: 1,
            src: props.image,
            style: vue.normalizeStyle(vue.unref(imageStyle))
          }, null, 12, _hoisted_1)) : (vue.openBlock(), vue.createElementBlock("svg", _hoisted_2, _hoisted_4))
        ], 2),
        vue.createElementVNode("div", {
          class: vue.normalizeClass(vue.unref(ns).e("description"))
        }, [
          _ctx.$slots.description ? vue.renderSlot(_ctx.$slots, "description", { key: 0 }) : (vue.openBlock(), vue.createElementBlock("p", _hoisted_5, vue.toDisplayString(props.description), 1))
        ], 2),
        _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: vue.normalizeClass(vue.unref(ns).e("bottom"))
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2)) : vue.createCommentVNode("", true)
      ], 2);
    };
  }
});
module.exports = _sfc_main;
