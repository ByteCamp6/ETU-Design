<template>
  <etu-input v-model="input" placeholder="Please input">
    <template #prepend>https://</template>
    <template #append> .com </template>
  </etu-input>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");
</script>
