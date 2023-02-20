<template>
  <etu-dropdown @command="handleCommandClick">
    Dropdown List
    <template #dropdown>
      <etu-dropdown-menu>
        <etu-dropdown-item command="1">选项1</etu-dropdown-item>
        <etu-dropdown-item command="2">选项2</etu-dropdown-item>
        <etu-dropdown-item command="3">选项3</etu-dropdown-item>
        <etu-dropdown-item command="4">选项4</etu-dropdown-item>
        <etu-dropdown-item command="5">选项5</etu-dropdown-item>
        <etu-dropdown-item command="6">选项6</etu-dropdown-item>
        <etu-dropdown-item command="7">选项7</etu-dropdown-item>
      </etu-dropdown-menu>
    </template>
  </etu-dropdown>
</template>

<script setup lang="ts">
import EtuMessage from "@etu-design/message";
const handleCommandClick = (command: string | number | object) => {
  // eslint-disable-next-line no-alert
  EtuMessage(`click on item ${command}`);
};
</script>
