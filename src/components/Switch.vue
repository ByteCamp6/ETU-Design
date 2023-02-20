<template>
  <etu-button @click="val = !val">测试</etu-button>
  <etu-switch
    bgColor="crimson"
    size="normal"
    activeValue="300"
    @change="handleChange"
    inactiveValue="0"
    :disabled="val"
  ></etu-switch>
</template>

<script setup lang="ts">
import { ref } from "vue";
let val = ref(false);

const handleChange = (row: any) => {
  console.log("这是个自定义事件",row);
};
</script>

<style scoped></style>
