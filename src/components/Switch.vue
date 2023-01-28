<template>
  <etu-switch
    id="cx"
    bgColor="crimson"
    ref="r"
    activeValue="100"
    inactiveValue="0"
    @change="handleChange(100)"
    v-model="xx"
    size="normal"
  ></etu-switch>
</template>

<script setup lang="ts">
import { ref } from "vue";

let r = ref();
const xx = ref();
const handleChange = (row: any) => {
  console.log("这是个自定义事件");
};
</script>

<style scoped></style>
