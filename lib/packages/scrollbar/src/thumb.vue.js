"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const thumb = require("./thumb.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "thumb",
  props: thumb.thumbProps,
  setup(__props) {
    const props = __props;
    vue.ref(0);
    const barClass = vue.computed(() => {
      return [
        ns.e("bar"),
        ns.is("vertical", props.vertical),
        ns.is("horizontal", !props.vertical),
      ];
    });
    const thumbStyle = vue.computed(() => {
      return {
        width: !props.vertical ? props.size : "",
        height: props.vertical ? props.size : "",
        transform: `translateY(${props.move}%)`,
      };
    });
    const ns = index.useNamespace("scrollbar");
    return (_ctx, _cache) => {
      return (
        vue.openBlock(),
        vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass(vue.unref(barClass)),
          },
          [
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass(vue.unref(ns).e("thumb")),
                style: vue.normalizeStyle(vue.unref(thumbStyle)),
              },
              null,
              6,
            ),
          ],
          2,
        )
      );
    };
  },
});
module.exports = _sfc_main;
