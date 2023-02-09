"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
require("../../utils/types.js");
const utils = require("../../utils/utils.js");
require("../../hooks/use-z-index/index.js");
function useSelectStates(props) {
  return vue.reactive({
    caches: /* @__PURE__ */ new Map(),
    selected: [],
    currentLable: "",
    currentIndex: -1,
    visible: false,
    hover: false,
    filterable: false,
    empty: false,
    interval: 200,
    originValue: props.modelValue
  });
}
const useSelect = (states, props, emit) => {
  const handlerClickOption = (item) => {
    if (props.disabled)
      return;
    emit && emit("change", item.value);
    if (props.multiple) {
      if (states.caches.has(item.value)) {
        states.caches.delete(item.value);
        deleteArrItem(states.selected, item.label);
        return;
      }
      states.selected.push(item.label);
      states.caches.set(item.value, item.label);
      emit && emit("update:modelValue", [...states.selected]);
    } else {
      if (states.caches.has(item.value)) {
        resetStates();
        return;
      }
      states.currentIndex !== -1 && states.caches.delete(states.currentIndex);
      states.currentLable = item.label;
      states.caches.set(item.value, item.label);
      states.currentIndex = item.value;
      emit && emit("update:modelValue", item.value);
      hideMenu();
    }
  };
  const deleteArrItem = (arr, item) => {
    const idx = arr.findIndex((val) => val === item);
    arr.splice(idx, 1);
    emit && emit("update:modelValue", [...states.selected]);
  };
  const resetStates = () => {
    emit && emit("update:modelValue", states.originValue);
    emit && emit("visible-change", states.visible);
    states.currentLable = "";
    states.selected.length = 0;
    states.caches.clear();
    hideMenu();
  };
  const isSelected = (key) => {
    return states.caches.has(key);
  };
  const toggleMenu = () => {
    if (props.disabled)
      return;
    if (props.filterable) {
      states.filterable = true;
    } else {
      states.visible = !states.visible;
      emit && emit("visible-change", states.visible);
    }
  };
  const hideMenu = () => {
    const flag = states.visible;
    states.visible = false;
    flag !== states.visible && emit && emit("visible-change", states.visible);
    states.filterable = false;
  };
  const onHover = () => {
    if (!props.clearable)
      return;
    states.hover = true;
  };
  const onUnHover = () => {
    states.hover = false;
  };
  const debounceremoteMethod = utils._debounce(props.remoteMethod, states.interval);
  vue.watch(
    () => states.currentLable,
    (val) => {
      if (!props.filterable || !states.filterable)
        return;
      if (val === "") {
        hideMenu();
        return;
      }
      debounceremoteMethod(val);
      states.visible = true;
    }
  );
  return {
    toggleMenu,
    hideMenu,
    handlerClickOption,
    onHover,
    onUnHover,
    isSelected,
    resetStates
  };
};
exports.useSelect = useSelect;
exports.useSelectStates = useSelectStates;
