<template>
  <etu-switch v-model="show"></etu-switch>
  <etu-popper
    content="这是一个带箭头bottom"
    hover
    arrow
    placement="bottom"
    :show="show"
  >
    <etu-button>手动控制</etu-button>
  </etu-popper>
</template>

<script setup lang="ts">
import { ref } from "vue";

const show = ref(false);
</script>
