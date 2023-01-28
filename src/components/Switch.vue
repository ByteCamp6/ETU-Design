<template>
  <etu-switch
    bgColor="crimson"
    :modelValue="r"
    activeValue="100"
    inactiveValue="0"
    @change="handleChange(true)"
    size="normal"
  ></etu-switch>
</template>

<script setup lang="ts">
import { ref } from "vue";

let r = ref(100);

const handleChange = (row: any) => {
  console.log(row);
  console.log(333);
};
</script>

<style scoped></style>
