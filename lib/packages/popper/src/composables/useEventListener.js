"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
function useEventListener(target, event, handler) {
  if (vue.isRef(target)) {
    vue.watch(target, (value, oldValue) => {
      oldValue == null ? void 0 : oldValue.removeEventListener(event, handler);
      value == null ? void 0 : value.addEventListener(event, handler);
    });
  } else {
    vue.onMounted(() => {
      target.addEventListener(event, handler);
    });
  }
  vue.onBeforeUnmount(() => {
    var _a;
    (_a = vue.unref(target)) == null ? void 0 : _a.removeEventListener(event, handler);
  });
}
exports.useEventListener = useEventListener;
