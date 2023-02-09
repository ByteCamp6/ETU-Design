"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const index = require("../use-prop/index.js");
const vue = require("vue");
const useDisabled = (fallback) => {
  const disabled = index.useProp("disabled");
  return vue.computed(() => disabled.value || vue.unref(fallback) || false);
};
exports.useDisabled = useDisabled;
