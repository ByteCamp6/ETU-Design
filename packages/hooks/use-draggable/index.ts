import { onBeforeUnmount, onMounted, watchEffect } from "vue";
import { addUnit } from "@etu-design/utils";
import type { ComputedRef, Ref } from "vue";

/**
 * @description 当使用hooks时，给dragRef绑定onMousedown，鼠标移动时，绑定onMousemove
 * 让其移动时不断计算改变transform的值，鼠标抬起时移除该事件，注意在生命周期结束后移除事件
 */
export const useDraggable = (
  targetRef: Ref<HTMLElement | undefined>,
  dragRef: Ref<HTMLElement | undefined>,
  draggable: ComputedRef<boolean>,
) => {
  // style中transform的偏移量
  let transform = {
    offsetX: 0,
    offsetY: 0,
  };

  const onMousedown = (e: MouseEvent) => {
    // 当前鼠标在页面内的坐标
    const downX = e.clientX;
    const downY = e.clientY;
    const { offsetX, offsetY } = transform;

    // getBoundingClientRect()方法返回一个DOMRect对象，该对象提供有关元素大小及其相对于视口的位置的信息
    const targetRect = targetRef.value!.getBoundingClientRect();
    // 左高度和上高度，宽和高
    const targetLeft = targetRect.left;
    const targetTop = targetRect.top;
    const targetWidth = targetRect.width;
    const targetHeight = targetRect.height;

    // 对于内联元素和没有CSS的元素，Element.clientWidth属性为零
    // 否则，它是元素的内部宽度（以像素为单位）。它包括填充，但不包括边框、边距和垂直滚动
    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;

    const minLeft = -targetLeft + offsetX;
    const minTop = -targetTop + offsetY;
    const maxLeft = clientWidth - targetLeft - targetWidth + offsetX;
    const maxTop = clientHeight - targetTop - targetHeight + offsetY;

    const onMousemove = (e: MouseEvent) => {
      const moveX = Math.min(
        Math.max(offsetX + e.clientX - downX, minLeft),
        maxLeft,
      );
      const moveY = Math.min(
        Math.max(offsetY + e.clientY - downY, minTop),
        maxTop,
      );

      transform = {
        offsetX: moveX,
        offsetY: moveY,
      };
      targetRef.value!.style.transform = `translate(${addUnit(
        moveX,
      )}, ${addUnit(moveY)})`;
    };

    const onMouseup = () => {
      document.removeEventListener("mousemove", onMousemove);
      document.removeEventListener("mouseup", onMouseup);
    };

    document.addEventListener("mousemove", onMousemove);
    document.addEventListener("mouseup", onMouseup);
  };

  // 进行监听mousedown事件
  const onDraggable = () => {
    if (dragRef.value && targetRef.value) {
      dragRef.value.addEventListener("mousedown", onMousedown);
    }
  };

  // 移除监听
  const offDraggable = () => {
    if (dragRef.value && targetRef.value) {
      dragRef.value.removeEventListener("mousedown", onMousedown);
    }
  };

  onMounted(() => {
    watchEffect(() => {
      draggable.value ? onDraggable() : offDraggable();
    });
  });

  onBeforeUnmount(() => {
    offDraggable();
  });
};
