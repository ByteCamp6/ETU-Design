import { ref, computed } from "vue";
import { useInputText } from "./use-input-text.js";
import { useInputState } from "./use-input-state.js";
import { useInputIcon } from "./use-input-icon.js";
import { useDisabled } from "../../../hooks/use-common-props/index.js";
import "../../../utils/types.js";
import "../../../hooks/use-z-index/index.js";
const useInput = (props) => {
  const inputRef = ref();
  const textareaRef = ref();
  const aimRef = computed(() => inputRef.value || textareaRef.value);
  const inputDisabled = useDisabled();
  const {
    isComposing,
    nativeInputValue,
    setNativeInputValue,
    handleInput,
    handleChange,
    handleCompositionStart,
    handleCompositionEnd
  } = useInputText(props, aimRef);
  const {
    isEnter,
    isClearable,
    handleMouseEnter,
    handleMouseLeave,
    clearValue,
    passwordVisible,
    isPwdVisible,
    changeType
  } = useInputState(props, nativeInputValue, inputDisabled);
  const { eyeIcon, isShowPrefixIcon, isShowSuffixIcon } = useInputIcon(
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
export {
  useInput
};
