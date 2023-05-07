import { unref } from "vue";
import { useEventListener } from "./useEventListener.js";
function useClickAway(target, handler) {
  const event = "pointerdown";
  if (typeof window === "undefined" || !window) {
    return;
  }
  const listener = (event2) => {
    const el = unref(target);
    if (!el) {
      return;
    }
    if (el === event2.target || event2.composedPath().includes(el)) {
      return;
    }
    handler(event2);
  };
  return useEventListener(window, event, listener);
}
export { useClickAway };
