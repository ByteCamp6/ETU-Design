"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const collapse = require("./collapse.js");
const collapse$1 = require("../../tokens/collapse.js");
const __default__ = {
  name: "EtuCollapse",
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: collapse.collapseProps,
  emits: collapse.collapseEmits,
  setup(__props, { emit }) {
    const props = __props;
    const currentItem = vue.reactive(/* @__PURE__ */ new Map());
    const hasExit = (name) => {
      return currentItem.has(name);
    };
    const clickItem = (name) => {
      emit("change", name);
      if (currentItem.has(name)) {
        currentItem.delete(name);
        return;
      }
      if (props.accordion) {
        currentItem.clear();
      }
      currentItem.set(name, 1);
    };
    vue.provide(
      collapse$1.collapseKey,
      vue.reactive({ clickItem, currentItem, hasExit }),
    );
    const ns = index.useNamespace("collapse");
    return (_ctx, _cache) => {
      return (
        vue.openBlock(),
        vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass(vue.unref(ns).b()),
          },
          [vue.renderSlot(_ctx.$slots, "default")],
          2,
        )
      );
    };
  },
});
module.exports = _sfc_main;
