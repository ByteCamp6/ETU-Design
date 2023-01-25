import { unref, watch } from "vue";
import { tryOnScopeDispose } from "@etu-design/utils";
import type { Ref } from "vue";

export function useResizeObserver(
  target: Ref<Element | undefined> | Element | undefined,
  callback: ResizeObserverCallback,
  options = {},
) {
  const { ...observerOptions } = options;
  let observer: ResizeObserver | undefined;

  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = undefined;
    }
  };

  const stopWatch = watch(
    () => unref(target),
    (el) => {
      cleanup();

      if (el) {
        observer = new ResizeObserver(callback);
        observer!.observe(el, observerOptions);
      }
    },
    { immediate: true, flush: "post" },
  );

  const stop = () => {
    cleanup();
    stopWatch();
  };

  tryOnScopeDispose(stop);

  return {
    stop,
  };
}

export type UseResizeObserverReturn = ReturnType<typeof useResizeObserver>;
