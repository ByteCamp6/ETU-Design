"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../utils/types.js");
require("../../hooks/use-z-index/index.js");
const collapseItem = require("./collapse-item.js");
const collapse = require("../../tokens/collapse.js");
const __default__ = {
  name: "EtuCollapseItem"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: collapseItem.collapseItemProps,
  setup(__props) {
    const props = __props;
    const ns = index.useNamespace("collapse-item");
    const collapse$1 = vue.inject(collapse.collapseKey);
    const inner = vue.ref(null);
    const contentToggle = () => {
      collapse$1.clickItem(props.name);
    };
    const isShow = vue.computed(() => {
      return collapse$1.hasExit(props.name);
    });
    return (_ctx, _cache) => {
      const _component_etu_icon = vue.resolveComponent("etu-icon");
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([vue.unref(ns).b(), vue.unref(ns).is("focus", vue.unref(collapse$1).hasExit(props.name))])
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(vue.unref(ns).e("title")),
          onClick: contentToggle
        }, [
          vue.createElementVNode("span", null, vue.toDisplayString(props.title), 1),
          vue.createVNode(_component_etu_icon, {
            class: vue.normalizeClass(vue.unref(ns).e("icon")),
            name: "arrow-right-bold"
          }, null, 8, ["class"])
        ], 2),
        vue.withDirectives(vue.createElementVNode("div", {
          class: vue.normalizeClass(vue.unref(ns).e("content"))
        }, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(vue.unref(ns).e("inner")),
            ref_key: "inner",
            ref: inner
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 2)
        ], 2), [
          [vue.vShow, vue.unref(isShow)]
        ])
      ], 2);
    };
  }
});
module.exports = _sfc_main;
