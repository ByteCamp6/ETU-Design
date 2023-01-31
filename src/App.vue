<template>
  <Button></Button>
  <Divider></Divider>
  <Breadcrumb></Breadcrumb>
  <Icon></Icon>
  <Tag></Tag>
  <Link />
  <Input />
  <router-view></router-view>
</template>

<script setup lang="ts">
import Button from "./components/Button.vue";
import Divider from "./components/Divider.vue";
import Breadcrumb from "./components/breadcrumb.vue";
import Icon from "./components/Icon.vue";
import Link from "./components/Link.vue";
import Tag from "./components/Tag.vue";
import Input from "./components/Input.vue";
</script>

<style scoped></style>
