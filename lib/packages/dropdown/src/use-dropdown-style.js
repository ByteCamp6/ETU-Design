"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const useDropDownStyle = (props) => {
  const scrollbarMaxHeight = vue.computed(() => {
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
exports.useDropDownStyle = useDropDownStyle;
