<template>
  <etu-table :columns="columns" :data="tableData" style="width: 900px"></etu-table>
</template>

<script setup lang="ts">
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
    width: "500px",
  },
];

const tableData = Array(10).fill({
  date: "2016-05-03",
  name: "Tom",
  address: "No. 189, Grove St, Los Angeles",
});
</script>
