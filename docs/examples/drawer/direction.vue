<template>
  <etu-drawer direction="Left" v-model="valLeft"> 左抽屉 </etu-drawer>
  <etu-drawer direction="Right" v-model="valRight"> 右抽屉 </etu-drawer>
  <etu-drawer direction="Up" v-model="valUp"> 上抽屉 </etu-drawer>
  <etu-drawer direction="Down" v-model="valDown"> 下抽屉 </etu-drawer>
  <etu-button @click="LeftShow">左抽屉</etu-button>
  <etu-button @click="RightShow">右抽屉</etu-button>
  <etu-button @click="UpShow">上抽屉</etu-button>
  <etu-button @click="DownShow">下抽屉</etu-button>
</template>

<script setup lang="ts">
import { ref } from "vue";

let valLeft = ref(false);
let valRight = ref(false);
let valUp = ref(false);
let valDown = ref(false);
function LeftShow() {
  valLeft.value = !valLeft.value;
  console.log("左抽屉");
}
function RightShow() {
  valRight.value = !valRight.value;
  console.log("右抽屉");
}
function UpShow() {
  valUp.value = !valUp.value;
  console.log("上抽屉");
}
function DownShow() {
  valDown.value = !valDown.value;
  console.log("下抽屉");
}
</script>

<style scoped></style>
