"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function _debounce(fn, wait) {
  let timer = null;
  return function (...args) {
    const context = this;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}
exports._debounce = _debounce;
