<template>
  <div
    style="display: flex; justify-content: space-around: gap: 20px"
  >
    <div style="width: 100%">
      <div>year:</div>
      <etu-date-picker type="year" v-model="value1"></etu-date-picker>
    </div>
    <div style="width: 100%">
      <div>month:</div>
      <etu-date-picker type="month" v-model="value2"></etu-date-picker>
    </div>
  </div>
</template>

<style scoped></style>

<script lang="ts" setup>
import { ref } from "vue";
const value1 = ref("");
const value2 = ref("");
</script>
