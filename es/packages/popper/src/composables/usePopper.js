import { reactive, watch, nextTick, onBeforeUnmount, toRefs } from "vue";
import { createPopper } from "../../../../node_modules/@popperjs/core/lib/popper.js";
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
  const state = reactive({
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
    });
    state.popperInstance.update();
  };
  onBeforeUnmount(() => {
    var _a;
    (_a = state.popperInstance) == null ? void 0 : _a.destroy();
  });
  return {
    ...toRefs(state),
    open,
    close,
  };
}
export { usePopper };
