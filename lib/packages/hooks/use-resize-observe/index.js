"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const tryOnScopeDispose = require("../../utils/vue/tryOnScopeDispose.js");
function useResizeObserver(target, callback, options = {}) {
  const { ...observerOptions } = options;
  let observer;
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = vue.watch(
    () => vue.unref(target),
    (el) => {
      cleanup();
      if (el) {
        observer = new ResizeObserver(callback);
        observer.observe(el, observerOptions);
      }
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose.tryOnScopeDispose(stop);
  return {
    stop
  };
}
exports.useResizeObserver = useResizeObserver;
