import { getCurrentInstance, computed, onMounted, ref } from "vue";
import { useResizeObserver } from "../../hooks/use-resize-observe/index.js";
import "../../hooks/use-z-index/index.js";
import { isNumber } from "../../../node_modules/@vueuse/shared/index.js";
const useTableStyle = (props) => {
  const table = getCurrentInstance();
  const tableInnerStyle = computed(() => {
    if (props.height) {
      return {
        height: isNumber(props.height) ? `${props.height}px` : props.height
      };
    }
    if (props.maxHeight) {
      return {
        maxHeight: isNumber(props.maxHeight) ? `${props.maxHeight}px` : props.maxHeight
      };
    }
    return {};
  });
  onMounted(() => {
    var _a;
    headerWrapperHeight.value = (_a = table.refs.headerWrapper) == null ? void 0 : _a.offsetHeight;
    useResizeObserver(table.refs.headerWrapper, () => {
      var _a2;
      headerWrapperHeight.value = (_a2 = table.refs.headerWrapper) == null ? void 0 : _a2.offsetHeight;
    });
  });
  const headerWrapperHeight = ref(0);
  const scrollbarHeight = computed(() => {
    if (props.height) {
      return "100%";
    }
    return void 0;
  });
  const scrollBarTop = ref(0);
  const scrollBarLeft = ref(0);
  const scrollBarRef = ref();
  const scrollingPosition = computed(() => {
    if (scrollBarLeft.value === 0) {
      return "left";
    } else if (table.refs.tableBodyNativeRef.offsetWidth - table.refs.bodyWrapper.offsetWidth - scrollBarLeft.value < 1) {
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
  const scrollbarMaxHeight = computed(() => {
    if (props.maxHeight) {
      if (!Number.isNaN(Number(props.maxHeight))) {
        const maxHeight = props.maxHeight;
        return headerWrapperHeight.value ? maxHeight - headerWrapperHeight.value : maxHeight;
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
    headerWrapperHeight
  };
};
export {
  useTableStyle
};