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
export {
  combineClass
};
