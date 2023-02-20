<template>
  <etu-dropdown split-button size="large" class="d-1">
    Dropdown List
    <template #dropdown>
      <etu-dropdown-menu>
        <etu-dropdown-item>选项1</etu-dropdown-item>
        <etu-dropdown-item>选项2</etu-dropdown-item>
      </etu-dropdown-menu>
    </template>
  </etu-dropdown>
  <etu-dropdown split-button size="default" class="d-1">
    Dropdown List
    <template #dropdown>
      <etu-dropdown-menu>
        <etu-dropdown-item>选项1</etu-dropdown-item>
        <etu-dropdown-item>选项2</etu-dropdown-item>
      </etu-dropdown-menu>
    </template>
  </etu-dropdown>
  <etu-dropdown split-button size="small" class="d-1">
    Dropdown List
    <template #dropdown>
      <etu-dropdown-menu>
        <etu-dropdown-item>选项1</etu-dropdown-item>
        <etu-dropdown-item>选项2</etu-dropdown-item>
      </etu-dropdown-menu>
    </template>
  </etu-dropdown>
</template>

<script setup lang="ts"></script>
<style scoped>
.d-1 {
  margin-right: 30px;
}
</style>
