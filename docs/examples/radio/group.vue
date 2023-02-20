<template>
  <etu-radio-group v-model="radio">
    <etu-radio :label="1">Option A</etu-radio>
    <etu-radio :label="2">Option B</etu-radio>
    <etu-radio :label="3">Option C</etu-radio>
  </etu-radio-group>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const radio = ref(3);
</script>
