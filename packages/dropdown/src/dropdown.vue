<template>
  <etu-popper arrow hover>
    <slot></slot>

    <template #content>
      <etu-scrollbar>
        <slot name="dropdown" />
      </etu-scrollbar>
    </template>
  </etu-popper>
</template>

<script setup lang="ts" name="EtuDropdown">
import EtuPopper from "@etu-design/popper/index";
</script>
<style lang="scss" scoped>
.scrollbar-flex-content {
  display: flex;
}
.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
}
</style>
