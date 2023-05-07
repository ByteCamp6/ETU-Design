"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const style = require("../../utils/dom/style.js");
const useLockscreen = (trigger) => {
  const hiddenStyle = { overflow: "hidden" };
  if (style.getStyle(document.body, "overflow") === "hidden") {
    return;
  }
  let scrollBarWidth = 0;
  let withoutHiddenStyle = false;
  let bodyWidth = "0";
  const cleanup = () => {
    setTimeout(() => {
      style.removeStyle(document.body, "overflow");
      if (withoutHiddenStyle) {
        document.body.style.width = bodyWidth;
      }
    }, 200);
  };
  const getScrollbarWidth = () => {
    const scrollDiv = document.createElement("div");
    scrollDiv.style.cssText =
      "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };
  vue.watch(trigger, (val) => {
    if (!val) {
      cleanup();
      return;
    }
    withoutHiddenStyle = !(
      style.getStyle(document.body, "overflow") === "hidden"
    );
    if (withoutHiddenStyle) {
      bodyWidth = document.body.style.width;
    }
    scrollBarWidth = getScrollbarWidth();
    const bodyHasOverflow =
      document.documentElement.clientHeight < document.body.scrollHeight;
    const bodyOverflowY = style.getStyle(document.body, "overflowY");
    if (
      scrollBarWidth > 0 &&
      (bodyHasOverflow || bodyOverflowY === "scroll") &&
      withoutHiddenStyle
    ) {
      document.body.style.width = `calc(100% - ${scrollBarWidth}px)`;
    }
    style.setStyle(document.body, hiddenStyle);
  });
  vue.onScopeDispose(() => cleanup());
};
exports.useLockscreen = useLockscreen;
