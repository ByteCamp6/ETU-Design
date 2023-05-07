"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const useInputState = (props, nativeInputValue, inputDisabled) => {
  const { emit } = vue.getCurrentInstance();
  const isEnter = vue.ref(false);
  const isClearable = vue.computed(
    () =>
      props.clearable &&
      !inputDisabled.value &&
      !props.readonly &&
      !!nativeInputValue.value &&
      isEnter.value,
  );
  const handleMouseLeave = (evt) => {
    isEnter.value = false;
    emit("mouseleave", evt);
  };
  const handleMouseEnter = (evt) => {
    isEnter.value = true;
    emit("mouseenter", evt);
  };
  const clearValue = () => {
    emit("update:modelValue", "");
    emit("change", "");
    emit("clear");
    emit("input", "");
  };
  const passwordVisible = vue.ref(false);
  const isPwdVisible = vue.computed(
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
exports.useInputState = useInputState;
