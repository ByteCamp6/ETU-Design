import { reactive } from "vue";

export type SelectItem = {
  value: number | string;
  label: string;
};

const map = new Map();
const store = reactive({
  state: {
    currentValue: new Set(),
    isSelected: false,
  },
});

const state = store.state;

const addValue = async (item) => {
  if (map.has(item.value)) {
    removeValue(item);
    return;
  }
  map.set(item.value, 1);
  state.currentValue.add(item);
  state.isSelected = true;
};

const removeValue = async (key) => {
  state.currentValue.forEach((item) => {
    if (item.value === key.value) {
      state.currentValue.delete(item);
      map.delete(item.value);
    }
  });
  if (state.currentValue.size === 0) {
    state.isSelected = false;
  }
};

const clear = () => {
  state.isSelected = false;
  state.currentValue.clear();
  map.clear();
};

const getCurrentValue: () => Set<SelectItem> = () => {
  return state.currentValue;
};

const getIsSelectd = () => {
  return state.isSelected;
};

export const useSelect = () => {
  return {
    state,
    addValue,
    removeValue,
    clear,
    getIsSelectd,
    getCurrentValue,
  };
};
