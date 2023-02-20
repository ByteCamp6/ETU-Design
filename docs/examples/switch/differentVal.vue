<template>
  <etu-switch
    v-model="demo"
    @dataVal="showDemo"
    activeValue="1000"
    inactiveValue="0"
  ></etu-switch>
</template>
<script setup lang="ts">
import { ref } from "vue";

let demo = ref(1000);
function showDemo() {
  console.log(demo.value);
}
</script>
