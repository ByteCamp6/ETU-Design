"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../utils/types.js");
require("../../hooks/use-z-index/index.js");
const useRadio = require("./use-radio.js");
const radio = require("./radio.js");
const _hoisted_1 = ["value", "disabled"];
const __default__ = vue.defineComponent({
  name: "EtuRadio"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: radio.radioProps,
  emits: radio.radioEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = index.useNamespace("radio");
    const { radioRef, focus, size, disabled, modelValue } = useRadio.useRadio(props);
    const labelClass = vue.computed(() => {
      return [
        ns.b(),
        ns.is("disabled", disabled.value),
        ns.is("focus", focus.value),
        ns.is("checked", modelValue.value === props.label),
        ns.m(size)
      ];
    });
    const spanClass = vue.computed(() => {
      return [
        ns.e("input"),
        ns.is("disabled", disabled.value),
        ns.is("checked", modelValue.value === props.label)
      ];
    });
    function handleChange() {
      vue.nextTick(() => emit("change", modelValue.value));
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("label", {
        class: vue.normalizeClass(vue.unref(labelClass))
      }, [
        vue.createElementVNode("span", {
          class: vue.normalizeClass(vue.unref(spanClass))
        }, [
          vue.withDirectives(vue.createElementVNode("input", {
            ref_key: "radioRef",
            ref: radioRef,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(modelValue) ? modelValue.value = $event : null),
            class: vue.normalizeClass(vue.unref(ns).e("original")),
            value: props.label,
            disabled: vue.unref(disabled),
            type: "radio",
            onFocus: _cache[1] || (_cache[1] = ($event) => focus.value = true),
            onBlur: _cache[2] || (_cache[2] = ($event) => focus.value = false),
            onChange: handleChange
          }, null, 42, _hoisted_1), [
            [vue.vModelRadio, vue.unref(modelValue)]
          ]),
          vue.createElementVNode("span", {
            class: vue.normalizeClass(vue.unref(ns).e("inner"))
          }, null, 2)
        ], 2),
        vue.createElementVNode("span", {
          class: vue.normalizeClass(vue.unref(ns).e("label"))
        }, [
          vue.renderSlot(_ctx.$slots, "default"),
          !_ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
            vue.createTextVNode(vue.toDisplayString(props.label), 1)
          ], 64)) : vue.createCommentVNode("", true)
        ], 2)
      ], 2);
    };
  }
});
module.exports = _sfc_main;
