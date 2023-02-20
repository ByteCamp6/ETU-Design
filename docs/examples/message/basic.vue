<template>
  <etu-button @click="open">点击展示message</etu-button>
</template>

<script setup lang="ts">
import EtuMessage from "@etu-design/message";

const open = () => {
  EtuMessage("33333");
};
</script>
