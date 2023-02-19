<template>
  <etu-table
    :columns="columns"
    :data="tableData"
    rowKey="name"
    :height="200"
  ></etu-table>
</template>

<script lang="ts" setup>
const tableData = [
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
  {
    date: "2022-12-11",
    name: "Tom4",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2022-12-11",
    name: "Tom5",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2022-12-11",
    name: "Tom6",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2022-12-11",
    name: "Tom7",
    address: "No. 189, Grove St, Los Angeles",
  },
];

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
</script>
