import { getCurrentInstance, ref, computed, watch, nextTick, onMounted } from "vue";
import { useTimeoutFn } from "../../hooks/use-timout/index.js";
import { addUnit } from "../../utils/dom/style.js";
import { useZIndex } from "../../hooks/use-z-index/index.js";
import { useLockscreen } from "../../hooks/use-lockscreen/index.js";
const useDialog = (props, targetRef) => {
  const instance = getCurrentInstance();
  const emit = instance.emit;
  const { nextZIndex } = useZIndex();
  const visible = ref(false);
  const closed = ref(false);
  const rendered = ref(false);
  const zIndex = ref(props.zIndex || nextZIndex());
  let openTimer = void 0;
  let closeTimer = void 0;
  const style = computed(() => {
    const style2 = {};
    const varPrefix = `--etu-dialog`;
    if (props.top) {
      style2[`${varPrefix}-margin-top`] = props.top;
    }
    if (props.width) {
      style2[`${varPrefix}-width`] = addUnit(props.width);
    }
    return style2;
  });
  const overlayDialogStyle = computed(() => {
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
      ({ stop: openTimer } = useTimeoutFn(() => doOpen(), props.openDelay));
    } else {
      doOpen();
    }
  }
  function close() {
    openTimer == null ? void 0 : openTimer();
    closeTimer == null ? void 0 : closeTimer();
    if (props.closeDelay && props.closeDelay > 0) {
      ({ stop: closeTimer } = useTimeoutFn(() => doClose(), props.closeDelay));
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
    useLockscreen(visible);
  }
  watch(
    () => props.modelValue,
    (val) => {
      if (val) {
        closed.value = false;
        open();
        rendered.value = true;
        zIndex.value = props.zIndex ? zIndex.value++ : nextZIndex();
        nextTick(() => {
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
  onMounted(() => {
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
    style,
    overlayDialogStyle,
    rendered,
    visible,
    zIndex
  };
};
export {
  useDialog
};
