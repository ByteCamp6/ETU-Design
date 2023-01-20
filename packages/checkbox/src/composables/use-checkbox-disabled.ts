import { computed, inject } from "vue";
import { isUndefined, isArray } from "@etu-design/utils";
import { checkboxGroupContextKey } from "../../../tokens/checkbox";
import type { CheckboxStatus } from "./use-checkbox-status";
import type { CheckboxModel } from "./use-checkbox-model";
import { useDisabled } from "@etu-design/hooks/use-common-props";

export const useCheckboxDisabled = ({
  model,
  isChecked,
}: Pick<CheckboxModel, "model"> & Pick<CheckboxStatus, "isChecked">) => {
  const checkboxGroup = inject(checkboxGroupContextKey, undefined);

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

  const isDisabled = useDisabled(
    computed(() => checkboxGroup?.disabled.value || isLimitDisabled.value),
  );

  return {
    isDisabled,
    isLimitDisabled,
  };
};

export type CheckboxDisabled = ReturnType<typeof useCheckboxDisabled>;
