import { computed, inject, ref, toRaw } from "vue";
import type { ComponentInternalInstance } from "vue";
import type { CheckboxProps } from "../checkbox";
import type { CheckboxModel } from "./use-checkbox-model";
import { checkboxGroupContextKey } from "../../../tokens/checkbox";
import { isArray } from "@etu-design/utils";

export const useCheckboxStatus = (
  props: CheckboxProps,
  slots: ComponentInternalInstance["slots"],
  { model }: Pick<CheckboxModel, "model">,
) => {
  // 获取注入的CheckBoxGroup的Props
  const checkboxGroup = inject(checkboxGroupContextKey, undefined);
  // isFocused通过hook暴露给外部，触发失焦和聚焦等操作，从而修改样式，在useCheckbox中不会对其有任何修改
  const isFocused = ref(false);
  // isChecked表示checkbox当前的样式，通过model来获取，当为组时判断是否在组里，不为组时判断其本身是否为真
  const isChecked = computed<boolean>(() => {
    const value = model.value;
    if (isArray(value)) {
      return value.map(toRaw).includes(props.label);
    } else {
      return !!value;
    }
  });
  // 判断是否有label，包括插槽或这props中的label
  const hasOwnLabel = computed<boolean>(() => {
    return !!(slots.default || props.label);
  });
  return {
    isChecked,
    isFocused,
    hasOwnLabel,
  };
};

export type CheckboxStatus = ReturnType<typeof useCheckboxStatus>;
