import { defineComponent, useAttrs, useSlots, computed, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, mergeProps, renderSlot, createCommentVNode, withDirectives, vShow, createVNode } from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../utils/types.js";
import "../../hooks/use-z-index/index.js";
import { inputProps, inputEmits } from "./input.js";
import "../../icon/index.js";
import { useInput } from "./composables/use-input.js";
import _sfc_main$1 from "../../icon/src/icon.vue.js";
const _hoisted_1 = ["value", "readonly"];
const _hoisted_2 = ["value", "readonly", "type", "placeholder", "disabled"];
const _hoisted_3 = /* @__PURE__ */ createElementVNode("i", { class: "etu-i-close" }, null, -1);
const _hoisted_4 = [
  _hoisted_3
];
const __default__ = defineComponent({
  name: "EtuInput"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: inputProps,
  emits: inputEmits,
  setup(__props, { expose }) {
    const props = __props;
    const attrs = useAttrs();
    const slots = useSlots();
    const bem = useNamespace("input");
    const bemArea = useNamespace("textarea");
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
    } = useInput(props);
    const classes = computed(() => {
      const { type, size } = props;
      return [
        bem.e("inner"),
        bem.m(type),
        bem.m(size),
        bem.is("prefix", !!props.prefixIcon),
        bem.is("disabled", inputDisabled.value)
      ];
    });
    const headClass = computed(() => {
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
      return _ctx.type === "textarea" ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(unref(bemArea).b()),
        onMouseenter: _cache[4] || (_cache[4] = //@ts-ignore
        (...args) => unref(handleMouseEnter) && unref(handleMouseEnter)(...args)),
        onMouseleave: _cache[5] || (_cache[5] = //@ts-ignore
        (...args) => unref(handleMouseLeave) && unref(handleMouseLeave)(...args))
      }, [
        createElementVNode("textarea", mergeProps({
          class: unref(bemArea).e("inner")
        }, unref(attrs), {
          ref_key: "textareaRef",
          ref: textareaRef,
          value: props.modelValue,
          readonly: props.readonly,
          onInput: _cache[0] || (_cache[0] = //@ts-ignore
          (...args) => unref(handleInput) && unref(handleInput)(...args)),
          onChange: _cache[1] || (_cache[1] = //@ts-ignore
          (...args) => unref(handleChange) && unref(handleChange)(...args)),
          onCompositionstart: _cache[2] || (_cache[2] = //@ts-ignore
          (...args) => unref(handleCompositionStart) && unref(handleCompositionStart)(...args)),
          onCompositionend: _cache[3] || (_cache[3] = //@ts-ignore
          (...args) => unref(handleCompositionEnd) && unref(handleCompositionEnd)(...args))
        }), null, 16, _hoisted_1)
      ], 34)) : (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(unref(headClass)),
        onMouseenter: _cache[11] || (_cache[11] = ($event) => isEnter.value = true),
        onMouseleave: _cache[12] || (_cache[12] = ($event) => isEnter.value = false)
      }, [
        unref(slots).prepend ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(bem).e("prepend"))
        }, [
          renderSlot(_ctx.$slots, "prepend")
        ], 2)) : createCommentVNode("", true),
        createElementVNode("input", mergeProps({
          ref_key: "inputRef",
          ref: inputRef,
          class: unref(classes)
        }, unref(attrs), {
          value: props.modelValue,
          readonly: props.readonly,
          type: _ctx.showPassword ? unref(passwordVisible) ? "text" : "password" : _ctx.type,
          placeholder: _ctx.placeholder,
          disabled: unref(inputDisabled),
          onInput: _cache[6] || (_cache[6] = //@ts-ignore
          (...args) => unref(handleInput) && unref(handleInput)(...args)),
          onChange: _cache[7] || (_cache[7] = //@ts-ignore
          (...args) => unref(handleChange) && unref(handleChange)(...args)),
          onCompositionstart: _cache[8] || (_cache[8] = //@ts-ignore
          (...args) => unref(handleCompositionStart) && unref(handleCompositionStart)(...args)),
          onCompositionend: _cache[9] || (_cache[9] = //@ts-ignore
          (...args) => unref(handleCompositionEnd) && unref(handleCompositionEnd)(...args))
        }), null, 16, _hoisted_2),
        unref(slots).append ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(unref(bem).e("append"))
        }, [
          renderSlot(_ctx.$slots, "append")
        ], 2)) : createCommentVNode("", true),
        unref(isClearable) ? withDirectives((openBlock(), createElementBlock("div", {
          key: 2,
          onClick: _cache[10] || (_cache[10] = //@ts-ignore
          (...args) => unref(clear) && unref(clear)(...args)),
          class: normalizeClass(unref(bem).e("suffix"))
        }, _hoisted_4, 2)), [
          [vShow, unref(isEnter)]
        ]) : createCommentVNode("", true),
        withDirectives(createElementVNode("div", {
          class: normalizeClass(unref(bem).e("suffix"))
        }, [
          createVNode(unref(_sfc_main$1), {
            name: unref(eyeIcon),
            onClick: unref(changeType)
          }, null, 8, ["name", "onClick"])
        ], 2), [
          [vShow, unref(isPwdVisible)]
        ]),
        unref(isShowPrefixIcon) ? (openBlock(), createElementBlock("div", {
          key: 3,
          class: normalizeClass(unref(bem).e("prefix"))
        }, [
          createVNode(unref(_sfc_main$1), {
            name: props.prefixIcon
          }, null, 8, ["name"])
        ], 2)) : createCommentVNode("", true),
        unref(isShowSuffixIcon) ? (openBlock(), createElementBlock("div", {
          key: 4,
          class: normalizeClass(unref(bem).e("suffix"))
        }, [
          createVNode(unref(_sfc_main$1), {
            name: props.suffixIcon
          }, null, 8, ["name"])
        ], 2)) : createCommentVNode("", true)
      ], 34));
    };
  }
});
export {
  _sfc_main as default
};
