<template>
  <etu-link
    type="primary"
    :underline="false"
    :disabled="fasle"
    href="https://juejin.cn/"
    >测试测试</etu-link
  >
</template>

<script setup lang="ts">
import {} from "vue";
const clickLink = () => {
  console.log("点击了");
};
</script>

<style scoped></style>
