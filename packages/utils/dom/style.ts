import { isNumber, isObject, isString } from "../types";
import type { CSSProperties } from "vue";
import { camelize } from "vue";

export const keysOf = <T>(arr: T) => Object.keys(arr) as Array<keyof T>;

export const classNameToArray = (cls = "") =>
  cls.split(" ").filter((item) => !!item.trim());

export const hasClass = (el: Element, cls: string): boolean => {
  if (!el || !cls) return false;
  if (cls.includes(" ")) throw new Error("className should not contain space.");
  return el.classList.contains(cls);
};

export const addClass = (el: Element, cls: string) => {
  if (!el || !cls.trim()) return;
  el.classList.add(...classNameToArray(cls));
};

export const removeClass = (el: Element, cls: string) => {
  if (!el || !cls.trim()) return;
  el.classList.remove(...classNameToArray(cls));
};

export const getStyle = (
  element: HTMLElement,
  styleName: keyof CSSProperties,
): string => {
  if (!element || !styleName) return "";

  let key = camelize(styleName);
  if (key === "float") key = "cssFloat";
  try {
    const style = (element.style as any)[key];
    if (style) return style;
    const computed: any = document.defaultView?.getComputedStyle(element, "");
    return computed ? computed[key] : "";
  } catch {
    return (element.style as any)[key];
  }
};

export const setStyle = (
  element: HTMLElement,
  styleName: CSSProperties | keyof CSSProperties,
  value?: string | number,
) => {
  if (!element || !styleName) return;

  if (isObject(styleName)) {
    keysOf(styleName).forEach((prop) => {
      value = styleName[prop];
      setStyle(element, prop, value);
    });
  } else {
    const key: any = camelize(styleName);
    element.style[key] = value as any;
  }
};

export const removeStyle = (
  element: HTMLElement,
  style: CSSProperties | keyof CSSProperties,
) => {
  if (!element || !style) return;

  if (isObject(style)) {
    keysOf(style).forEach((prop) => removeStyle(element, prop));
  } else {
    setStyle(element, style, "");
  }
};

export function addUnit(value?: string | number, defaultUnit = "px") {
  if (!value) return "";
  if (isString(value)) {
    return value;
  } else if (isNumber(value)) {
    return `${value}${defaultUnit}`;
  }
}
