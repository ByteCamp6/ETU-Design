"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const radio = require("../../tokens/radio.js");
const index = require("../../hooks/use-common-props/index.js");
const types = require("../../utils/types.js");
require("../../hooks/use-z-index/index.js");
const useRadio = (props) => {
  const { emit } = vue.getCurrentInstance();
  const radioRef = vue.ref();
  const radioGroup = vue.inject(radio.radioGroupKey, void 0);
  const isGroup = vue.computed(() => types.isUndefined(radioGroup) === false);
  const modelValue = vue.computed({
    get() {
      var _a;
      return isGroup.value
        ? (_a = radioGroup.modelValue) == null
          ? void 0
          : _a.value
        : props.modelValue;
    },
    set(val) {
      if (isGroup.value) {
        radioGroup.changeEvent(val);
      } else {
        emit && emit("update:modelValue", val);
      }
      radioRef.value.checked = props.modelValue === props.label;
    },
  });
  const disabled = index.useDisabled(
    vue.computed(() => {
      var _a;
      return (_a = radioGroup == null ? void 0 : radioGroup.disabled) == null
        ? void 0
        : _a.value;
    }),
  );
  const focus = vue.ref(false);
  return {
    radioRef,
    isGroup,
    radioGroup,
    focus,
    disabled,
    modelValue,
  };
};
exports.useRadio = useRadio;
