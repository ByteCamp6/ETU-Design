<template>
  <etu-radio v-model="radio" disabled label="disabled">Option A</etu-radio>
  <etu-radio v-model="radio" disabled label="selected and disabled"
    >Option B</etu-radio
  >
</template>

<script lang="ts" setup>
import { ref } from "vue";

const radio = ref("selected and disabled");
</script>
