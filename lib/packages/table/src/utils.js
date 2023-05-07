"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const shared_esmBundler = require("../../../node_modules/@vue/shared/dist/shared.esm-bundler.js");
function combineClass(nativeClass, customClass, customClassArgs) {
  const headerCellClassNative = nativeClass;
  if (customClass) {
    const headerCellClassCustom = shared_esmBundler.isFunction(customClass)
      ? customClass(customClassArgs)
      : customClass;
    return shared_esmBundler.isArray(headerCellClassCustom)
      ? headerCellClassNative.concat(headerCellClassCustom)
      : [...headerCellClassNative, headerCellClassCustom];
  }
  return headerCellClassNative;
}
function fixedStyle(column) {
  return (column == null ? void 0 : column.fixed) === "left"
    ? { left: `${column.styleOffsetWidth}px` }
    : (column == null ? void 0 : column.fixed) === "right"
    ? { right: `${column.styleOffsetWidth}px` }
    : void 0;
}
exports.combineClass = combineClass;
exports.fixedStyle = fixedStyle;
