import { computed, getCurrentInstance, inject, ref } from "vue";
import { checkboxGroupContextKey } from "@etu-design/tokens";
import { isUndefined, isArray } from "@etu-design/utils";

import type { CheckboxProps } from "../checkbox";

export const useCheckboxModel = (props: CheckboxProps) => {
  // selfModel是一个私有的ref,当没有绑定model时，会使用selfModel以保证正确运行
  const selfModel = ref<unknown>(null);
  // 从当前实例中获取emit方法
  const { emit } = getCurrentInstance()!;
  // 获取注入的CheckBoxGroup的Props
  const checkboxGroup = inject(checkboxGroupContextKey, undefined);
  const isGroup = computed(() => isUndefined(checkboxGroup) === false);
  const isLimitExceeded = ref(false);
  // model为多选组时是group绑定的值，否则为checkbox绑定的值
  const model = computed({
    get() {
      return isGroup.value
        ? checkboxGroup?.modelValue?.value
        : props.modelValue ?? selfModel.value;
    },

    set(val: unknown) {
      if (isGroup.value && isArray(val)) {
        isLimitExceeded.value =
          checkboxGroup?.max?.value !== undefined &&
          val.length > checkboxGroup?.max.value;
        isLimitExceeded.value === false && checkboxGroup?.changeEvent?.(val);
      } else {
        emit("update:modelValue", val);
        selfModel.value = val;
      }
    },
  });

  return {
    model,
    isGroup,
    isLimitExceeded,
  };
};

export type CheckboxModel = ReturnType<typeof useCheckboxModel>;
