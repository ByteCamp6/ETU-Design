<template>
  <etu-table
    :columns="columns"
    :data="tableData"
    rowKey="name"
    :height="300"
  ></etu-table>
</template>

<script setup lang="tsx">
import { ref } from "vue";
const columns = [
  {
    label: "日期",
    prop: "date",
    fixed: "left",
    width: 150,
  },
  {
    label: "姓名",
    prop: "name",
    width: 120,
    headerRender: () => {
      return <etu-tag>姓名</etu-tag>;
    },
    cellRender: ({ cellData: name }) => {
      return <etu-tag>{name}</etu-tag>;
    },
  },
  {
    label: "年龄",
    prop: "age",
    width: 100,
    align: "center",
  },
  {
    label: "地址",
    prop: "address",
    width: 400,
    align: "center",
  },
  {
    label: "操作",
    prop: "config",
    width: 200,
    fixed: "right",
    cellRender: () => {
      return (
        <div>
          <etu-button type="danger">删除</etu-button>
        </div>
      );
    },
  },
];

const tableData = ref<any[]>([]);
const tableIndex = ref(10);

for (let i = 0; i < tableIndex.value; i++) {
  tableData.value.push({
    date: "2016-05-03",
    name: `Tom${i}`,
    age: 12 + i,
    address: "No. 189, Grove St, Los Angeles",
  });
}
</script>
