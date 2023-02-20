import { computed } from "vue";
import type { dropDownProps } from "./dropdown";

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
  const placeMent = props.placement;
  const judgeTriggerHover = {
    hover: true,
    click: false,
  };
  const isTriggerHover = judgeTriggerHover[props.trigger];
  return {
    canclePadding,
    scrollbarMaxHeight,
    placeMent,
    isTriggerHover,
  };
};
