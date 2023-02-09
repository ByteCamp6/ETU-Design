"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const zIndex = vue.ref(0);
const useZIndex = () => {
  const initialZIndex = 2e3;
  const currentZIndex = vue.computed(() => initialZIndex + zIndex.value);
  const nextZIndex = () => {
    zIndex.value++;
    return currentZIndex.value;
  };
  return {
    currentZIndex,
    nextZIndex
  };
};
exports.useZIndex = useZIndex;
