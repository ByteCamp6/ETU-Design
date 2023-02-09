import { watch, onScopeDispose } from "vue";
import "../../utils/types.js";
import { getStyle, setStyle, removeStyle } from "../../utils/dom/style.js";
const useLockscreen = (trigger) => {
  const hiddenStyle = { overflow: "hidden" };
  if (getStyle(document.body, "overflow") === "hidden") {
    return;
  }
  let scrollBarWidth = 0;
  let withoutHiddenStyle = false;
  let bodyWidth = "0";
  const cleanup = () => {
    setTimeout(() => {
      removeStyle(document.body, "overflow");
      if (withoutHiddenStyle) {
        document.body.style.width = bodyWidth;
      }
    }, 200);
  };
  const getScrollbarWidth = () => {
    const scrollDiv = document.createElement("div");
    scrollDiv.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };
  watch(trigger, (val) => {
    if (!val) {
      cleanup();
      return;
    }
    withoutHiddenStyle = !(getStyle(document.body, "overflow") === "hidden");
    if (withoutHiddenStyle) {
      bodyWidth = document.body.style.width;
    }
    scrollBarWidth = getScrollbarWidth();
    const bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
    const bodyOverflowY = getStyle(document.body, "overflowY");
    if (scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === "scroll") && withoutHiddenStyle) {
      document.body.style.width = `calc(100% - ${scrollBarWidth}px)`;
    }
    setStyle(document.body, hiddenStyle);
  });
  onScopeDispose(() => cleanup());
};
export {
  useLockscreen
};
