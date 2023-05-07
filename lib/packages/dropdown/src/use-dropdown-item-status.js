"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const useDropDownItemStatus = (props) => {
  const isDisabled = vue.ref(props.disabled || false);
  return {
    isDisabled,
  };
};
exports.useDropDownItemStatus = useDropDownItemStatus;
