import { isString, isObject } from "../../../node_modules/@vue/shared/dist/shared.esm-bundler.js";
import { camelize } from "vue";
import { isNumber } from "../../../node_modules/@vueuse/shared/index.js";
const keysOf = (arr) => Object.keys(arr);
const getStyle = (element, styleName) => {
  var _a;
  if (!element || !styleName)
    return "";
  let key = camelize(styleName);
  if (key === "float")
    key = "cssFloat";
  try {
    const style = element.style[key];
    if (style)
      return style;
    const computed = (_a = document.defaultView) == null ? void 0 : _a.getComputedStyle(element, "");
    return computed ? computed[key] : "";
  } catch {
    return element.style[key];
  }
};
const setStyle = (element, styleName, value) => {
  if (!element || !styleName)
    return;
  if (isObject(styleName)) {
    keysOf(styleName).forEach((prop) => {
      value = styleName[prop];
      setStyle(element, prop, value);
    });
  } else {
    const key = camelize(styleName);
    element.style[key] = value;
  }
};
const removeStyle = (element, style) => {
  if (!element || !style)
    return;
  if (isObject(style)) {
    keysOf(style).forEach((prop) => removeStyle(element, prop));
  } else {
    setStyle(element, style, "");
  }
};
function addUnit(value, defaultUnit = "px") {
  if (!value)
    return "";
  if (isString(value)) {
    return value;
  } else if (isNumber(value)) {
    return `${value}${defaultUnit}`;
  }
}
export {
  addUnit,
  getStyle,
  keysOf,
  removeStyle,
  setStyle
};
