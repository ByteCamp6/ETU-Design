import { computed, getCurrentInstance, ref } from "vue";
import type { InputProps } from "../input";
import type { ComputedRef } from "vue";

export const useInputState = (
  props: InputProps,
  nativeInputValue: ComputedRef<string>,
  inputDisabled: ComputedRef<boolean>,
) => {
  const isEnter = ref(false);
  const isClearable = computed(
    () =>
      props.clearable &&
      !inputDisabled.value &&
      !props.readonly &&
      !!nativeInputValue.value &&
      isEnter.value,
  );
  const { emit } = getCurrentInstance()!;

  const handleMouseLeave = (evt: MouseEvent) => {
    isEnter.value = false;
    emit("mouseleave", evt);
  };

  const handleMouseEnter = (evt: MouseEvent) => {
    isEnter.value = true;
    emit("mouseenter", evt);
  };

  const clearValue = () => {
    emit("update:modelValue", "");
    emit("change", "");
    emit("clear");
    emit("input", "");
  };

  const passwordVisible = ref(false);

  const isPwdVisible = computed(
    () =>
      props.showPassword &&
      !inputDisabled.value &&
      !props.readonly &&
      !!nativeInputValue.value,
  );

  function changeType() {
    passwordVisible.value = !passwordVisible.value;
  }
  return {
    isEnter,
    isClearable,
    handleMouseEnter,
    handleMouseLeave,
    clearValue,
    passwordVisible,
    isPwdVisible,
    changeType,
  };
};
