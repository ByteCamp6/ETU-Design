import { isRef, watch, onMounted, onBeforeUnmount, unref } from "vue";
function useEventListener(target, event, handler) {
  if (isRef(target)) {
    watch(target, (value, oldValue) => {
      oldValue == null ? void 0 : oldValue.removeEventListener(event, handler);
      value == null ? void 0 : value.addEventListener(event, handler);
    });
  } else {
    onMounted(() => {
      target.addEventListener(event, handler);
    });
  }
  onBeforeUnmount(() => {
    var _a;
    (_a = unref(target)) == null ? void 0 : _a.removeEventListener(event, handler);
  });
}
export {
  useEventListener
};
