import { toRefs, watch, nextTick, onBeforeUnmount, reactive } from "vue";
import { createPopper } from "@popperjs/core";
import type { Ref } from "vue";
import type { MaybeUndefinedRef } from "./typing";
import type { Instance, Placement } from "@popperjs/core";

const toInt = (x) => parseInt(x, 10);

export function usePopper({
  arrowPadding,
  emit,
  locked,
  offsetDistance,
  offsetSkid,
  placement,
  popperRef,
  triggerRef,
}: {
  arrowPadding: MaybeUndefinedRef<string>;
  emit: (event: "open:popper" | "close:popper", ...args: any[]) => void;
  locked: MaybeUndefinedRef<boolean>;
  offsetDistance: MaybeUndefinedRef<string>;
  offsetSkid: MaybeUndefinedRef<string>;
  placement: MaybeUndefinedRef<string>;
  popperRef: Ref<HTMLElement>;
  triggerRef: Ref<HTMLElement>;
}) {
  const state = reactive<{
    isOpen: boolean;
    popperInstance: Instance | null;
  }>({
    isOpen: false,
    popperInstance: null,
  });

  // Enable or disable event listeners to optimize performance.
  const setPopperEventListeners = (enabled) => {
    state.popperInstance?.setOptions((options) => ({
      ...options,
      modifiers: [...options.modifiers!, { name: "eventListeners", enabled }],
    }));
  };

  const enablePopperEventListeners = () => setPopperEventListeners(true);
  const disablePopperEventListeners = () => setPopperEventListeners(false);

  const close = () => {
    if (!state.isOpen) {
      return;
    }

    state.isOpen = false;
    emit("close:popper");
  };

  const open = () => {
    if (state.isOpen) {
      return;
    }

    state.isOpen = true;
    emit("open:popper");
  };

  // When isOpen or placement change
  watch([() => state.isOpen, placement], async ([isOpen]) => {
    if (isOpen) {
      await initializePopper();
      enablePopperEventListeners();
    } else {
      disablePopperEventListeners();
    }
  });

  const initializePopper = async () => {
    await nextTick();
    state.popperInstance = createPopper(triggerRef.value, popperRef.value, {
      placement: placement.value as Placement,
      modifiers: [
        {
          name: "flip",
          enabled: !locked.value,
        },
        {
          name: "arrow",
          options: {
            padding: toInt(arrowPadding.value),
          },
        },
        {
          name: "offset",
          options: {
            offset: [toInt(offsetSkid.value), toInt(offsetDistance.value)],
          },
        },
      ],
    });

    // Update its position
    state.popperInstance.update();
  };

  onBeforeUnmount(() => {
    state.popperInstance?.destroy();
  });

  return {
    ...toRefs(state),
    open,
    close,
  };
}
