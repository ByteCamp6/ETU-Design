"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const defaultNamespace = "etu";
const statePrefix = "is";
const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
const useNamespace = (block) => {
  const namespace = vue.computed(() => defaultNamespace);
  const b = (blockSuffix = "") =>
    _bem(vue.unref(namespace), block, blockSuffix, "", "");
  const e = (element) =>
    element ? _bem(vue.unref(namespace), block, "", element, "") : "";
  const m = (modifier) =>
    modifier ? _bem(vue.unref(namespace), block, "", "", modifier) : "";
  const be = (blockSuffix, element) =>
    blockSuffix && element
      ? _bem(vue.unref(namespace), block, blockSuffix, element, "")
      : "";
  const em = (element, modifier) =>
    element && modifier
      ? _bem(vue.unref(namespace), block, "", element, modifier)
      : "";
  const bm = (blockSuffix, modifier) =>
    blockSuffix && modifier
      ? _bem(vue.unref(namespace), block, blockSuffix, "", modifier)
      : "";
  const bem = (blockSuffix, element, modifier) =>
    blockSuffix && element && modifier
      ? _bem(vue.unref(namespace), block, blockSuffix, element, modifier)
      : "";
  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}-${name}` : "";
  };
  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
  };
};
exports.defaultNamespace = defaultNamespace;
exports.statePrefix = statePrefix;
exports.useNamespace = useNamespace;
