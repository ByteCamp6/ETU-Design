<template>
  <ul @mousedown="onMousedown">
    <slot />
  </ul>
</template>

<script setup lang="ts" name="EtuDropdownMenu">
import EtuPopper from "@etu-design/popper/index";
const onMousedown = function () {
  console.log("onMousedown");
};
</script>
<style lang="scss" scoped></style>
