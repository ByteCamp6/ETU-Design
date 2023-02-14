import { computed, getCurrentInstance, ref } from "vue";
import type { Table, TableProps } from "./table";
import { isNumber } from "@etu-design/utils";

export const useTableStyle = (props: TableProps<any>) => {
  const table = getCurrentInstance() as Table;

  const tableInnerStyle = computed(() => {
    if (props.height) {
      return {
        height: isNumber(props.height) ? `${props.height}px` : props.height,
      };
    }
    if (props.maxHeight) {
      return {
        maxHeight: isNumber(props.maxHeight)
          ? `${props.maxHeight}px`
          : props.maxHeight,
      };
    }
    return {};
  });

  const headerWrapperHeight = computed(() => {
    return table.refs.headerWrapper?.offsetHeight;
  });

  const scrollbarHeight = computed(() => {
    if (props.height) {
      return "100%";
    }
    return undefined;
  });

  const scrollBarTop = ref(0);
  const scrollBarLeft = ref(0);

  const scrollBarRef = ref();
  const scrollingPosition = computed(() => {
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

  const scrollbarMaxHeight = computed(() => {
    if (props.maxHeight) {
      if (!Number.isNaN(Number(props.maxHeight))) {
        const maxHeight = props.maxHeight as number;
        return headerWrapperHeight.value
          ? maxHeight
          : maxHeight - headerWrapperHeight.value;
      }
    }
    return undefined;
  });

  return {
    tableInnerStyle,
    scrollbarHeight,
    scrollBarRef,
    scrollingPosition,
    bindScroll,
    scrollbarMaxHeight,
  };
};
