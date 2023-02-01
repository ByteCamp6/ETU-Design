<template>
  <etu-button type="danger" @click="changeState">遮罩层</etu-button>
  <etu-overlay v-model="isShow"></etu-overlay>
</template>

<script setup lang="ts">
import { ref } from "vue";

let isShow = ref(false);
function changeState() {
  isShow.value = !isShow.value;
}
</script>

<style scoped></style>
