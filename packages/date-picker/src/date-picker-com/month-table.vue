<template>
  <table
    :class="[ns.b(), ns.m('month')]"
    role="grid"
    cellspacing="0"
    cellpadding="0"
  >
    <tr v-for="row in months" :key="row.toString()">
      <td
        v-for="item in row"
        :key="`${row}.${item.label}`"
        @click.stop="handleClickCell(item)"
      >
        <div :class="ns.b('cell')">
          <span
            :class="[
              ns.e('cell-text'),
              ns.is('selected', item.selected),
              ns.is('current', item.current),
            ]"
            >{{ item.label }}</span
          >
        </div>
      </td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import { ref, reactive, watch, toRefs, inject, onMounted } from "vue";
import { useNamespace } from "@etu-design/hooks";
import { dateTableProps } from "../props/date-table";
import { datePickerKey } from "@etu-design/tokens";
import { now } from "../utils";

const months = reactive([
  [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 1 },
    { label: "Mar", value: 2 },
    { label: "Apr", value: 3 },
  ],
  [
    { label: "May", value: 4 },
    { label: "Jun", value: 5 },
    { label: "Jul", value: 6 },
    { label: "Aug", value: 7 },
  ],
  [
    { label: "Sep", value: 8 },
    { label: "Oct", value: 9 },
    { label: "Nov", value: 10 },
    { label: "Dec", value: 11 },
  ],
]);

const props = defineProps(dateTableProps);
const datePicker = inject(datePickerKey);
const { type, setMonth, getMonth, getYear, changeType } = datePicker;
const { date, originDate } = toRefs(datePicker);

const ns = useNamespace("date-table");

const handleClickCell = (item) => {
  setMonth(item.value);
  init();
  type === "date" && changeType("date");
};

const init = () => {
  const today = now();
  const selectedMonth = getMonth();
  const cYear = date.value.year(),
    nYear = today.year(),
    nMonth = today.month();
  for (const arr of months) {
    for (const month of arr) {
      if (cYear === nYear && nMonth === month.value) {
        month.current = true;
      } else {
        month.current = false;
      }
      if (cYear === nYear && month.value === selectedMonth) {
        month.selected = true;
      } else {
        month.selected = false;
      }
    }
  }
};

watch(
  () => date.value,
  () => {
    init();
  },
);

onMounted(() => {
  init();
});
</script>
