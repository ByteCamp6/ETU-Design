import { ref, getCurrentInstance, computed, watch, nextTick } from "vue";
import "../../index.js";
import "../../../utils/types.js";
import "../../../hooks/use-z-index/index.js";
import { useCursor } from "../../../hooks/use-cursor/index.js";
import _sfc_main from "../input.vue.js";
const useInputText = (props, aimRef) => {
  const isComposing = ref(false);
  const { emit } = getCurrentInstance();
  const nativeInputValue = computed(
    () => props.modelValue === void 0 ? "" : String(props.modelValue)
  );
  const setNativeInputValue = () => {
    const input2 = aimRef.value;
    if (!input2 || input2.value === nativeInputValue.value)
      return;
    input2.value = nativeInputValue.value;
  };
  const [recordCursor, setCursor] = useCursor(_sfc_main);
  const handleInput = async (event) => {
    recordCursor();
    let { value } = event.target;
    if (props.formatter) {
      value = props.parser ? props.parser(value) : value;
      value = props.formatter(value);
    }
    if (isComposing.value)
      return;
    if (value === nativeInputValue.value) {
      setNativeInputValue();
      return;
    }
    emit("update:modelValue", value);
    emit("input", value);
    await nextTick();
    setNativeInputValue();
    setCursor();
  };
  const handleChange = (event) => {
    emit(
      "change",
      event.target.value
    );
  };
  const handleCompositionStart = () => {
    isComposing.value = true;
  };
  const handleCompositionEnd = (event) => {
    if (isComposing.value) {
      isComposing.value = false;
      handleInput(event);
    }
  };
  watch(nativeInputValue, () => setNativeInputValue());
  return {
    isComposing,
    nativeInputValue,
    setNativeInputValue,
    handleInput,
    handleChange,
    handleCompositionStart,
    handleCompositionEnd
  };
};
export {
  useInputText
};
