"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const index$2 = require("../../hooks/use-timout/index.js");
const style = require("../../utils/dom/style.js");
const index = require("../../hooks/use-z-index/index.js");
const index$1 = require("../../hooks/use-lockscreen/index.js");
const useDialog = (props, targetRef) => {
  const instance = vue.getCurrentInstance();
  const emit = instance.emit;
  const { nextZIndex } = index.useZIndex();
  const visible = vue.ref(false);
  const closed = vue.ref(false);
  const rendered = vue.ref(false);
  const zIndex = vue.ref(props.zIndex || nextZIndex());
  let openTimer = void 0;
  let closeTimer = void 0;
  const style$1 = vue.computed(() => {
    const style2 = {};
    const varPrefix = `--etu-dialog`;
    if (props.top) {
      style2[`${varPrefix}-margin-top`] = props.top;
    }
    if (props.width) {
      style2[`${varPrefix}-width`] = style.addUnit(props.width);
    }
    return style2;
  });
  const overlayDialogStyle = vue.computed(() => {
    if (props.alignCenter) {
      return { display: "flex" };
    }
    return {};
  });
  function afterEnter() {
    emit("opened");
  }
  function afterLeave() {
    emit("closed");
    emit("update:modelValue", false);
    if (props.destroyOnClose) {
      rendered.value = false;
    }
  }
  function beforeLeave() {
    emit("close");
  }
  function open() {
    closeTimer == null ? void 0 : closeTimer();
    openTimer == null ? void 0 : openTimer();
    if (props.openDelay && props.openDelay > 0) {
      ({ stop: openTimer } = index$2.useTimeoutFn(() => doOpen(), props.openDelay));
    } else {
      doOpen();
    }
  }
  function close() {
    openTimer == null ? void 0 : openTimer();
    closeTimer == null ? void 0 : closeTimer();
    if (props.closeDelay && props.closeDelay > 0) {
      ({ stop: closeTimer } = index$2.useTimeoutFn(() => doClose(), props.closeDelay));
    } else {
      doClose();
    }
  }
  function handleClose() {
    function hide(shouldCancel) {
      if (shouldCancel)
        return;
      closed.value = true;
      visible.value = false;
    }
    if (props.beforeClose) {
      props.beforeClose(hide);
    } else {
      close();
    }
  }
  function onModalClick() {
    if (props.closeOnClickModal) {
      handleClose();
    }
  }
  function doOpen() {
    visible.value = true;
  }
  function doClose() {
    visible.value = false;
  }
  if (props.lockScroll) {
    index$1.useLockscreen(visible);
  }
  vue.watch(
    () => props.modelValue,
    (val) => {
      if (val) {
        closed.value = false;
        open();
        rendered.value = true;
        zIndex.value = props.zIndex ? zIndex.value++ : nextZIndex();
        vue.nextTick(() => {
          emit("open");
          if (targetRef.value) {
            targetRef.value.scrollTop = 0;
          }
        });
      } else {
        if (visible.value) {
          close();
        }
      }
    }
  );
  vue.onMounted(() => {
    if (props.modelValue) {
      visible.value = true;
      rendered.value = true;
      open();
    }
  });
  return {
    afterEnter,
    afterLeave,
    beforeLeave,
    handleClose,
    onModalClick,
    close,
    closed,
    style: style$1,
    overlayDialogStyle,
    rendered,
    visible,
    zIndex
  };
};
exports.useDialog = useDialog;
