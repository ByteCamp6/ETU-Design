import { onScopeDispose, watch } from "vue";
import type { Ref } from "vue";
import { getStyle, removeStyle, setStyle } from "@etu-design/utils";

/**
 * @description 根据trigger的值，使滚动条隐藏，为了防止滚动条消失造成的宽度改变，因此
 * 需要为body的width设置计算属性
 */
export const useLockscreen = (trigger: Ref<boolean>) => {
  const hiddenStyle = { overflow: "hidden" };

  if (getStyle(document.body, "overflow") === "hidden") {
    return;
  }

  let scrollBarWidth = 0;
  let withoutHiddenStyle = false;
  let bodyWidth = "0";

  // 使滚动条和页面宽度恢复
  const cleanup = () => {
    setTimeout(() => {
      removeStyle(document.body, "overflow");
      if (withoutHiddenStyle) {
        document.body.style.width = bodyWidth;
      }
    }, 200);
  };

  // 通过模拟一个有滚动条的div，然后算出滚动条的宽度
  const getScrollbarWidth = () => {
    const scrollDiv = document.createElement("div");
    scrollDiv.style.cssText =
      "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
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

    // 是否具有隐藏属性
    withoutHiddenStyle = !(getStyle(document.body, "overflow") === "hidden");
    if (withoutHiddenStyle) {
      bodyWidth = document.body.style.width;
    }
    // 获取滚动条宽度
    scrollBarWidth = getScrollbarWidth();
    const bodyHasOverflow =
      document.documentElement.clientHeight < document.body.scrollHeight;
    const bodyOverflowY = getStyle(document.body, "overflowY");
    // 如果有滚动条存在则设置页面body宽度
    if (
      scrollBarWidth > 0 &&
      (bodyHasOverflow || bodyOverflowY === "scroll") &&
      withoutHiddenStyle
    ) {
      document.body.style.width = `calc(100% - ${scrollBarWidth}px)`;
    }
    // 隐藏滚动条
    setStyle(document.body, hiddenStyle);
  });
  // 组件注销时触发
  onScopeDispose(() => cleanup());
};
