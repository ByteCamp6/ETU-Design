"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const checkbox = require("../../../tokens/checkbox.js");
require("../../../utils/types.js");
const shared_esmBundler = require("../../../../node_modules/@vue/shared/dist/shared.esm-bundler.js");
const useCheckboxStatus = (props, slots, { model }) => {
  vue.inject(checkbox.checkboxGroupContextKey, void 0);
  const isFocused = vue.ref(false);
  const isChecked = vue.computed(() => {
    const value = model.value;
    if (shared_esmBundler.isArray(value)) {
      return value.map(vue.toRaw).includes(props.label);
    } else {
      return !!value;
    }
  });
  const hasOwnLabel = vue.computed(() => {
    return !!(slots.default || props.label);
  });
  return {
    isChecked,
    isFocused,
    hasOwnLabel
  };
};
exports.useCheckboxStatus = useCheckboxStatus;
