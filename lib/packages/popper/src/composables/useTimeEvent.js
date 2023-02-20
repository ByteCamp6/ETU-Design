"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
const index = require("../../../hooks/use-timout/index.js");
require("../../../hooks/use-z-index/index.js");
const useTimeEvent = (props, manualMode, invalid, open, close) => {
  let openTimer = void 0;
  let closeTimer = void 0;
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
    closeTimer == null ? void 0 : closeTimer();
    openTimer == null ? void 0 : openTimer();
    if (props.openDelay && props.openDelay > 0) {
      ({ stop: openTimer } = index.useTimeoutFn(() => open(), props.openDelay));
    } else {
      open();
    }
  };
  const doClose = () => {
    openTimer == null ? void 0 : openTimer();
    closeTimer == null ? void 0 : closeTimer();
    if (props.closeDelay && props.closeDelay > 0) {
      ({ stop: closeTimer } = index.useTimeoutFn(() => close(), props.closeDelay));
    } else {
      close();
    }
  };
  return {
    openPopper,
    closePopper,
    doClose,
    doOpen
  };
};
exports.useTimeEvent = useTimeEvent;
