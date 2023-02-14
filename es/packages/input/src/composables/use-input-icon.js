import { computed } from "vue";
const useInputIcon = (props, passwordVisible) => {
  const eyeIcon = computed(() => {
    return passwordVisible.value ? "browse" : "hide";
  });
  const isShowSuffixIcon = computed(() => {
    return props.suffixIcon && !props.clearable && !props.showPassword;
  });
  const isShowPrefixIcon = computed(() => {
    return props.prefixIcon;
  });
  return {
    eyeIcon,
    isShowPrefixIcon,
    isShowSuffixIcon
  };
};
export {
  useInputIcon
};
