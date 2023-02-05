<template>
  <!-- 文本域 -->
  <etu-input type="textarea" v-model="text"></etu-input>
  {{ text }}
  <!-- 清空输入框 -->
  <etu-input
    type="text"
    placeholder="请输入内容..."
    v-model="name"
    prefixIcon="pad"
    :clearable="true"
  />
  <div>{{ name }}</div>
  <!-- 密码框 显示与隐藏 -->
  <etu-input
    v-model="password"
    type="password"
    :showPassword="true"
    placeholder="请输入密码"
    size="large"
  />
  <div>{{ password }}</div>
  <!-- 禁用状态 -->
  <etu-input
    disabled
    placeholder="禁用状态..."
    size="small"
    suffixIcon="cry"
  ></etu-input>
  <!-- 复合输入框 -->
  <etu-input>
    <template #prepend>http://</template>
    <template #append> .com </template>
  </etu-input>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
const name = ref("");
const password = ref();
const text = ref();
// watch(
//   () => name.value,
//   (value, oldValue) => {
//     console.log("测试", value, oldValue);
//   },
//   { immediate: true },
// );
</script>
