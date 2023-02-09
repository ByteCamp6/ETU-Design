"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const useProp = (name) => {
  const vm = vue.getCurrentInstance();
  return vue.computed(() => {
    var _a;
    return ((_a = vm.proxy) == null ? void 0 : _a.$props)[name] ?? void 0;
  });
};
exports.useProp = useProp;
