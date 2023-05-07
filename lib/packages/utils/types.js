"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const shared_esmBundler = require("../../node_modules/@vue/shared/dist/shared.esm-bundler.js");
const vue = require("vue");
const isNil = require("../../node_modules/lodash-es/isNil.js");
const isUndefined = (val) => val === void 0;
const isEmpty = (val) =>
  (!val && val !== 0) ||
  (shared_esmBundler.isArray(val) && val.length === 0) ||
  (shared_esmBundler.isObject(val) && !Object.keys(val).length);
const isPropAbsent = (prop) => {
  return isNil(prop);
};
exports.isArray = shared_esmBundler.isArray;
exports.isDate = shared_esmBundler.isDate;
exports.isFunction = shared_esmBundler.isFunction;
exports.isObject = shared_esmBundler.isObject;
exports.isString = shared_esmBundler.isString;
Object.defineProperty(exports, "isVNode", {
  enumerable: true,
  get: () => vue.isVNode,
});
exports.isEmpty = isEmpty;
exports.isPropAbsent = isPropAbsent;
exports.isUndefined = isUndefined;
