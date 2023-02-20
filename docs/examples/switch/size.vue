<template>
  <etu-switch size="small" v-model="switch1"></etu-switch>
  <etu-switch bgColor="crimson" v-model="switch1" class="ml-2"></etu-switch>
  <etu-switch
    bgColor="limegreen"
    size="large"
    v-model="switch1"
    class="ml-2"
  ></etu-switch>
</template>
<script setup lang="ts">
import { ref } from "vue";

const switch1 = ref(true);
</script>
