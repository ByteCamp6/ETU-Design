<template>
  <div :class="ns.e('nav')">
    <etu-icon
      v-show="left"
      :class="navIconClass"
      name="arrow-double-left"
      @click.stop="handleClickYear('subtract')"
    ></etu-icon>
    <etu-icon
      v-show="type === 'date' || (type === 'daterange' && left)"
      :class="navIconClass"
      name="arrow-right"
      style="transform: rotate(-180deg); margin-top: -5px"
      @click.stop="monthSubtract(index)"
    ></etu-icon>
    <div :class="ns.e('nav-header')">
      <div :class="navTitleClass" v-if="type === 'year'">
        <span :class="navInnerClass">{{ yearRange }}</span>
      </div>
      <div :class="navTitleClass" v-else-if="type === 'month'">
        <span :class="navInnerClass" @click.stop="handleClickType('year')">{{
          value.year()
        }}</span>
      </div>
      <div :class="navTitleClass" v-else>
        <span :class="navInnerClass" @click.stop="handleClickType('year')">{{
          value.year()
        }}</span>
        <span :class="navInnerClass" @click.stop="handleClickType('month')">{{
          getMonthEn(value.month())
        }}</span>
      </div>
    </div>
    <etu-icon
      v-show="type === 'date' || (type === 'daterange' && right)"
      :class="navIconClass"
      name="arrow-right"
      @click.stop="monthAdd(index)"
    ></etu-icon>
    <etu-icon
      v-show="right"
      :class="navIconClass"
      name="arrow-double-right"
      @click.stop="handleClickYear('add')"
    ></etu-icon>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, toRefs } from "vue";
import { useNamespace } from "@etu-design/hooks";
import { datePickerKey } from "@etu-design/tokens";
import { getMonthEn, getFormate } from "../utils";
import { dateNavProps } from "../props/date-nav";

const props = defineProps(dateNavProps);
const datePicker = inject(datePickerKey);
const {
  changeType,
  monthAdd,
  dateAdd,
  yearAdd,
  dateSubtract,
  yearSubtract,
  monthSubtract,
} = datePicker;
const { date, originDate, type } = toRefs(datePicker);
const { model, value } = toRefs(props);
const ns = useNamespace("date-picker");

console.log(value.value);
const yearRange = computed(() => {
  const year = Math.floor(value.value.year() / 10) * 10;
  return `${year}-${year + 10 - 1}`;
});

const navIconClass = computed(() => {
  return [ns.e("nav-icon")];
});

const navTitleClass = computed(() => {
  return [ns.e("nav-title")];
});

const navInnerClass = computed(() => {
  return [ns.e("nav-inner")];
});

const handleClickYear = (option: string) => {
  if (option === "add") {
    type.value === "year"
      ? dateAdd(10, "year", props.index)
      : yearAdd(props.index);
  } else {
    type.value === "year"
      ? dateSubtract(10, "year", props.index)
      : yearSubtract(props.index);
  }
};

const handleClickType = (type) => {
  if (!props.change) return;
  changeType(type);
};
</script>
