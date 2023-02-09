"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
require("../../index.js");
require("../../../utils/types.js");
require("../../../hooks/use-z-index/index.js");
const index = require("../../../hooks/use-cursor/index.js");
const input_vue_vue_type_script_setup_true_name_EtuInput_lang = require("../input.vue.js");
const useInputText = (props, aimRef) => {
  const isComposing = vue.ref(false);
  const { emit } = vue.getCurrentInstance();
  const nativeInputValue = vue.computed(
    () => props.modelValue === void 0 ? "" : String(props.modelValue)
  );
  const setNativeInputValue = () => {
    const input2 = aimRef.value;
    if (!input2 || input2.value === nativeInputValue.value)
      return;
    input2.value = nativeInputValue.value;
  };
  const [recordCursor, setCursor] = index.useCursor(input_vue_vue_type_script_setup_true_name_EtuInput_lang);
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
    await vue.nextTick();
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
  vue.watch(nativeInputValue, () => setNativeInputValue());
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
exports.useInputText = useInputText;
