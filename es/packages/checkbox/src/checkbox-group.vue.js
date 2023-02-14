import { defineComponent, computed, provide, toRefs, openBlock, createElementBlock, normalizeClass, unref, renderSlot, nextTick } from "vue";
import { checkboxGroupProps, checkboxGroupEmits } from "./checkbox-group.js";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
import { checkboxGroupContextKey } from "../../tokens/checkbox.js";
const __default__ = defineComponent({
  name: "EtuCheckboxGroup"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: checkboxGroupProps,
  emits: checkboxGroupEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("checkbox");
    const changeEvent = async (value) => {
      emit("update:modelValue", value);
      await nextTick();
      emit("change", value);
    };
    const modelValue = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        changeEvent(val);
      }
    });
    provide(checkboxGroupContextKey, {
      ...toRefs(props),
      modelValue,
      changeEvent
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns).b("group"))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
