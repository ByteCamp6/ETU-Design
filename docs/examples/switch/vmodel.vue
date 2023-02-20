<template>
  <etu-switch v-model="demo" @dataVal="showDemo"></etu-switch>
</template>
<script setup lang="ts">
import { ref } from "vue";

let demo = ref(false);
function showDemo() {
  console.log(demo.value);
}
</script>
