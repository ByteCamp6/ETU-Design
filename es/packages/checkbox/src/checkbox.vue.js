import { defineComponent, useSlots, computed, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, withDirectives, isRef, vModelCheckbox, renderSlot, Fragment, createTextVNode, toDisplayString, createCommentVNode } from "vue";
import { checkboxProps, checkboxEmits } from "./checkbox.js";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
import { useCheckbox } from "./composables/use-checkbox.js";
const _hoisted_1 = ["disabled", "value"];
const __default__ = defineComponent({
  name: "EtuCheckbox"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: checkboxProps,
  emits: checkboxEmits,
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const { isChecked, isDisabled, isFocused, hasOwnLabel, model, handleChange } = useCheckbox(props, slots);
    const ns = useNamespace("checkbox");
    const labelClass = computed(() => {
      return [
        ns.b(),
        ns.is("disabled", isDisabled.value),
        ns.is("checked", isChecked.value)
      ];
    });
    const spanClass = computed(() => {
      return [
        ns.e("input"),
        ns.is("disabled", isDisabled.value),
        ns.is("checked", isChecked.value),
        ns.is("indeterminate", props.indeterminate),
        ns.is("focus", isFocused.value)
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        class: normalizeClass(unref(labelClass))
      }, [
        createElementVNode("span", {
          class: normalizeClass(unref(spanClass))
        }, [
          withDirectives(createElementVNode("input", {
            type: "checkbox",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(model) ? model.value = $event : null),
            class: normalizeClass(unref(ns).e("original")),
            disabled: unref(isDisabled),
            value: props.label,
            onChange: _cache[1] || (_cache[1] = //@ts-ignore
            (...args) => unref(handleChange) && unref(handleChange)(...args)),
            onFocus: _cache[2] || (_cache[2] = ($event) => isFocused.value = true),
            onBlur: _cache[3] || (_cache[3] = ($event) => isFocused.value = false)
          }, null, 42, _hoisted_1), [
            [vModelCheckbox, unref(model)]
          ]),
          createElementVNode("span", {
            class: normalizeClass(unref(ns).e("inner"))
          }, null, 2)
        ], 2),
        unref(hasOwnLabel) ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(unref(ns).e("label"))
        }, [
          renderSlot(_ctx.$slots, "default"),
          !_ctx.$slots.default ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(props.label), 1)
          ], 64)) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
