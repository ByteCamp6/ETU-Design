import {
  computed,
  getCurrentInstance,
  nextTick,
  onMounted,
  ref,
  watch,
} from "vue";
import { useTimeoutFn } from "@etu-design/hooks";
import { useLockscreen, useZIndex } from "@etu-design/hooks";
import { addUnit } from "@etu-design/utils";

import type { CSSProperties, Ref, SetupContext } from "vue";
import type { DialogEmits, DialogProps } from "./dialog";

export const useDialog = (
  props: DialogProps,
  targetRef: Ref<HTMLElement | undefined>,
) => {
  const instance = getCurrentInstance()!;
  const emit = instance.emit as SetupContext<DialogEmits>["emit"];
  const { nextZIndex } = useZIndex();

  const visible = ref(false);
  const closed = ref(false);
  const rendered = ref(false); // 当destroyOnClose为true时，我们将其初始化为false，反之亦然
  const zIndex = ref(props.zIndex || nextZIndex());

  // Dialog 打开/关闭的延时时间，单位毫秒
  let openTimer: (() => void) | undefined = undefined;
  let closeTimer: (() => void) | undefined = undefined;

  // 设置宽和高度
  const style = computed<CSSProperties>(() => {
    const style: CSSProperties = {};
    const varPrefix = `--etu-dialog` as const;
    if (props.top) {
      style[`${varPrefix}-margin-top`] = props.top;
    }
    // width可以传百分比，因此需要addUnit
    if (props.width) {
      // @ts-ignore
      style[`${varPrefix}-width`] = addUnit(props.width);
    }
    return style;
  });

  // 由于上下左右都设置为了0，因此设置flex可以水平垂直居中
  const overlayDialogStyle = computed<CSSProperties>(() => {
    if (props.alignCenter) {
      return { display: "flex" };
    }
    return {};
  });

  // Dialog 打开动画结束时的回调
  function afterEnter() {
    emit("opened");
  }

  // Dialog 关闭动画结束时的回调
  function afterLeave() {
    emit("closed");
    emit("update:modelValue", false);
    // 如果设置了destroyOnClose，那么在关闭后将销毁元素
    if (props.destroyOnClose) {
      rendered.value = false;
    }
  }

  // 	Dialog 关闭的回调
  function beforeLeave() {
    emit("close");
  }

  // 设置打开和关闭的延迟
  function open() {
    closeTimer?.();
    openTimer?.();

    if (props.openDelay && props.openDelay > 0) {
      ({ stop: openTimer } = useTimeoutFn(() => doOpen(), props.openDelay));
    } else {
      doOpen();
    }
  }

  function close() {
    openTimer?.();
    closeTimer?.();

    if (props.closeDelay && props.closeDelay > 0) {
      ({ stop: closeTimer } = useTimeoutFn(() => doClose(), props.closeDelay));
    } else {
      doClose();
    }
  }

  // 如果设置了beforeClose，回调函数内执行 done 参数方法的时候才是真正关闭对话框的时候
  function handleClose() {
    function hide(shouldCancel?: boolean) {
      if (shouldCancel) return;
      closed.value = true;
      visible.value = false;
    }

    if (props.beforeClose) {
      props.beforeClose(hide);
    } else {
      close();
    }
  }

  // 通过点击 modal 关闭 Dialog
  function onModalClick() {
    if (props.closeOnClickModal) {
      handleClose();
    }
  }

  // 打开操作
  function doOpen() {
    visible.value = true;
  }

  // 关闭操作
  function doClose() {
    visible.value = false;
  }

  // 锁定滚动条
  if (props.lockScroll) {
    useLockscreen(visible);
  }

  watch(
    () => props.modelValue,
    (val) => {
      if (val) {
        closed.value = false;
        open();
        rendered.value = true; // enables lazy rendering
        zIndex.value = props.zIndex ? zIndex.value++ : nextZIndex();
        // open中的渲染是异步的，需要在渲染完毕后才能发送emit事件，因此需要nextTick
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
    },
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
    zIndex,
  };
};
