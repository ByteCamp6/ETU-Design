<template>
  <button @click="addData">测试</button>
  <etu-table
    :columns="columns"
    :data="tableData"
    :row-selection="rowSelection"
    :row-class="rowClass"
    :height="600"
    rowKey="name"
    style="width: 900px"
  ></etu-table>
</template>

<script setup lang="tsx">
import { ref } from "vue";
import type { TableColumnCtx } from "@etu-design/table/src/table-column/defaults";
import type { TableProps } from "@etu-design/table/src/table";

interface User {
  date: string;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnCtx<User>[] = [
  {
    label: "日期",
    prop: "date",
    fixed: "left",
    width: 300,
    headerCellClass: () => {
      return ["clf", "ssx"];
    },
  },
  {
    label: "姓名",
    prop: "name",
    width: 120,
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: (a, b) => {
        let a1 = a.name.split("").reverse().join("");
        let b1 = b.name.split("").reverse().join("");
        if (a1 > b1) {
          return 1;
        } else if (a1 < b1) {
          return -1;
        } else {
          return 0;
        }
      },
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
const tableIndex = ref(6);

for (let i = 0; i < tableIndex.value; i++) {
  tableData.value.push({
    date: "2016-05-03",
    name: `Tom${i}`,
    age: 12 + i,
    address: "No. 189, Grove St, Los Angeles",
  });
}

const addData = () => {
  tableData.value.push({
    date: "2016-05-03",
    name: `Tom${tableIndex.value++ + Math.floor(Math.random() * 100)}`,
    age: 12 + tableIndex.value + Math.floor(Math.random() * 100),
    address: "No. 189, Grove St, Los Angeles",
  });
};

const rowSelection = ref({
  type: "checkbox",
  showCheckedAll: true,
  fixed: true,
});

const rowClass: TableProps<User>["rowClass"] = ({ rowIndex }) => {
  if (rowIndex === 1) return "warning-row";
};
</script>

<style>
.warning-row {
  --etu-table-tr-bg-color: yellow;
  --etu-bg-color: yellow;
}
</style>
