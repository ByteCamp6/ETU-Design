<template>
  <Button></Button>
  <Divider></Divider>
  <Breadcrumb></Breadcrumb>
  <Icon></Icon>
  <Tag type="primary" round>22222</Tag>
  <Link />
  <router-view></router-view>
</template>

<script setup lang="ts">
import Button from "./components/Button.vue";
import Divider from "./components/Divider.vue";
import Breadcrumb from "./components/breadcrumb.vue";
import Icon from "./components/Icon.vue";
import Tag from "../packages/tag/src/tag.vue";
import Link from "./components/Link.vue";
</script>

<style scoped></style>
