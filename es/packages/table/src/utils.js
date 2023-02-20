import "vue";
import { isFunction, isArray } from "../../../node_modules/@vue/shared/dist/shared.esm-bundler.js";
function combineClass(nativeClass, customClass, customClassArgs) {
  const headerCellClassNative = nativeClass;
  if (customClass) {
    const headerCellClassCustom = isFunction(customClass) ? customClass(customClassArgs) : customClass;
    return isArray(headerCellClassCustom) ? headerCellClassNative.concat(headerCellClassCustom) : [...headerCellClassNative, headerCellClassCustom];
  }
  return headerCellClassNative;
}
function fixedStyle(column) {
  return (column == null ? void 0 : column.fixed) === "left" ? { left: `${column.styleOffsetWidth}px` } : (column == null ? void 0 : column.fixed) === "right" ? { right: `${column.styleOffsetWidth}px` } : void 0;
}
export {
  combineClass,
  fixedStyle
};
