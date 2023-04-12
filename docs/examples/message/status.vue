<template>
  <etu-button @click="open1">success</etu-button>
  <etu-button @click="open2">warning</etu-button>
  <etu-button @click="open3">message</etu-button>
  <etu-button @click="open4">error</etu-button>
</template>

<script lang="ts" setup>
import EtuMessage from "@etu-design/components/message";

const open1 = () => {
  EtuMessage.success("这是一条success消息");
};

const open2 = () => {
  EtuMessage.warning("这是一条warning消息");
};

const open3 = () => {
  EtuMessage("这是一条message消息");
};

const open4 = () => {
  EtuMessage.error("这是一条error消息");
};
</script>
