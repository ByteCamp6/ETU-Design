"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const utils = require("./utils.js");
const useDatePickerStates = (props) => {
  console.log(props.modelValue);
  return vue.reactive({
    visible: false,
    model: utils.initModel(props.modelValue, props.type),
    value: utils.initValue(props.modelValue, props.type),
    type: props.type,
    range: props.type === "daterange" ? true : false,
    currentLabel: "",
    startLabel: "",
    endLabel: "",
    format: props.format ? props.format : utils.initFormate(props.type),
    valueFormat: props.valueFormat
      ? props.valueFormat
      : utils.initFormate(props.type),
    selected: [],
  });
};
const useDatePicker = (states, props, emit) => {
  const init = () => {
    if (!states.range) {
      states.currentLabel = utils.getFormate(states.model, states.format);
    } else {
      states.startLabel = utils.getFormate(states.model[0], states.format);
      states.endLabel = utils.getFormate(states.model[1], states.format);
    }
  };
  const updateModel = (index = -1) => {
    if (index !== -1) {
      states.model[index] = states.value[index].clone();
      emit(
        "update:modelValue",
        utils.getFormate(states.value, states.valueFormat),
      );
      if (states.selected.length === 2) states.selected = [];
      states.selected.push(states.model[index]);
      if (states.selected.length <= 1) {
        states.startLabel = utils.getFormate(
          states.model[index],
          states.format,
        );
      } else {
        states.endLabel = utils.getFormate(states.model[index], states.format);
      }
      if (index === 1) hideMenu();
    } else {
      states.model = states.value.clone();
      states.currentLabel = utils.getFormate(states.value, states.format);
      emit(
        "update:modelValue",
        utils.getFormate(states.value, states.valueFormat),
      );
      hideMenu();
    }
  };
  const getDate2 = (type, index = -1) => {
    if (!states.model || !states.model[index]) return "";
    if (index !== -1) {
      return states.model[index].get(type);
    }
    return states.model.get(type);
  };
  const updateDate = (type, val, index = -1) => {
    if (index !== -1) {
      states.value[index] = states.value[index].set(type, val);
    } else {
      states.value = states.value.set(type, val);
    }
  };
  const dateAdd = (val, type, index = -1) => {
    console.log(index);
    if (index !== -1) {
      states.value[0] = states.value[0].add(val, type);
      states.value[1] = states.value[1].add(val, type);
    } else {
      states.value = states.value.add(val, type);
    }
  };
  const dateSubtract = (val, type, index = -1) => {
    if (index !== -1) {
      states.value[0] = states.value[0].subtract(val, type);
      states.value[1] = states.value[1].subtract(val, type);
    } else {
      states.value = states.value.subtract(val, type);
    }
  };
  const getDay = (index = -1) => {
    return getDate2("date", index);
  };
  const getMonth = (index = -1) => {
    return getDate2("month", index);
  };
  const getYear = (index = -1) => {
    return getDate2("year", index);
  };
  const setDay = (val, index = -1) => {
    if (index !== -1) {
      setYear(states.value[index].year(), index);
      setMonth(states.value[index].month(), index);
    } else {
      setYear(states.value.year());
      setMonth(states.value.month());
    }
    updateDate("date", val, index);
    updateModel(index);
  };
  const setMonth = (val, index = -1) => {
    if (index !== -1) {
      setYear(states.value[index].year(), index);
    } else {
      setYear(states.value.year(), index);
    }
    updateDate("month", val, index);
    if (props.type === "month") updateModel(index);
  };
  const setYear = (val, index = -1) => {
    updateDate("year", val, index);
    if (props.type === "year") updateModel(index);
  };
  const monthAdd = (index = -1) => {
    dateAdd(1, "month", index);
  };
  const yearAdd = (index = -1) => {
    dateAdd(1, "year", index);
  };
  const monthSubtract = (index = -1) => {
    dateSubtract(1, "month", index);
  };
  const yearSubtract = (index = -1) => {
    dateSubtract(1, "year", index);
  };
  const changeType = (type) => {
    states.type = type;
  };
  const toggleMenu = () => {
    if (props.disabled) return;
    states.visible = true;
    emit && emit("visible-change", states.visible);
  };
  const hideMenu = () => {
    const flag = states.visible;
    states.visible = false;
    flag !== states.visible && emit && emit("visible-change", states.visible);
  };
  return {
    init,
    monthAdd,
    yearAdd,
    monthSubtract,
    yearSubtract,
    setDay,
    setMonth,
    setYear,
    getDay,
    getMonth,
    getYear,
    changeType,
    dateSubtract,
    dateAdd,
    toggleMenu,
    hideMenu,
  };
};
exports.useDatePicker = useDatePicker;
exports.useDatePickerStates = useDatePickerStates;
