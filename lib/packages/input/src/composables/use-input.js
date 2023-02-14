"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const useInputText = require("./use-input-text.js");
const useInputState = require("./use-input-state.js");
const useInputIcon = require("./use-input-icon.js");
const index = require("../../../hooks/use-common-props/index.js");
require("../../../hooks/use-z-index/index.js");
const useInput = (props) => {
  const inputRef = vue.ref();
  const textareaRef = vue.ref();
  const aimRef = vue.computed(() => inputRef.value || textareaRef.value);
  const inputDisabled = index.useDisabled();
  const {
    isComposing,
    nativeInputValue,
    setNativeInputValue,
    handleInput,
    handleChange,
    handleCompositionStart,
    handleCompositionEnd
  } = useInputText.useInputText(props, aimRef);
  const {
    isEnter,
    isClearable,
    handleMouseEnter,
    handleMouseLeave,
    clearValue,
    passwordVisible,
    isPwdVisible,
    changeType
  } = useInputState.useInputState(props, nativeInputValue, inputDisabled);
  const { eyeIcon, isShowPrefixIcon, isShowSuffixIcon } = useInputIcon.useInputIcon(
    props,
    passwordVisible
  );
  return {
    inputRef,
    textareaRef,
    aimRef,
    inputDisabled,
    isComposing,
    nativeInputValue,
    setNativeInputValue,
    handleInput,
    handleChange,
    handleCompositionStart,
    handleCompositionEnd,
    isEnter,
    isClearable,
    handleMouseEnter,
    handleMouseLeave,
    clearValue,
    passwordVisible,
    isPwdVisible,
    eyeIcon,
    changeType,
    isShowPrefixIcon,
    isShowSuffixIcon
  };
};
exports.useInput = useInput;
