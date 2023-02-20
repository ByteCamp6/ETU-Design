<template>
  <etu-input v-model="input" placeholder="Please input" size="small" />
  <etu-input v-model="input" placeholder="Please input" size="medium" />
  <etu-input v-model="input" placeholder="Please input" size="large" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");
</script>
