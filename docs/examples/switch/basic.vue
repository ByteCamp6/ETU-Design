<template>
  <etu-switch />
  <etu-switch class="ml-2" v-model="value2" />
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value2 = ref(true);
</script>
