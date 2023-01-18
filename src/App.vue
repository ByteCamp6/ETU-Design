<template>
  <Button></Button>
  <Divider></Divider>
  <Breadcrumb></Breadcrumb>
  <Icon></Icon>
  <router-view></router-view>
</template>

<script setup lang="ts">
import Button from "./components/Button.vue";
import Divider from "./components/Divider.vue";
import Breadcrumb from "./components/breadcrumb.vue";
import Icon from "./components/Icon.vue";
</script>

<style scoped></style>
