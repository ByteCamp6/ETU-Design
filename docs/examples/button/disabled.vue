<template>
  <etu-button @click="demoFun">default</etu-button>
  <etu-button type="default" disabled="true" @click="demoFun">default</etu-button>
  <etu-button type="primary" disabled="true" @click="demoFun">primary</etu-button>
  <etu-button type="success" disabled="true" @click="demoFun">success</etu-button>
  <etu-button type="Info" disabled="true" @click="demoFun">Info</etu-button>
  <etu-button type="warning" disabled="true" @click="demoFun">warning</etu-button>
  <etu-button type="danger" disabled="true" @click="demoFun">danger</etu-button>
  <etu-button type="rainbow" disabled="true" @click="demoFun">rainbow</etu-button>
</template>
<script setup lang="ts">
function demoFun() {
  console.log("没有设置禁用，事件触发了");
}
</script>