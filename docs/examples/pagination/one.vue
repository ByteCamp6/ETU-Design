<template>
  <div>
    <etu-switch v-model="value" />
    <etu-pagination
      :hide-on-single-page="value"
      :total="5"
      layout="prev, pager, next"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const value = ref(false);
</script>
