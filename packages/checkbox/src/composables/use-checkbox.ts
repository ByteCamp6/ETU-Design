import { useCheckboxModel } from "./use-checkbox-model";
import type { CheckboxProps } from "../checkbox";
import type { ComponentInternalInstance } from "vue";
import { useCheckboxStatus } from "./use-checkbox-status";
import { useCheckboxDisabled } from "./use-checkbox-disabled";
import { useCheckboxEvent } from "./use-checkbox-event";
import { isArray } from "@etu-design/utils";

export const useCheckbox = (
  props: CheckboxProps,
  slots: ComponentInternalInstance["slots"],
) => {
  const { model, isGroup, isLimitExceeded } = useCheckboxModel(props);
  const { isFocused, isChecked, hasOwnLabel } = useCheckboxStatus(
    props,
    slots,
    { model },
  );
  const { isDisabled } = useCheckboxDisabled({ model, isChecked });
  const { handleChange } = useCheckboxEvent(props, {
    model,
    isLimitExceeded,
    hasOwnLabel,
    isDisabled,
  });

  //初始化
  function addToStore() {
    if (isArray(model.value) && !model.value.includes(props.label)) {
      model.value.push(props.label);
    } else {
      model.value = true;
    }
  }
  props.checked && addToStore();

  return {
    isChecked,
    isDisabled,
    isFocused,
    hasOwnLabel,
    model,
    handleChange,
  };
};
