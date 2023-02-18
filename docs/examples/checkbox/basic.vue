<template>
  <div>
    <EtuCheckbox v-model="checked1" label="Option 1" />
    <EtuCheckbox v-model="checked2" label="Option 2" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const checked1 = ref(true);
const checked2 = ref(false);
</script>
