<template>
  <div>
    <etu-date-picker v-model="value"></etu-date-picker>
  </div>
</template>

<style scoped></style>

<script lang="ts" setup>
import { ref } from "vue";
const value = ref("");
</script>
