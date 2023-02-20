import { isArray, isObject } from "../../node_modules/@vue/shared/dist/shared.esm-bundler.js";
import { isDate, isFunction, isString } from "../../node_modules/@vue/shared/dist/shared.esm-bundler.js";
import { isVNode } from "vue";
import isNil from "../../node_modules/lodash-es/isNil.js";
const isUndefined = (val) => val === void 0;
const isEmpty = (val) => !val && val !== 0 || isArray(val) && val.length === 0 || isObject(val) && !Object.keys(val).length;
const isPropAbsent = (prop) => {
  return isNil(prop);
};
export {
  isArray,
  isDate,
  isEmpty,
  isFunction,
  isObject,
  isPropAbsent,
  isString,
  isUndefined,
  isVNode
};
