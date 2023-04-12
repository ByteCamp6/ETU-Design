import { computed, ref } from "vue";
import type { InputProps } from "../input";
import type { Ref } from "vue";

export const useInputIcon = (
  props: InputProps,
  passwordVisible: Ref<boolean>,
) => {
  // 密码是否可见
  const eyeIcon = computed(() => {
    return passwordVisible.value ? "browse" : "hide";
  });

  //带Icon输入框
  const isShowSuffixIcon = computed(() => {
    return props.suffixIcon && !props.clearable && !props.showPassword;
  });
  const isShowPrefixIcon = computed(() => {
    return props.prefixIcon;
  });

  return {
    eyeIcon,
    isShowPrefixIcon,
    isShowSuffixIcon,
  };
};
