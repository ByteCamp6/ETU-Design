<template>
  <etu-input v-model="input" placeholder="Please input" :clearable="true" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");
</script>
