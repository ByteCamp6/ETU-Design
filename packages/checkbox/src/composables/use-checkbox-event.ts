import type { CheckboxStatus } from "./use-checkbox-status";
import type { CheckboxProps } from "../checkbox";
import type { CheckboxModel } from "./use-checkbox-model";
import type { CheckboxDisabled } from "./use-checkbox-disabled";
import { getCurrentInstance } from "vue";

export const useCheckboxEvent = (
  props: CheckboxProps,
  {
    model,
    isLimitExceeded,
    hasOwnLabel,
    isDisabled,
  }: Pick<CheckboxModel, "model" | "isLimitExceeded"> &
    Pick<CheckboxStatus, "hasOwnLabel"> &
    Pick<CheckboxDisabled, "isDisabled">,
) => {
  const { emit } = getCurrentInstance()!;

  // handleChange是一个函数，传递事件，如果组件是在正常状态下（没有选择过多的选项），则发送事件
  function handleChange(e: Event) {
    if (isLimitExceeded.value) return;

    const target = e.target as HTMLInputElement;
    emit("change", target.checked, e);
  }

  return {
    handleChange,
  };
};
