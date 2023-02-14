import { ref, unref } from "vue";
import { tryOnScopeDispose } from "../../utils/vue/tryOnScopeDispose.js";
const useTimeoutFn = (cb, interval, options = {}) => {
  const { immediate = true } = options;
  const isPending = ref(false);
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
    }, unref(interval));
  }
  if (immediate) {
    isPending.value = true;
    start();
  }
  tryOnScopeDispose(stop);
  return {
    isPending,
    start,
    stop
  };
};
export {
  useTimeoutFn
};
