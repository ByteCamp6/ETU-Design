"use strict";
const vue = require("vue");
const dialog = require("../../tokens/dialog.js");
const dialogContent = require("./dialog-content.js");
require("../../icon/index.js");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const index$1 = require("../../hooks/use-draggable/index.js");
const icon_vue_vue_type_script_setup_true_lang = require("../../icon/src/icon.vue.js");
const __default__ = vue.defineComponent({
  name: "EtuDialogContent"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: dialogContent.dialogContentProps,
  emits: dialogContent.dialogContentEmits,
  setup(__props) {
    const props = __props;
    const { dialogRef, headerRef, style } = vue.inject(dialog.dialogInjectionKey);
    const ns = index.useNamespace("dialog");
    const dialogClass = vue.computed(() => {
      return [
        ns.b(),
        ns.is("draggable", props.draggable),
        ns.is("align-center", props.alignCenter),
        { [ns.m("center")]: props.center },
        props.customClass
      ];
    });
    const draggable = vue.computed(() => props.draggable);
    index$1.useDraggable(dialogRef, headerRef, draggable);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        ref_key: "dialogRef",
        ref: dialogRef,
        class: vue.normalizeClass(vue.unref(dialogClass)),
        style: vue.normalizeStyle(vue.unref(style))
      }, [
        vue.createElementVNode("header", {
          ref_key: "headerRef",
          ref: headerRef,
          class: vue.normalizeClass(vue.unref(ns).e("header"))
        }, [
          vue.renderSlot(_ctx.$slots, "header", {}, () => [
            vue.createElementVNode("span", {
              role: "heading",
              class: vue.normalizeClass(vue.unref(ns).e("title"))
            }, vue.toDisplayString(props.title), 3)
          ]),
          props.showClose ? (vue.openBlock(), vue.createElementBlock("button", {
            key: 0,
            class: vue.normalizeClass(vue.unref(ns).e("headerbtn")),
            type: "button",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
          }, [
            vue.createVNode(vue.unref(icon_vue_vue_type_script_setup_true_lang), {
              class: vue.normalizeClass(vue.unref(ns).e("close")),
              name: props.closeIcon || "close"
            }, null, 8, ["class", "name"])
          ], 2)) : vue.createCommentVNode("", true)
        ], 2),
        vue.createElementVNode("div", {
          class: vue.normalizeClass(vue.unref(ns).e("body"))
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2),
        _ctx.$slots.footer ? (vue.openBlock(), vue.createElementBlock("footer", {
          key: 0,
          class: vue.normalizeClass(vue.unref(ns).e("footer"))
        }, [
          vue.renderSlot(_ctx.$slots, "footer")
        ], 2)) : vue.createCommentVNode("", true)
      ], 6);
    };
  }
});
module.exports = _sfc_main;
