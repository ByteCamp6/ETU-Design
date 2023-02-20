<template>
  <etu-dropdown
    @command="command"
    split-button
    size="small"
    type="primary"
    @click="handleClick"
    trigger="hover"
  >
    下拉菜单

    <template #dropdown>
      <etu-dropdown-menu>
        <etu-dropdown-item disabled>选项1</etu-dropdown-item>
        <etu-dropdown-item divided>选项2</etu-dropdown-item>
        <etu-dropdown-item :command="2">选项3</etu-dropdown-item>
        <etu-dropdown-item command="2">选项4</etu-dropdown-item>
        <etu-dropdown-item>选项5</etu-dropdown-item>
        <etu-dropdown-item>选项6</etu-dropdown-item>
        <etu-dropdown-item>选项7</etu-dropdown-item>
        <etu-dropdown-item>选项8</etu-dropdown-item>
      </etu-dropdown-menu>
    </template>
  </etu-dropdown>
</template>

<script setup lang="ts">
const command = (command) => {
  console.log(command);
  alert(`下拉菜单点击事件`);
};
const handleClick = () => {
  alert("触发button");
};
</script>

<style lang="scss" scoped></style>
