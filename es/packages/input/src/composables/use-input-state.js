import { getCurrentInstance, ref, computed } from "vue";
const useInputState = (props, nativeInputValue, inputDisabled) => {
  const { emit } = getCurrentInstance();
  const isEnter = ref(false);
  const isClearable = computed(
    () => props.clearable && !inputDisabled.value && !props.readonly && !!nativeInputValue.value && isEnter.value
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
  const passwordVisible = ref(false);
  const isPwdVisible = computed(
    () => props.showPassword && !inputDisabled.value && !props.readonly && !!nativeInputValue.value
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
    changeType
  };
};
export {
  useInputState
};
