<template>
  <table
    :class="[ns.b(), ns.m('month')]"
    role="grid"
    cellspacing="0"
    cellpadding="0"
  >
    <tr v-for="row in years" :key="row.toString()">
      <td
        v-for="item in row"
        :key="`${row}.${item.value}`"
        @click.stop="handleClickCell(item)"
      >
        <div :class="ns.b('cell')">
          <span
            :class="[
              ns.e('cell-text'),
              ns.is('selected', item.selected),
              ns.is('current', item.current),
            ]"
            >{{ item.value }}</span
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

const props = defineProps(dateTableProps);
const datePicker = inject(datePickerKey);
const { type, getYear, setYear, changeType } = datePicker;
const { date, originDate } = toRefs(datePicker);
const ns = useNamespace("date-table");

const years = reactive([
  [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
  [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
  [{ value: 0 }, { value: 0 }],
]);

const handleClickCell = (item) => {
  setYear(item.value);
  init();
  type !== "year" && changeType("month");
};

const init = () => {
  const today = now();
  const selectedYear = getYear();
  const nYear = today.year();
  let cnt = Math.floor(date.value.year() / 10) * 10;
  for (const arr of years) {
    for (const year of arr) {
      if (nYear === cnt) {
        year.current = true;
      } else {
        year.current = false;
      }
      if (cnt === selectedYear) {
        year.selected = true;
      } else {
        year.selected = false;
      }
      year.value = cnt++;
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
