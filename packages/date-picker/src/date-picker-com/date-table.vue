<template>
  <table :class="ns.b()" role="grid" cellspacing="0" cellpadding="0">
    <tr>
      <th v-for="item of WEEKSSHORT" :key="item">{{ item }}</th>
    </tr>
    <tr v-for="row in tableData" :key="row">
      <td
        v-for="item in row"
        :key="`${row}.${item.value}`"
        @click.stop="handleClickCell(item)"
      >
        <div :class="ns.b('cell')">
          <span
            :class="[
              ns.e('cell-text'),
              ns.is('current', item.today),
              ns.is('selected', item.selected),
            ]"
            >{{ item.value }}</span
          >
        </div>
      </td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import { ref, watch, toRefs, inject, onMounted } from "vue";
import { useNamespace } from "@etu-design/hooks";
import { dateTableProps } from "../props/date-table";
import { datePickerKey } from "@etu-design/tokens";
import { getDates, WEEKSSHORT } from "../utils";
import select from "../../../select";

const props = defineProps(dateTableProps);
const datePicker = inject(datePickerKey);
const { setDay, setMonth, setYear } = datePicker;
const { selected } = toRefs(datePicker);
const { value, model } = toRefs(props);
let tableData = ref([]);

const ns = useNamespace("date-table");

const handleClickCell = (item) => {
  setDay(item.value, props.index);
  for (let row of tableData.value) {
    row = row.every((cell) => {
      if (cell.selected) cell.selected = false;
      return true;
    });
  }
  item.selected = true;
};

watch(
  () => value.value,
  () => {
    tableData.value = getDates(value.value, model.value, selected.value);
  },
);

onMounted(() => {
  tableData.value = getDates(value.value, model.value, selected.value);
});
</script>
