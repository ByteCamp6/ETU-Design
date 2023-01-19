<template>
  <Button></Button>
  <Divider></Divider>
  <Breadcrumb></Breadcrumb>
  <Icon></Icon>
  <router-view></router-view>
  <Tag type="success" round>22222</Tag>
  <etu-link
    type="success"
    :underline="false"
    :disabled="true"
    href="https://juejin.cn/"
    >测试测试???</etu-link
  >
</template>

<script setup lang="ts">
import Button from "./components/Button.vue";
import Divider from "./components/Divider.vue";
import Breadcrumb from "./components/breadcrumb.vue";
import Icon from "./components/Icon.vue";
import Tag from "../packages/tag/src/tag.vue";
</script>

<style scoped></style>
