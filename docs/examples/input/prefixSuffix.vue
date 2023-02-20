<template>
  <etu-input
    type="text"
    placeholder="请输入内容..."
    v-model="input"
    prefixIcon="pad"
  />
  <etu-input placeholder="请输入内容..." suffixIcon="cry"></etu-input>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");
</script>
