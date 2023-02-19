import { computed, getCurrentInstance, ref } from "vue";
import type { dropDownProps } from "./dropdown";
// import { isNumber } from "@etu-design/utils";

export const useDropDownStyle = (props: dropDownProps) => {
  const scrollbarMaxHeight = computed(() => {
    if (props.maxHeight) {
      if (!Number.isNaN(Number(props.maxHeight))) {
        const maxHeight = Number(props.maxHeight);
        return maxHeight;
      }
    }
    return undefined;
  });
  const canclePadding = props.canclePadding;
  return {
    canclePadding,
    scrollbarMaxHeight,
  };
};
