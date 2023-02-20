<template>
  <etu-switch
    v-model="demo"
    @change="showDemo"
    activeValue="1000"
    inactiveValue="0"
  ></etu-switch>
</template>
<script setup lang="ts">
import { ref } from "vue";

const demo = ref("1000");
function showDemo(v) {
  console.log(v);
}
</script>
