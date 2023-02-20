<template>
  <etu-button @click="demoFun">default</etu-button>
</template>
<script setup lang="ts">
function demoFun() {
  console.log("没有设置禁用，事件触发了");
}
</script>