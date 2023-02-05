/**
 * @description 为了防止出现鼠标点在弹框上没有放开，然后又移出到外面的遮罩上，弹窗关闭了的问题
 * 因为每次鼠标点击都按顺序触发了以下三个事件：mousedown -> mouseup -> click，
 * 所以在 mousedown 和 mouseup 的时候标记下目标是不是遮罩层，只有当目标都是遮罩层的时候，
 * 才触发 click 事件（关闭弹窗），并重置 mousedownTarget 和 mouseupTarget 为 false
 */
export const useSameTarget = (handleClick?: (e: MouseEvent) => void) => {
  if (!handleClick) {
    return { onClick: () => {}, onMousedown: () => {}, onMouseup: () => {} };
  }

  let mousedownTarget = false;
  let mouseupTarget = false;
  const onClick = (e: MouseEvent) => {
    if (mousedownTarget && mouseupTarget) {
      handleClick(e);
    }
    mousedownTarget = mouseupTarget = false;
  };

  // currentTarget始终是监听事件者，而target是事件的真正发出者
  const onMousedown = (e: MouseEvent) => {
    mousedownTarget = e.target === e.currentTarget;
  };

  const onMouseup = (e: MouseEvent) => {
    mouseupTarget = e.target === e.currentTarget;
  };

  return { onClick, onMousedown, onMouseup };
};
