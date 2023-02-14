import { defineComponent, provide, toRefs, openBlock, createElementBlock, normalizeClass, unref, renderSlot, nextTick } from "vue";
import { radioGroupKey } from "../../tokens/radio.js";
import { radioGroupProps, radioGroupEmits } from "./radio-group.js";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
const __default__ = defineComponent({
  name: "EtuRadioGroup"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: radioGroupProps,
  emits: radioGroupEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("radio");
    const changeEvent = (value) => {
      emit("update:modelValue", value);
      nextTick(() => emit("change", value));
    };
    provide(radioGroupKey, {
      ...toRefs(props),
      changeEvent
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns).b("group")),
        role: "radiogroup"
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
