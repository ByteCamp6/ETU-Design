import { inject, ref, computed, toRaw } from "vue";
import { checkboxGroupContextKey } from "../../../tokens/checkbox.js";
import { isArray } from "../../../../node_modules/@vue/shared/dist/shared.esm-bundler.js";
const useCheckboxStatus = (props, slots, { model }) => {
  inject(checkboxGroupContextKey, void 0);
  const isFocused = ref(false);
  const isChecked = computed(() => {
    const value = model.value;
    if (isArray(value)) {
      return value.map(toRaw).includes(props.label);
    } else {
      return !!value;
    }
  });
  const hasOwnLabel = computed(() => {
    return !!(slots.default || props.label);
  });
  return {
    isChecked,
    isFocused,
    hasOwnLabel,
  };
};
export { useCheckboxStatus };
