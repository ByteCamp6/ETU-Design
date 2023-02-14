"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const isUndefined = (val) => val === void 0;
Object.defineProperty(exports, "isVNode", {
  enumerable: true,
  get: () => vue.isVNode
});
exports.isUndefined = isUndefined;
