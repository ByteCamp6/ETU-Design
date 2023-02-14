<template>
  <button @click="test">Message</button>
  <button @click="EtuMessage.closeAll()">close</button>
</template>

<script lang="ts" setup>
import EtuMessage from "@etu-design/message";

const test = () => {
  const types = ["info", "success", "warning", "error"];
  types.forEach((each) => {
    EtuMessage[each]({
      message: `This is a ${each}`,
      showClose: true,
    });
  });
};
</script>
