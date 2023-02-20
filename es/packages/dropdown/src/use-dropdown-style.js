import { computed } from "vue";
const useDropDownStyle = (props) => {
  const scrollbarMaxHeight = computed(() => {
    if (props.maxHeight) {
      if (!Number.isNaN(Number(props.maxHeight))) {
        const maxHeight = Number(props.maxHeight);
        return maxHeight;
      }
    }
    return void 0;
  });
  const canclePadding = props.canclePadding;
  const placeMent = props.placement;
  const judgeTriggerHover = {
    hover: true,
    click: false
  };
  const isTriggerHover = judgeTriggerHover[props.trigger];
  const isUseArrowDown = props.arrowDown;
  return {
    isUseArrowDown,
    canclePadding,
    scrollbarMaxHeight,
    placeMent,
    isTriggerHover
  };
};
export {
  useDropDownStyle
};
