import { computed, inject } from "vue";
import { isUndefined, isArray } from "@etu-design/utils";
import { checkboxGroupContextKey } from "@etu-design/tokens";
import type { CheckboxStatus } from "./use-checkbox-status";
import type { CheckboxModel } from "./use-checkbox-model";
import { useDisabled } from "@etu-design/hooks";

export const useCheckboxDisabled = ({
  model,
  isChecked,
}: Pick<CheckboxModel, "model"> & Pick<CheckboxStatus, "isChecked">) => {
  const checkboxGroup = inject(checkboxGroupContextKey, undefined);

  /**
   * @description isLimitDisabled表示组件当前的状态，先判断当前的model.value在为数组的情况下元素个数是否超出限制，
   * 如果已经满了，那么其他未选的不能选用，如果比最小值小，那么已经选择的无法再取消
   */
  const isLimitDisabled = computed(() => {
    const max = checkboxGroup?.max?.value;
    const min = checkboxGroup?.min?.value;
    return (
      (!isUndefined(max) &&
        isArray(model.value) &&
        model.value.length >= max &&
        !isChecked.value) ||
      (!isUndefined(min) &&
        isArray(model.value) &&
        model.value.length <= min &&
        isChecked.value)
    );
  });

  /**
   * @description isDisabled在isLimitDisabled的基础上，判断其组是否有disabled属性
   */
  const isDisabled = useDisabled(
    computed(() => checkboxGroup?.disabled.value || isLimitDisabled.value),
  );

  return {
    isDisabled,
    isLimitDisabled,
  };
};

export type CheckboxDisabled = ReturnType<typeof useCheckboxDisabled>;
