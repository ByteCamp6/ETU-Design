import { isRef, watch, unref, onMounted, onBeforeUnmount } from "vue";
import type { MaybeRef } from "./typing";

export function useEventListener(
  target: MaybeRef<HTMLElement | Window>,
  event: string,
  handler: (...args) => any,
) {
  if (isRef(target)) {
    watch(target, (value, oldValue) => {
      oldValue?.removeEventListener(event, handler);
      value?.addEventListener(event, handler);
    });
  } else {
    onMounted(() => {
      target.addEventListener(event, handler);
    });
  }

  onBeforeUnmount(() => {
    unref(target)?.removeEventListener(event, handler);
  });
}
