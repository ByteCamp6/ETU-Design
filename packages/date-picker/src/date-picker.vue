<template lang="">
  <div :class="dpClass">
    <div :class="ns.e('wrap')" @click.stop="toggleMenu">
      <etu-input
        v-if="!range"
        suffixIcon="calendar"
        placeholder="Pick a day"
        v-model="currentLabel"
      ></etu-input>
      <div v-else>
        <etu-icon name="calendar"></etu-icon>
        <input
          :class="ns.e('input')"
          placeholder="Pick a day"
          v-model="startLabel"
        />
        To
        <input
          :class="ns.e('input')"
          placeholder="Pick a day"
          v-model="endLabel"
        />
      </div>
    </div>
    <transition
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
    >
      <div v-if="!range" v-show="visible" :class="ns.e('dropdown')">
        <date-nav :value="value" :model="model"></date-nav>
        <div :class="ns.e('content')">
          <Component :is="component" :value="value" :model="model"></Component>
        </div>
      </div>
      <div
        v-else
        v-show="visible"
        :class="[ns.e('dropdown'), ns.em('dropdown', 'range')]"
      >
        <div :class="ns.e('dropdown-wrap')">
          <date-nav
            :right="false"
            :value="value[0]"
            :model="model[0]"
            :index="0"
          ></date-nav>
          <div :class="ns.e('content')">
            <Component
              :is="component"
              :value="value[0]"
              :model="model[0]"
              :index="0"
            ></Component>
          </div>
        </div>
        <div :class="ns.e('dropdown-wrap')">
          <date-nav
            :left="false"
            :value="value[1]"
            :model="model[1]"
            :index="1"
          ></date-nav>
          <div :class="ns.e('content')">
            <Component
              :is="component"
              :value="value[1]"
              :model="model[1]"
              :index="1"
            ></Component>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
export default {
  name: "EtuDatePicker",
};
</script>

<script setup lang="ts">
import {
  ref,
  reactive,
  watch,
  shallowRef,
  computed,
  toRefs,
  provide,
  onMounted,
  onUnmounted,
} from "vue";
import { useNamespace } from "@etu-design/hooks";
import { datePickerEmits, datePickerProps } from "./date-picker";
import { useDatePicker, useDatePickerStates } from "./useDatePicker";
import { datePickerKey } from "@etu-design/tokens";
import DateNav from "./date-picker-com/date-nav.vue";
import DatePicker from "./date-picker-com/date-table.vue";
import MonthPicker from "./date-picker-com/month-table.vue";
import YearPicker from "./date-picker-com/year-table.vue";

const props = defineProps(datePickerProps);
const emit = defineEmits(datePickerEmits);
const states = useDatePickerStates(props);
const datePicker = useDatePicker(states, props, emit);
const ns = useNamespace("date-picker");
const {
  type,
  model,
  value,
  range,
  currentLabel,
  startLabel,
  endLabel,
  visible,
  selected,
} = toRefs(states);

const {
  dateSubtract,
  dateAdd,
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
  init,
  toggleMenu,
  hideMenu,
} = datePicker;
const component = shallowRef(DatePicker);

provide(
  datePickerKey,
  reactive({
    type: props.type,
    date: value,
    originDate: model,
    selected,
    setDay,
    setMonth,
    setYear,
    getDay,
    getMonth,
    getYear,
    changeType,
    dateSubtract,
    dateAdd,
    monthAdd,
    yearAdd,
    monthSubtract,
    yearSubtract,
  }),
);

const dpClass = computed(() => {
  return [ns.b(), ns.is("range", range.value), ns.is("focus", visible.value)];
});

const compChange = () => {
  switch (type.value) {
    case "date":
      component.value = DatePicker;
      break;
    case "month":
      component.value = MonthPicker;
      break;
    case "year":
      component.value = YearPicker;
      break;
    default:
      break;
  }
};

watch(() => type.value, compChange);

onMounted(() => {
  window.addEventListener("click", hideMenu);
});

onUnmounted(() => {
  window.removeEventListener("click", hideMenu);
});

init();
compChange();
</script>
