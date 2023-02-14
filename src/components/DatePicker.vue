<template>
  <!-- <etu-date-picker type="year"></etu-date-picker>
  <etu-date-picker type="month"></etu-date-picker> -->
  <etu-date-picker v-model="value"></etu-date-picker>
</template>

<script setup lang="ts">
import { ref } from "vue";
const value = ref("");
</script>
