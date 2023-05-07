import { getCurrentInstance, ref, watch } from "vue";
function useVmodel(props, key, emit) {
  const vm = getCurrentInstance();
  const _emit = emit || (vm == null ? void 0 : vm.emit);
  if (!key) {
    key = "modelValue";
  }
  const event = `update:${key.toString()}`;
  const proxy = ref(props[key]);
  watch(
    () => props[key],
    (v) => (proxy.value = v),
  );
  watch(
    () => proxy.value,
    (v) => {
      if (v !== props[key]) {
        _emit(event, v);
      }
    },
  );
  return proxy;
}
export { useVmodel };
