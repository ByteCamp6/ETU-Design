"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const useInputIcon = (props, passwordVisible) => {
  const eyeIcon = vue.computed(() => {
    return passwordVisible.value ? "browse" : "hide";
  });
  const isShowSuffixIcon = vue.computed(() => {
    return props.suffixIcon && !props.clearable && !props.showPassword;
  });
  const isShowPrefixIcon = vue.computed(() => {
    return props.prefixIcon;
  });
  return {
    eyeIcon,
    isShowPrefixIcon,
    isShowSuffixIcon
  };
};
exports.useInputIcon = useInputIcon;
