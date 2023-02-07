import { computed, getCurrentInstance, ref } from "vue";
import type { InputProps } from "../input";
import type { ComputedRef } from "vue";

export const useInputState = (
  props: InputProps,
  nativeInputValue: ComputedRef<string>,
  inputDisabled: ComputedRef<boolean>,
) => {
  const { emit } = getCurrentInstance()!;
  const isEnter = ref(false);
  // 是否显示可清除图标
  const isClearable = computed(
    () =>
      props.clearable &&
      !inputDisabled.value &&
      !props.readonly &&
      !!nativeInputValue.value &&
      isEnter.value,
  );

  // 侦测鼠标是否移开
  const handleMouseLeave = (evt: MouseEvent) => {
    isEnter.value = false;
    emit("mouseleave", evt);
  };

  // 侦测鼠标是否移动到input中
  const handleMouseEnter = (evt: MouseEvent) => {
    isEnter.value = true;
    emit("mouseenter", evt);
  };

  // 清除input中的所有值
  const clearValue = () => {
    emit("update:modelValue", "");
    emit("change", "");
    emit("clear");
    emit("input", "");
  };

  // 密码是否可见
  const passwordVisible = ref(false);

  // 是否显示密码可见按钮
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
