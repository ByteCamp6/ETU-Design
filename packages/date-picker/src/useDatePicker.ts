import type { ManipulateType } from "dayjs";
import { reactive, shallowRef, watch } from "vue";
import type { DatePickerProps, DatePickerEmits } from "./date-picker";
import {
  now,
  getDate,
  getFormate,
  initFormate,
  initValue,
  initModel,
} from "./utils";

export const useDatePickerStates = (props: DatePickerProps) => {
  return reactive({
    visible: false,
    model: initModel(props.modelValue!, props.type),
    value: initValue(props.modelValue!, props.type),
    type: props.type,
    range: props.type === "daterange" ? true : false,
    currentLabel: "",
    startLabel: "",
    endLabel: "",
    format: props.format ? props.format : initFormate(props.type),
    valueFormat: props.valueFormat
      ? props.valueFormat
      : initFormate(props.type),
    selected: [],
  });
};

type State = ReturnType<typeof useDatePickerStates>;

export const useDatePicker = (
  states: State,
  props: DatePickerProps,
  emit: DatePickerEmits,
) => {
  const init = () => {
    if (!states.range) {
      states.currentLabel = getFormate(states.model, states.format);
    } else {
      states.startLabel = getFormate(states.model[0], states.format);
      states.endLabel = getFormate(states.model[1], states.format);
    }
  };

  const updateModel = (index: number = -1) => {
    if (index !== -1) {
      states.model[index] = states.value[index].clone();
      emit("update:modelValue", getFormate(states.value, states.valueFormat));
      if (states.selected.length === 2) states.selected = [];

      states.selected.push(states.model[index]);
      if (states.selected.length <= 1) {
        states.startLabel = getFormate(states.model[index], states.format);
      } else {
        states.endLabel = getFormate(states.model[index], states.format);
      }
      if (index === 1) hideMenu();
    } else {
      states.model = states.value.clone();
      states.currentLabel = getFormate(states.value, states.format);
      emit("update:modelValue", getFormate(states.value, states.valueFormat));
      hideMenu();
    }
  };

  const getDate = (type, index: number = -1) => {
    if (index !== -1) {
      return states.model[index].get(type);
    }
    return states.model.get(type);
  };

  const updateDate = (type, val, index: number = -1) => {
    if (index !== -1) {
      states.value[index] = states.value[index].set(type, val);
    } else {
      states.value = states.value.set(type, val);
    }
  };

  const dateAdd = (val: number, type: ManipulateType, index: number = -1) => {
    console.log(index);
    if (index !== -1) {
      states.value[0] = states.value[0].add(val, type);
      states.value[1] = states.value[1].add(val, type);
    } else {
      states.value = states.value.add(val, type);
    }
  };

  const dateSubtract = (
    val: number,
    type: ManipulateType,
    index: number = -1,
  ) => {
    if (index !== -1) {
      states.value[0] = states.value[0].subtract(val, type);
      states.value[1] = states.value[1].subtract(val, type);
    } else {
      states.value = states.value.subtract(val, type);
    }
  };

  const getDay = (index: number = -1) => {
    return getDate("date", index);
  };

  const getMonth = (index: number = -1) => {
    return getDate("month", index);
  };

  const getYear = (index: number = -1) => {
    return getDate("year", index);
  };

  const setDay = (val: string | number, index: number = -1) => {
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

  const setMonth = (val: string | number, index: number = -1) => {
    if (index !== -1) {
      setYear(states.value[index].year(), index);
    } else {
      setYear(states.value.year(), index);
    }

    updateDate("month", val, index, index);
    if (props.type === "month") updateModel(index);
  };

  const setYear = (val: string | number, index: number = -1) => {
    updateDate("year", val, index);
    if (props.type === "year") updateModel(index);
  };

  const monthAdd = (index: number = -1) => {
    dateAdd(1, "month", index);
  };

  const yearAdd = (index: number = -1) => {
    dateAdd(1, "year", index);
  };

  const monthSubtract = (index: number = -1) => {
    dateSubtract(1, "month", index);
  };

  const yearSubtract = (index: number = -1) => {
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
