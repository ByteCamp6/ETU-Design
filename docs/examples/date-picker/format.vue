<template>
  <div style="height: 350px">
    <etu-date-picker format="YYYY/MM/DD" v-model="value"></etu-date-picker>
  </div>
</template>

<style scoped></style>

<script lang="ts" setup>
import { ref } from "vue";
const value = ref("2002-01-01");
</script>
