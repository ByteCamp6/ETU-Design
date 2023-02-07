import type { InputEmits, InputProps } from "../input";
import { computed, ref } from "vue";
import { useInputText } from "./use-input-text";
import { useInputState } from "./use-input-state";
import { useInputIcon } from "./use-input-icon";
import { useDisabled } from "@etu-design/hooks";

export const useInput = (props: InputProps) => {
  const inputRef = ref<HTMLInputElement>();
  const textareaRef = ref<HTMLTextAreaElement>();
  // inputRef或者textareaRef
  const aimRef = computed(() => inputRef.value || textareaRef.value);
  // input是否被禁用
  const inputDisabled = useDisabled();

  const {
    isComposing,
    nativeInputValue,
    setNativeInputValue,
    handleInput,
    handleChange,
    handleCompositionStart,
    handleCompositionEnd,
  } = useInputText(props, aimRef);

  const {
    isEnter,
    isClearable,
    handleMouseEnter,
    handleMouseLeave,
    clearValue,
    passwordVisible,
    isPwdVisible,
    changeType,
  } = useInputState(props, nativeInputValue, inputDisabled);

  const { eyeIcon, isShowPrefixIcon, isShowSuffixIcon } = useInputIcon(
    props,
    passwordVisible,
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
    isShowSuffixIcon,
  };
};
