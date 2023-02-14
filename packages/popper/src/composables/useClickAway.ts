import { unref } from "vue";
import { useEventListener } from "./useEventListener";
import type { MaybeRef } from "./typing";

export function useClickAway(
  target: MaybeRef<HTMLElement | Window>,
  handler: (...args) => any,
) {
  const event = "pointerdown";

  if (typeof window === "undefined" || !window) {
    return;
  }

  const listener = (event: Event) => {
    const el = unref(target);
    if (!el) {
      return;
    }

    if (el === event.target || event.composedPath().includes(el)) {
      return;
    }

    handler(event);
  };

  return useEventListener(window, event, listener);
}
