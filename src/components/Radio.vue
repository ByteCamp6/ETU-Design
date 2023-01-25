<template>
  <etu-radio v-model="radioValue" :label="'222'"></etu-radio>
  <etu-radio v-model="radioValue" :label="'333'"></etu-radio>
  <etu-radio-group v-model="radioValue2" :disabled="isdisabled">
    <etu-radio :label="'Option1'"></etu-radio>
    <etu-radio :label="'Option2'"></etu-radio>
    <etu-radio :label="'Option3'"></etu-radio>
  </etu-radio-group>
  <button @click="isdisabled = !isdisabled">转换</button>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const radioValue = ref("222");

const radioValue2 = ref("22");

const isdisabled = ref(false);
</script>
