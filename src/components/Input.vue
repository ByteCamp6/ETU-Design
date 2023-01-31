<template>
  <!-- <etu-input type="textarea"></etu-input> -->
  <etu-input
    type="text"
    placeholder="请输入内容..."
    v-model="name"
    prefixIcon="pad"
    :clearable="true"
  />
  <div>{{ name }}</div>
  <etu-input
    v-model="password"
    type="password"
    :showPassword="true"
    placeholder="请输入密码"
    size="large"
  />
  <div>{{ password }}</div>
  <etu-input
    disabled
    placeholder="禁用状态..."
    size="small"
    suffixIcon="cry"
  ></etu-input>
  <etu-input>
    <template #prepend>http://</template>
    <template #append> .com </template>
  </etu-input>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
const name = ref("");
const password = ref();
// watch(
//   () => name.value,
//   (value, oldValue) => {
//     console.log("测试", value, oldValue);
//   },
//   { immediate: true },
// );
</script>
