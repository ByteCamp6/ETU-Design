<template>
  <etu-table
    :columns="columns"
    :data="tableData"
    rowKey="name"
  ></etu-table>
</template>

<script setup lang="tsx">
import { ref } from "vue";
const columns = [
  {
    label: "日期",
    prop: "date",
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
    label: "操作",
    prop: "config",
    width: 200,
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
const tableIndex = ref(4);

for (let i = 0; i < tableIndex.value; i++) {
  tableData.value.push({
    date: "2016-05-03",
    name: `Tom${i}`,
    age: 12 + i,
  });
}
</script>
