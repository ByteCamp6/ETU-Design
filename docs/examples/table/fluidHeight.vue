<template>
  <etu-button @click="addData">添加数据</etu-button>
  <etu-table
    :columns="columns"
    :data="tableData"
    rowKey="name"
    :maxHeight="250"
  ></etu-table>
</template>

<script lang="ts" setup>
import { ref } from "vue";

let index = 4;
const tableData = ref([
  {
    date: "2022-12-13",
    name: "Tom1",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2022-12-12",
    name: "Tom2",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2022-12-14",
    name: "Tom3",
    address: "No. 189, Grove St, Los Angeles",
  },
]);

const columns = [
  {
    label: "日期",
    prop: "date",
  },
  {
    label: "姓名",
    prop: "name",
  },
  {
    label: "地址",
    prop: "address",
    width: 400,
  },
];

const addData = () => {
  tableData.value.push({
    date: "2022-12-13",
    name: `Tom${index++}`,
    address: "No. 189, Grove St, Los Angeles",
  });
};
</script>
