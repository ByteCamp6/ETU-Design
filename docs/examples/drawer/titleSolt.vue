<template>
  <etu-drawer direction="Left" v-model="valLeft" Tittle="自定义的标题">
    Etu-Design的Etu是esay to use的缩写
  </etu-drawer>
  <etu-button @click="LeftShow">抽屉</etu-button>
</template>

<script setup lang="ts">
import { ref } from "vue";

let valLeft = ref(false);
function LeftShow() {
  valLeft.value = !valLeft.value;
  console.log("左抽屉");
}
</script>

<style scoped></style>
