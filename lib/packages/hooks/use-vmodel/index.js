"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
function useVmodel(props, key, emit) {
  const vm = vue.getCurrentInstance();
  const _emit = emit || (vm == null ? void 0 : vm.emit);
  if (!key) {
    key = "modelValue";
  }
  const event = `update:${key.toString()}`;
  const proxy = vue.ref(props[key]);
  vue.watch(
    () => props[key],
    (v) => (proxy.value = v),
  );
  vue.watch(
    () => proxy.value,
    (v) => {
      if (v !== props[key]) {
        _emit(event, v);
      }
    },
  );
  return proxy;
}
exports.useVmodel = useVmodel;
