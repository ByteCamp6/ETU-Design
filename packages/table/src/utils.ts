import type { ClassName } from "./table";
import { isArray, isFunction } from "@etu-design/utils";

export function combineClass<T extends Record<string, any>>(
  nativeClass: any[],
  customClass: ClassName | ((data: T) => any) | undefined,
  customClassArgs: T,
) {
  const headerCellClassNative = nativeClass;
  if (customClass) {
    const headerCellClassCustom = isFunction(customClass)
      ? customClass(customClassArgs)
      : customClass;
    return isArray(headerCellClassCustom)
      ? headerCellClassNative.concat(headerCellClassCustom)
      : [...headerCellClassNative, headerCellClassCustom];
  }
  return headerCellClassNative;
}
