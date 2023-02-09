"use strict";
const vue = require("vue");
const index = require("../../hooks/use-namespace/index.js");
require("../../utils/types.js");
require("../../hooks/use-z-index/index.js");
const input = require("./input.js");
require("../../icon/index.js");
const useInput = require("./composables/use-input.js");
const icon_vue_vue_type_script_setup_true_lang = require("../../icon/src/icon.vue.js");
const _hoisted_1 = ["value", "readonly"];
const _hoisted_2 = ["value", "readonly", "type", "placeholder", "disabled"];
const _hoisted_3 = /* @__PURE__ */ vue.createElementVNode("i", { class: "etu-i-close" }, null, -1);
const _hoisted_4 = [
  _hoisted_3
];
const __default__ = vue.defineComponent({
  name: "EtuInput"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: input.inputProps,
  emits: input.inputEmits,
  setup(__props, { expose }) {
    const props = __props;
    const attrs = vue.useAttrs();
    const slots = vue.useSlots();
    const bem = index.useNamespace("input");
    const bemArea = index.useNamespace("textarea");
    const {
      inputRef,
      textareaRef,
      aimRef,
      inputDisabled,
      handleInput,
      handleChange,
      handleCompositionStart,
      handleCompositionEnd,
      isEnter,
      isClearable,
      handleMouseEnter,
      handleMouseLeave,
      clearValue: clear,
      isPwdVisible,
      passwordVisible,
      eyeIcon,
      changeType,
      isShowPrefixIcon,
      isShowSuffixIcon
    } = useInput.useInput(props);
    const classes = vue.computed(() => {
      const { type, size } = props;
      return [
        bem.e("inner"),
        bem.m(type),
        bem.m(size),
        bem.is("prefix", !!props.prefixIcon),
        bem.is("disabled", inputDisabled.value)
      ];
    });
    const headClass = vue.computed(() => {
      return [
        bem.b(),
        bem.is("prepend", !!slots.prepend),
        bem.is("append", !!slots.append)
      ];
    });
    expose({
      inputRef,
      textareaRef,
      aimRef,
      clear
    });
    return (_ctx, _cache) => {
      return _ctx.type === "textarea" ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        class: vue.normalizeClass(vue.unref(bemArea).b()),
        onMouseenter: _cache[4] || (_cache[4] = //@ts-ignore
        (...args) => vue.unref(handleMouseEnter) && vue.unref(handleMouseEnter)(...args)),
        onMouseleave: _cache[5] || (_cache[5] = //@ts-ignore
        (...args) => vue.unref(handleMouseLeave) && vue.unref(handleMouseLeave)(...args))
      }, [
        vue.createElementVNode("textarea", vue.mergeProps({
          class: vue.unref(bemArea).e("inner")
        }, vue.unref(attrs), {
          ref_key: "textareaRef",
          ref: textareaRef,
          value: props.modelValue,
          readonly: props.readonly,
          onInput: _cache[0] || (_cache[0] = //@ts-ignore
          (...args) => vue.unref(handleInput) && vue.unref(handleInput)(...args)),
          onChange: _cache[1] || (_cache[1] = //@ts-ignore
          (...args) => vue.unref(handleChange) && vue.unref(handleChange)(...args)),
          onCompositionstart: _cache[2] || (_cache[2] = //@ts-ignore
          (...args) => vue.unref(handleCompositionStart) && vue.unref(handleCompositionStart)(...args)),
          onCompositionend: _cache[3] || (_cache[3] = //@ts-ignore
          (...args) => vue.unref(handleCompositionEnd) && vue.unref(handleCompositionEnd)(...args))
        }), null, 16, _hoisted_1)
      ], 34)) : (vue.openBlock(), vue.createElementBlock("div", {
        key: 1,
        class: vue.normalizeClass(vue.unref(headClass)),
        onMouseenter: _cache[11] || (_cache[11] = ($event) => isEnter.value = true),
        onMouseleave: _cache[12] || (_cache[12] = ($event) => isEnter.value = false)
      }, [
        vue.unref(slots).prepend ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: vue.normalizeClass(vue.unref(bem).e("prepend"))
        }, [
          vue.renderSlot(_ctx.$slots, "prepend")
        ], 2)) : vue.createCommentVNode("", true),
        vue.createElementVNode("input", vue.mergeProps({
          ref_key: "inputRef",
          ref: inputRef,
          class: vue.unref(classes)
        }, vue.unref(attrs), {
          value: props.modelValue,
          readonly: props.readonly,
          type: _ctx.showPassword ? vue.unref(passwordVisible) ? "text" : "password" : _ctx.type,
          placeholder: _ctx.placeholder,
          disabled: vue.unref(inputDisabled),
          onInput: _cache[6] || (_cache[6] = //@ts-ignore
          (...args) => vue.unref(handleInput) && vue.unref(handleInput)(...args)),
          onChange: _cache[7] || (_cache[7] = //@ts-ignore
          (...args) => vue.unref(handleChange) && vue.unref(handleChange)(...args)),
          onCompositionstart: _cache[8] || (_cache[8] = //@ts-ignore
          (...args) => vue.unref(handleCompositionStart) && vue.unref(handleCompositionStart)(...args)),
          onCompositionend: _cache[9] || (_cache[9] = //@ts-ignore
          (...args) => vue.unref(handleCompositionEnd) && vue.unref(handleCompositionEnd)(...args))
        }), null, 16, _hoisted_2),
        vue.unref(slots).append ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 1,
          class: vue.normalizeClass(vue.unref(bem).e("append"))
        }, [
          vue.renderSlot(_ctx.$slots, "append")
        ], 2)) : vue.createCommentVNode("", true),
        vue.unref(isClearable) ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
          key: 2,
          onClick: _cache[10] || (_cache[10] = //@ts-ignore
          (...args) => vue.unref(clear) && vue.unref(clear)(...args)),
          class: vue.normalizeClass(vue.unref(bem).e("suffix"))
        }, _hoisted_4, 2)), [
          [vue.vShow, vue.unref(isEnter)]
        ]) : vue.createCommentVNode("", true),
        vue.withDirectives(vue.createElementVNode("div", {
          class: vue.normalizeClass(vue.unref(bem).e("suffix"))
        }, [
          vue.createVNode(vue.unref(icon_vue_vue_type_script_setup_true_lang), {
            name: vue.unref(eyeIcon),
            onClick: vue.unref(changeType)
          }, null, 8, ["name", "onClick"])
        ], 2), [
          [vue.vShow, vue.unref(isPwdVisible)]
        ]),
        vue.unref(isShowPrefixIcon) ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 3,
          class: vue.normalizeClass(vue.unref(bem).e("prefix"))
        }, [
          vue.createVNode(vue.unref(icon_vue_vue_type_script_setup_true_lang), {
            name: props.prefixIcon
          }, null, 8, ["name"])
        ], 2)) : vue.createCommentVNode("", true),
        vue.unref(isShowSuffixIcon) ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 4,
          class: vue.normalizeClass(vue.unref(bem).e("suffix"))
        }, [
          vue.createVNode(vue.unref(icon_vue_vue_type_script_setup_true_lang), {
            name: props.suffixIcon
          }, null, 8, ["name"])
        ], 2)) : vue.createCommentVNode("", true)
      ], 34));
    };
  }
});
module.exports = _sfc_main;
