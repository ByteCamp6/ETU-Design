<template>
  <etu-select v-model="value" placeholder="请选择内容" disabled>
    <etu-option
      v-for="item in listData"
      :key="item.label"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    ></etu-option>
  </etu-select>
</template>

<script setup lang="ts">
const value = "0";
const listData = [
  { label: "选项1", value: "1", disabled: true },
  { label: "选项2", value: "2" },
  { label: "选项3", value: "3" },
  { label: "选项4", value: "4" },
];
</script>
