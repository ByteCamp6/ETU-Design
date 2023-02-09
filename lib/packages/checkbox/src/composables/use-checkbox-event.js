"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const useCheckboxEvent = (props, {
  model,
  isLimitExceeded,
  hasOwnLabel,
  isDisabled
}) => {
  const { emit } = vue.getCurrentInstance();
  function handleChange(e) {
    if (isLimitExceeded.value)
      return;
    const target = e.target;
    emit("change", target.checked, e);
  }
  return {
    handleChange
  };
};
exports.useCheckboxEvent = useCheckboxEvent;
