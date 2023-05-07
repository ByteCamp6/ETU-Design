"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const tryOnScopeDispose = require("../../utils/vue/tryOnScopeDispose.js");
const useTimeoutFn = (cb, interval, options = {}) => {
  const { immediate = true } = options;
  const isPending = vue.ref(false);
  let timer;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, vue.unref(interval));
  }
  if (immediate) {
    isPending.value = true;
    start();
  }
  tryOnScopeDispose.tryOnScopeDispose(stop);
  return {
    isPending,
    start,
    stop,
  };
};
exports.useTimeoutFn = useTimeoutFn;
