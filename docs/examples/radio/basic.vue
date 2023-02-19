<template>
  <etu-radio label="1" size="large" v-model="radio">Option 1</etu-radio>
  <etu-radio label="2" size="large" v-model="radio">Option 2</etu-radio>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const radio = ref("1");
</script>
