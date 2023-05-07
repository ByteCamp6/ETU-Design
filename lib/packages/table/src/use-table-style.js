"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const index$1 = require("../../hooks/use-resize-observe/index.js");
require("../../hooks/use-z-index/index.js");
const index = require("../../../node_modules/@vueuse/shared/index.js");
const useTableStyle = (props) => {
  const table = vue.getCurrentInstance();
  const tableInnerStyle = vue.computed(() => {
    if (props.height) {
      return {
        height: index.isNumber(props.height)
          ? `${props.height}px`
          : props.height,
      };
    }
    if (props.maxHeight) {
      return {
        maxHeight: index.isNumber(props.maxHeight)
          ? `${props.maxHeight}px`
          : props.maxHeight,
      };
    }
    return {};
  });
  vue.onMounted(() => {
    var _a;
    headerWrapperHeight.value =
      (_a = table.refs.headerWrapper) == null ? void 0 : _a.offsetHeight;
    index$1.useResizeObserver(table.refs.headerWrapper, () => {
      var _a2;
      headerWrapperHeight.value =
        (_a2 = table.refs.headerWrapper) == null ? void 0 : _a2.offsetHeight;
    });
  });
  const headerWrapperHeight = vue.ref(0);
  const scrollbarHeight = vue.computed(() => {
    if (props.height) {
      return "100%";
    }
    return void 0;
  });
  const scrollBarTop = vue.ref(0);
  const scrollBarLeft = vue.ref(0);
  const scrollBarRef = vue.ref();
  const scrollingPosition = vue.computed(() => {
    if (scrollBarLeft.value === 0) {
      return "left";
    } else if (
      table.refs.tableBodyNativeRef.offsetWidth -
        table.refs.bodyWrapper.offsetWidth -
        scrollBarLeft.value <
      1
    ) {
      return "right";
    }
    return "middle";
  });
  const bindScroll = ({ scrollTop, scrollLeft }) => {
    if (scrollBarLeft.value !== scrollLeft) {
      table.refs.headerWrapper.scrollLeft = scrollLeft;
    }
    scrollBarTop.value = scrollTop;
    scrollBarLeft.value = scrollLeft;
  };
  const scrollbarMaxHeight = vue.computed(() => {
    if (props.maxHeight) {
      if (!Number.isNaN(Number(props.maxHeight))) {
        const maxHeight = props.maxHeight;
        return headerWrapperHeight.value
          ? maxHeight - headerWrapperHeight.value
          : maxHeight;
      }
    }
    return void 0;
  });
  return {
    tableInnerStyle,
    scrollbarHeight,
    scrollBarRef,
    scrollingPosition,
    bindScroll,
    scrollbarMaxHeight,
    headerWrapperHeight,
  };
};
exports.useTableStyle = useTableStyle;
