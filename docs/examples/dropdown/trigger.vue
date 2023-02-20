<template>
  <etu-dropdown :arrowDown="false">
    <etu-button type="primary" @click="handleClick">Dropdown List</etu-button>

    <template #dropdown>
      <etu-dropdown-menu>
        <etu-dropdown-item>选项1</etu-dropdown-item>
        <etu-dropdown-item>选项2</etu-dropdown-item>
        <etu-dropdown-item>选项3</etu-dropdown-item>
        <etu-dropdown-item>选项4</etu-dropdown-item>
        <etu-dropdown-item>选项5</etu-dropdown-item>
        <etu-dropdown-item>选项6</etu-dropdown-item>
        <etu-dropdown-item>选项7</etu-dropdown-item>
        <etu-dropdown-item divided>选项8</etu-dropdown-item>
      </etu-dropdown-menu>
    </template>
  </etu-dropdown>
  <etu-dropdown split-button type="primary" @click="handleClick">
    Dropdown List
    <template #dropdown>
      <etu-dropdown-menu>
        <etu-dropdown-item>选项1</etu-dropdown-item>
        <etu-dropdown-item>选项2</etu-dropdown-item>
        <etu-dropdown-item>选项3</etu-dropdown-item>
        <etu-dropdown-item>选项4</etu-dropdown-item>
        <etu-dropdown-item>选项5</etu-dropdown-item>
        <etu-dropdown-item>选项6</etu-dropdown-item>
        <etu-dropdown-item>选项7</etu-dropdown-item>
        <etu-dropdown-item divided>选项8</etu-dropdown-item>
      </etu-dropdown-menu>
    </template>
  </etu-dropdown>
</template>

<script setup lang="ts">
const handleClick = () => {
  // eslint-disable-next-line no-alert
  alert("button click");
};
</script>
