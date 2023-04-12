<template>
  <div>
    <el-input :model-value="displayValue" />
  </div>
</template>

<script setup lang="ts" name="InputNumber">
import { computed, onMounted, onUpdated, reactive, ref, watch } from "vue";

interface Data {
  currentValue: number | null | undefined;
  userInput: null | number | string;
}
// const data = reactive<Data>({
//   currentValue: props.modelValue,
//   userInput: null,
// });

// const test = reactive < data > {};
</script>

<style lang="scss" scoped></style>
