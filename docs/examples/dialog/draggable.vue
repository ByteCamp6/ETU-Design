<template>
  <etu-button @click="dialogVisible = true">打开dialog</etu-button>
  <etu-dialog v-model="dialogVisible" title="Tips" width="30%" draggable>
    <span
      >设置滚动锁定时，由于滚动条消失，页面的宽度会发生改变，我通过模拟计算修正了页面宽度，但是必须设置body的margin为0，否则会看到抖动的情况</span
    >
    <template #footer>
      <span class="dialog-footer">
        <etu-button @click="dialogVisible = false">Cancel</etu-button>
        <etu-button type="primary" @click="dialogVisible = false">
          Confirm
        </etu-button>
      </span>
    </template>
  </etu-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const dialogVisible = ref(false);
</script>
