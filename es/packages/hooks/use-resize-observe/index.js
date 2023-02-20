import { watch, unref } from "vue";
import { tryOnScopeDispose } from "../../utils/vue/tryOnScopeDispose.js";
function useResizeObserver(target, callback, options = {}) {
  const { ...observerOptions } = options;
  let observer;
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(
    () => unref(target),
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
  tryOnScopeDispose(stop);
  return {
    stop
  };
}
export {
  useResizeObserver
};
