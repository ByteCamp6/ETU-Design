import { useTimeoutFn } from "@etu-design/hooks";
import type { PopperProps } from "../popper";
import type { ComputedRef } from "vue";

export const useTimeEvent = (
  props: PopperProps,
  manualMode: ComputedRef<boolean>,
  invalid: ComputedRef<boolean>,
  open: (...args) => any,
  close: (...args) => any,
) => {
  // Dialog 打开/关闭的延时时间，单位毫秒
  let openTimer: (() => void) | undefined = undefined;
  let closeTimer: (() => void) | undefined = undefined;
  const openPopper = () => {
    if (invalid.value || manualMode.value) {
      return;
    }
    doOpen();
  };
  const closePopper = () => {
    if (manualMode.value) {
      return;
    }
    doClose();
  };

  const doOpen = () => {
    closeTimer?.();
    openTimer?.();
    if (props.openDelay && props.openDelay > 0) {
      ({ stop: openTimer } = useTimeoutFn(() => open(), props.openDelay));
    } else {
      open();
    }
  };

  const doClose = () => {
    openTimer?.();
    closeTimer?.();
    if (props.closeDelay && props.closeDelay > 0) {
      ({ stop: closeTimer } = useTimeoutFn(() => close(), props.closeDelay));
    } else {
      close();
    }
  };

  return {
    openPopper,
    closePopper,
    doClose,
    doOpen,
  };
};
