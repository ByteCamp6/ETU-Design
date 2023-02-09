"use strict";
const vue = require("vue");
const checkbox = require("./checkbox.js");
require("../../utils/types.js");
const index = require("../../hooks/use-namespace/index.js");
require("../../hooks/use-z-index/index.js");
const useCheckbox = require("./composables/use-checkbox.js");
const _hoisted_1 = ["disabled", "value"];
const __default__ = vue.defineComponent({
  name: "EtuCheckbox"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: checkbox.checkboxProps,
  emits: checkbox.checkboxEmits,
  setup(__props) {
    const props = __props;
    const slots = vue.useSlots();
    const { isChecked, isDisabled, isFocused, hasOwnLabel, model, handleChange } = useCheckbox.useCheckbox(props, slots);
    const ns = index.useNamespace("checkbox");
    const labelClass = vue.computed(() => {
      return [
        ns.b(),
        ns.is("disabled", isDisabled.value),
        ns.is("checked", isChecked.value)
      ];
    });
    const spanClass = vue.computed(() => {
      return [
        ns.e("input"),
        ns.is("disabled", isDisabled.value),
        ns.is("checked", isChecked.value),
        ns.is("indeterminate", props.indeterminate),
        ns.is("focus", isFocused.value)
      ];
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("label", {
        class: vue.normalizeClass(vue.unref(labelClass))
      }, [
        vue.createElementVNode("span", {
          class: vue.normalizeClass(vue.unref(spanClass))
        }, [
          vue.withDirectives(vue.createElementVNode("input", {
            type: "checkbox",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(model) ? model.value = $event : null),
            class: vue.normalizeClass(vue.unref(ns).e("original")),
            disabled: vue.unref(isDisabled),
            value: props.label,
            onChange: _cache[1] || (_cache[1] = //@ts-ignore
            (...args) => vue.unref(handleChange) && vue.unref(handleChange)(...args)),
            onFocus: _cache[2] || (_cache[2] = ($event) => isFocused.value = true),
            onBlur: _cache[3] || (_cache[3] = ($event) => isFocused.value = false)
          }, null, 42, _hoisted_1), [
            [vue.vModelCheckbox, vue.unref(model)]
          ]),
          vue.createElementVNode("span", {
            class: vue.normalizeClass(vue.unref(ns).e("inner"))
          }, null, 2)
        ], 2),
        vue.unref(hasOwnLabel) ? (vue.openBlock(), vue.createElementBlock("span", {
          key: 0,
          class: vue.normalizeClass(vue.unref(ns).e("label"))
        }, [
          vue.renderSlot(_ctx.$slots, "default"),
          !_ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
            vue.createTextVNode(vue.toDisplayString(props.label), 1)
          ], 64)) : vue.createCommentVNode("", true)
        ], 2)) : vue.createCommentVNode("", true)
      ], 2);
    };
  }
});
module.exports = _sfc_main;
