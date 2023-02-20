<template>
  <etu-switch
    id="cx"
    bgColor="crimson"
    size="normal"
    @dataVal="func"
    v-model="val"
    activeValue="300"
    inactiveValue="0"
  ></etu-switch>
</template>

<script setup lang="ts">
import { ref } from "vue";
let val = ref(300);
const func = () => {
  console.log(val.value);
};

const xx = ref(false);
const handleChange = (row: any) => {
  console.log("这是个自定义事件");
};
</script>

<style scoped></style>
