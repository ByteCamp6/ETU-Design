import { computed, getCurrentInstance, inject, ref } from "vue";
import { radioGroupKey } from "@etu-design/tokens";
import { useDisabled } from "@etu-design/hooks";
import type { RadioProps } from "./radio";
import { isUndefined } from "@etu-design/utils";

export const useRadio = (props: RadioProps) => {
  const { emit } = getCurrentInstance()!;
  const radioRef = ref<HTMLInputElement>();
  // 获取注入的radioGroup的Props
  const radioGroup = inject(radioGroupKey, undefined);
  const isGroup = computed(() => isUndefined(radioGroup) === false);
  /**
   * @description 这里为什么用radioRef而不是selfModel呢，因为radio其他选项的改变会影响
   * 它的改变，我们要用label去匹配modelValue，如果用布尔值去匹配的话就可能会导致一个出现
   * 两个同时为勾的情况，这也和vue的v-model相符合
   */
  const modelValue = computed<RadioProps["modelValue"]>({
    get() {
      return isGroup.value ? radioGroup!.modelValue?.value : props.modelValue!;
    },
    set(val) {
      if (isGroup.value) {
        radioGroup!.changeEvent(val);
      } else {
        emit && emit("update:modelValue", val);
      }
      radioRef.value!.checked = props.modelValue === props.label;
    },
  });

  const disabled = useDisabled(computed(() => radioGroup?.disabled?.value));
  const focus = ref(false);

  return {
    radioRef,
    isGroup,
    radioGroup,
    focus,
    disabled,
    modelValue,
  };
};
