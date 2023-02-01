<template>
  <Collapse></Collapse>
  <!-- <Progress></Progress> -->
  <!-- <Button></Button>
  <Divider></Divider>
  <Breadcrumb></Breadcrumb>
  <Icon></Icon>
  <Tag></Tag>
  <Select></Select>
  <Tag></Tag>
  <Checkbox></Checkbox>
  <Divider></Divider>
  <Radio></Radio>
  <Empty></Empty>
  <Message></Message>
  <Link />
  <Upload></Upload> -->
  <router-view></router-view>
</template>

<script setup lang="ts">
import Button from "./components/Button.vue";
import Divider from "./components/Divider.vue";
import Breadcrumb from "./components/Breadcrumb.vue";
import Icon from "./components/Icon.vue";
import Link from "./components/Link.vue";
import Tag from "./components/Tag.vue";
import Select from "./components/Select.vue";
import Checkbox from "./components/Checkbox.vue";
import Radio from "./components/Radio.vue";
import Progress from "./components/Progress.vue";
// import Empty from "./components/Empty.vue";
// import Message from "./components/Message.vue";
import Upload from "./components/Upload.vue";
import Switch from "./components/Switch.vue";
import Collapse from "./components/Collapse.vue";
</script>

<style scoped></style>
