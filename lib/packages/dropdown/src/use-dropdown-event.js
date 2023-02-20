"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const useDropdownEvent = (props) => {
  const { emit } = vue.getCurrentInstance();
  const handleMousedown = (command, e) => {
    const arg = command ? [command, e] : [{}, e];
    emit("command", ...arg);
  };
  const onButtonClick = (e) => {
    emit("click", e);
  };
  return {
    handleMousedown,
    onButtonClick
  };
};
exports.useDropdownEvent = useDropdownEvent;
