import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, withDirectives, isRef, vModelRadio, renderSlot, Fragment, createTextVNode, toDisplayString, createCommentVNode, nextTick } from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../utils/types.js";
import "../../hooks/use-z-index/index.js";
import { useRadio } from "./use-radio.js";
import { radioProps, radioEmits } from "./radio.js";
const _hoisted_1 = ["value", "disabled"];
const __default__ = defineComponent({
  name: "EtuRadio"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: radioProps,
  emits: radioEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("radio");
    const { radioRef, focus, size, disabled, modelValue } = useRadio(props);
    const labelClass = computed(() => {
      return [
        ns.b(),
        ns.is("disabled", disabled.value),
        ns.is("focus", focus.value),
        ns.is("checked", modelValue.value === props.label),
        ns.m(size)
      ];
    });
    const spanClass = computed(() => {
      return [
        ns.e("input"),
        ns.is("disabled", disabled.value),
        ns.is("checked", modelValue.value === props.label)
      ];
    });
    function handleChange() {
      nextTick(() => emit("change", modelValue.value));
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        class: normalizeClass(unref(labelClass))
      }, [
        createElementVNode("span", {
          class: normalizeClass(unref(spanClass))
        }, [
          withDirectives(createElementVNode("input", {
            ref_key: "radioRef",
            ref: radioRef,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(modelValue) ? modelValue.value = $event : null),
            class: normalizeClass(unref(ns).e("original")),
            value: props.label,
            disabled: unref(disabled),
            type: "radio",
            onFocus: _cache[1] || (_cache[1] = ($event) => focus.value = true),
            onBlur: _cache[2] || (_cache[2] = ($event) => focus.value = false),
            onChange: handleChange
          }, null, 42, _hoisted_1), [
            [vModelRadio, unref(modelValue)]
          ]),
          createElementVNode("span", {
            class: normalizeClass(unref(ns).e("inner"))
          }, null, 2)
        ], 2),
        createElementVNode("span", {
          class: normalizeClass(unref(ns).e("label"))
        }, [
          renderSlot(_ctx.$slots, "default"),
          !_ctx.$slots.default ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(props.label), 1)
          ], 64)) : createCommentVNode("", true)
        ], 2)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
