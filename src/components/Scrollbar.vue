<template>
  <etu-scrollbar :height="400">
    <div
      v-for="item in 20"
      :key="item"
      style="height: 80px; margin: 12px; margin-top: 5px; background: blue"
    ></div>
  </etu-scrollbar>
  <br />
  <etu-scrollbar style="display: flex">
    <div class="scrollbar-flex-content">
      <p v-for="item in 50" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </p>
    </div>
  </etu-scrollbar>
</template>

<script setup lang="ts"></script>

<style lang="scss">
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
