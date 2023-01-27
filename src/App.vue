<template>
  <Button></Button>
  <Divider></Divider>
  <Breadcrumb></Breadcrumb>
  <Icon></Icon>
  <Tag></Tag>
  <Checkbox></Checkbox>
  <Divider></Divider>
  <Radio></Radio>
  <Empty></Empty>
  <Message></Message>
  <Link />
  <Upload></Upload>
  <router-view></router-view>
</template>

<script setup lang="ts">
import Button from "./components/Button.vue";
import Divider from "./components/Divider.vue";
import Breadcrumb from "./components/breadcrumb.vue";
import Icon from "./components/Icon.vue";
import Link from "./components/Link.vue";
import Tag from "./components/Tag.vue";
import Checkbox from "./components/Checkbox.vue";
import Radio from "./components/Radio.vue";
import Empty from "./components/Empty.vue";
import Message from "./components/Message.vue";
import Upload from "./components/Upload.vue";
</script>

<style scoped></style>
