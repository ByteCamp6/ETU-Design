"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const popper = require("../../../../node_modules/@popperjs/core/lib/popper.js");
const toInt = (x) => parseInt(x, 10);
function usePopper({
  arrowPadding,
  emit,
  locked,
  offsetDistance,
  offsetSkid,
  placement,
  popperRef,
  triggerRef,
}) {
  const state = vue.reactive({
    isOpen: false,
    popperInstance: null,
  });
  const setPopperEventListeners = (enabled) => {
    var _a;
    (_a = state.popperInstance) == null
      ? void 0
      : _a.setOptions((options) => ({
          ...options,
          modifiers: [
            ...options.modifiers,
            { name: "eventListeners", enabled },
          ],
        }));
  };
  const enablePopperEventListeners = () => setPopperEventListeners(true);
  const disablePopperEventListeners = () => setPopperEventListeners(false);
  const close = () => {
    if (!state.isOpen) {
      return;
    }
    state.isOpen = false;
    emit("close");
  };
  const open = () => {
    if (state.isOpen) {
      return;
    }
    state.isOpen = true;
    emit("open");
  };
  vue.watch([() => state.isOpen, placement], async ([isOpen]) => {
    if (isOpen) {
      await initializePopper();
      enablePopperEventListeners();
    } else {
      disablePopperEventListeners();
    }
  });
  const initializePopper = async () => {
    await vue.nextTick();
    state.popperInstance = popper.createPopper(
      triggerRef.value,
      popperRef.value,
      {
        placement: placement.value,
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
      },
    );
    state.popperInstance.update();
  };
  vue.onBeforeUnmount(() => {
    var _a;
    (_a = state.popperInstance) == null ? void 0 : _a.destroy();
  });
  return {
    ...vue.toRefs(state),
    open,
    close,
  };
}
exports.usePopper = usePopper;
