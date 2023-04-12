import { ref, reactive, computed, watch, onMounted, nextTick } from "vue";
import { _debounce } from "@etu-design/utils";
import { useNamespace } from "@etu-design/hooks";
import { selectEmits, selectProps } from "./select";

export function useSelectStates(props) {
  return reactive({
    caches: new Map(),
    originList: [],
    list: new Set(),
    selected: [],
    currentLable: "",
    currentIndex: -1,
    visible: false,
    hover: false,
    filterable: false,
    empty: false,
    interval: 200,
    originValue: props.modelValue,
  });
}

type States = ReturnType<typeof useSelectStates>;

export const useSelect = (
  states: States,
  props: selectProps,
  emit: selectEmits,
) => {
  const handlerClickOption = (item) => {
    if (props.disabled) return;
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
      states.currentIndex !== -1 &&
        states.caches.delete(states.currentIndex) &&
        (states.currentIndex = -1);
      states.currentLable = item.label;
      states.caches.set(item.value, item.label);
      states.currentIndex = item.value;
      emit && emit("update:modelValue", item.value);
      hideMenu();
    }
  };

  const deleteArrItem = (
    arr: Array<string | number>,
    item: string | number,
  ) => {
    const idx = arr.findIndex((val) => val === item);
    arr.splice(idx, 1);
    emit && emit("update:modelValue", [...states.selected]);
  };

  const addValue = (item: string) => {
    states.list.add(item);
    states.originList = [...states.list];
  };

  const resetStates = () => {
    emit && emit("update:modelValue", states.originValue);
    emit && emit("visible-change", states.visible);
    states.currentLable = "";
    states.currentIndex = -1;
    states.selected.length = 0;
    states.caches.clear();
    hideMenu();
  };

  const isSelected = (key: string | number) => {
    return states.caches.has(key);
  };

  const isShow = (label: string) => {
    if (!props.filterable) return true;
    return states.list.has(label);
  };

  const toggleMenu = () => {
    if (props.disabled) return;
    if (!props.remote) {
      if (props.filterable) {
        if (states.currentIndex !== -1) {
          nextTick(() => {
            states.list = new Set(states.originList);
          });
        }
      }
      states.visible = !states.visible;
      emit && emit("visible-change", states.visible);
    }
  };

  const hideMenu = () => {
    const flag = states.visible;
    states.visible = false;
    flag !== states.visible && emit && emit("visible-change", states.visible);
    if (props.filterable && states.currentLable === "")
      states.currentLable = "";
  };

  const onHover = () => {
    if (!props.clearable) return;
    states.hover = true;
  };

  const onUnHover = () => {
    states.hover = false;
  };

  const debounceremoteMethod = _debounce(props.remoteMethod, states.interval);

  watch(
    () => states.currentLable,
    (val) => {
      if (!props.remote && !props.filterable) return;

      if (val === "") {
        if (props.filterable) {
          states.list = new Set(states.originList);
        }
        if (props.remote) {
          hideMenu();
          return;
        }
      }

      if (props.remote) {
        debounceremoteMethod(val);
        states.visible = true;
        emit && emit("visible-change", states.visible);
      } else {
        const arr = [...states.list];
        const temp = arr.filter((item: strig) => {
          return item.toUpperCase().includes(states.currentLable.toUpperCase());
        });
        nextTick(() => {
          states.list = new Set(temp);
        });
      }
    },
  );

  return {
    toggleMenu,
    hideMenu,
    handlerClickOption,
    onHover,
    onUnHover,
    isShow,
    isSelected,
    resetStates,
    addValue,
  };
};
