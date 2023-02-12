<template>
  <Button></Button>
  <Divider></Divider>
  <Breadcrumb></Breadcrumb>
  <Icon></Icon>
  <router-view></router-view>
  <Tag type="success" round
    ><i class="etu-i-sorting"></i> 22222 <i class="etu-i-adjust"></i
  ></Tag>
  <br />
  <Layer></Layer>
</template>

<script setup lang="ts">
import Button from "./components/Button.vue";
import Divider from "./components/Divider.vue";
import Breadcrumb from "./components/breadcrumb.vue";
import Icon from "./components/Icon.vue";
import Tag from "../packages/tag/src/tag.vue";
import Layer from "./components/layer.vue";
</script>

<style scoped></style>
