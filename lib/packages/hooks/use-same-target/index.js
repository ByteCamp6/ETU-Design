"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const useSameTarget = (handleClick) => {
  if (!handleClick) {
    return { onClick: () => {
    }, onMousedown: () => {
    }, onMouseup: () => {
    } };
  }
  let mousedownTarget = false;
  let mouseupTarget = false;
  const onClick = (e) => {
    if (mousedownTarget && mouseupTarget) {
      handleClick(e);
    }
    mousedownTarget = mouseupTarget = false;
  };
  const onMousedown = (e) => {
    mousedownTarget = e.target === e.currentTarget;
  };
  const onMouseup = (e) => {
    mouseupTarget = e.target === e.currentTarget;
  };
  return { onClick, onMousedown, onMouseup };
};
exports.useSameTarget = useSameTarget;