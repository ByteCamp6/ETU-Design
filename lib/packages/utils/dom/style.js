"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const shared_esmBundler = require("../../../node_modules/@vue/shared/dist/shared.esm-bundler.js");
const vue = require("vue");
const index = require("../../../node_modules/@vueuse/shared/index.js");
const keysOf = (arr) => Object.keys(arr);
const classNameToArray = (cls = "") =>
  cls.split(" ").filter((item) => !!item.trim());
const addClass = (el, cls) => {
  if (!el || !cls.trim()) return;
  el.classList.add(...classNameToArray(cls));
};
const removeClass = (el, cls) => {
  if (!el || !cls.trim()) return;
  el.classList.remove(...classNameToArray(cls));
};
const getStyle = (element, styleName) => {
  var _a;
  if (!element || !styleName) return "";
  let key = vue.camelize(styleName);
  if (key === "float") key = "cssFloat";
  try {
    const style = element.style[key];
    if (style) return style;
    const computed =
      (_a = document.defaultView) == null
        ? void 0
        : _a.getComputedStyle(element, "");
    return computed ? computed[key] : "";
  } catch {
    return element.style[key];
  }
};
const setStyle = (element, styleName, value) => {
  if (!element || !styleName) return;
  if (shared_esmBundler.isObject(styleName)) {
    keysOf(styleName).forEach((prop) => {
      value = styleName[prop];
      setStyle(element, prop, value);
    });
  } else {
    const key = vue.camelize(styleName);
    element.style[key] = value;
  }
};
const removeStyle = (element, style) => {
  if (!element || !style) return;
  if (shared_esmBundler.isObject(style)) {
    keysOf(style).forEach((prop) => removeStyle(element, prop));
  } else {
    setStyle(element, style, "");
  }
};
function addUnit(value, defaultUnit = "px") {
  if (!value) return "";
  if (shared_esmBundler.isString(value)) {
    return value;
  } else if (index.isNumber(value)) {
    return `${value}${defaultUnit}`;
  }
}
exports.addClass = addClass;
exports.addUnit = addUnit;
exports.classNameToArray = classNameToArray;
exports.getStyle = getStyle;
exports.keysOf = keysOf;
exports.removeClass = removeClass;
exports.removeStyle = removeStyle;
exports.setStyle = setStyle;
