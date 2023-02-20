"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const useEventListener = require("./useEventListener.js");
function useClickAway(target, handler) {
  const event = "pointerdown";
  if (typeof window === "undefined" || !window) {
    return;
  }
  const listener = (event2) => {
    const el = vue.unref(target);
    if (!el) {
      return;
    }
    if (el === event2.target || event2.composedPath().includes(el)) {
      return;
    }
    handler(event2);
  };
  return useEventListener.useEventListener(window, event, listener);
}
exports.useClickAway = useClickAway;
