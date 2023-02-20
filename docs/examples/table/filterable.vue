<template>
  <etu-table :columns="columns" :data="tableData" rowKey="name"></etu-table>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: "2022-12-13",
    name: "Tom1",
    age: 9,
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2022-12-12",
    name: "Tom2",
    age: 22,
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2022-12-14",
    name: "Tom3",
    age: 35,
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2022-12-11",
    name: "Tom4",
    age: 53,
    address: "No. 189, Grove St, Los Angeles",
  },
];

const columns = [
  {
    label: "日期",
    prop: "date",
    sortable: {
      sortDirections: ["ascend", "descend"],
    },
  },
  {
    label: "姓名",
    prop: "name",
    sortable: {
      sortDirections: ["ascend", "descend"],
    },
    filterable: {
      filters: [
        {
          text: "Tom1",
          value: "Tom1",
        },
        {
          text: "Tom2",
          value: "Tom2",
        },
      ],
    },
  },
  {
    label: "年龄",
    prop: "age",
    width: 100,
    align: "center",
    sortable: {
      sortDirections: ["ascend", "descend"],
    },
    filterable: {
      filters: [
        {
          text: ">10",
          value: ">10",
        },
        {
          text: "<50",
          value: "<50",
        },
      ],
      filter: (value, record) => {
        if (value === ">10") {
          return record.age > 10;
        } else if (value === "<50") {
          return record.age < 50;
        } else {
          return true;
        }
      },
      filterCombine: "and",
    },
  },
  {
    label: "地址",
    prop: "address",
    width: 400,
  },
];
</script>
