<template>
  <Button></Button>
  <Divider></Divider>
  <Breadcrumb></Breadcrumb>
  <Icon></Icon>
  <Tag></Tag>
  <router-view></router-view>
</template>

<script setup lang="ts">
import Button from "./components/Button.vue";
import Divider from "./components/Divider.vue";
import Breadcrumb from "./components/Breadcrumb.vue";
import Icon from "./components/Icon.vue";
import Tag from "./components/Tag.vue";
</script>

<style scoped></style>
