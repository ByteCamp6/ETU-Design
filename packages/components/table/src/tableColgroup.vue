<template>
  <colgroup>
    <col
      v-for="(column, index) in originColumns"
      :key="index"
      :style="{
        width: column.width ? addUnit(column.width) : null,
      }"
    />
  </colgroup>
</template>

<script setup lang="ts">
import { useTable } from "./use-table";
import { addUnit } from "@etu-design/utils";

const { originColumns } = useTable()!;
</script>
