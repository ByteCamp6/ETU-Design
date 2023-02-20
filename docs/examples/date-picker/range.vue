<template>
  <div>
    <etu-date-picker type="daterange" v-model="values"></etu-date-picker>
  </div>
</template>

<style scoped></style>

<script lang="ts" setup>
import { reactive } from "vue";
const values = reactive([]);
</script>
