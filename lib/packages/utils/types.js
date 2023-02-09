"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const isNil = require("../../node_modules/lodash-es/isNil.js");
console.log(isNil);
const isUndefined = (val) => val === void 0;
Object.defineProperty(exports, "isVNode", {
  enumerable: true,
  get: () => vue.isVNode
});
exports.isUndefined = isUndefined;
