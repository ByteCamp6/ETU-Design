<template>
  <etu-button @click="open1">success</etu-button>
  <etu-button @click="open2">warning</etu-button>
  <etu-button @click="open3">message</etu-button>
  <etu-button @click="open4">error</etu-button>
</template>

<script lang="ts" setup>
import EtuMessage from "@etu-design/message";

const open1 = () => {
  EtuMessage({
    type: "success",
    message: "这是一条可关闭的success消息",
    showClose: true,
  });
};

const open2 = () => {
  EtuMessage({
    type: "warning",
    message: "这是一条可关闭的warning消息",
    showClose: true,
  });
};

const open3 = () => {
  EtuMessage({
    message: "这是一条可关闭的message消息",
    showClose: true,
  });
};

const open4 = () => {
  EtuMessage({
    type: "error",
    message: "这是一条可关闭的error消息",
    showClose: true,
  });
};
</script>
