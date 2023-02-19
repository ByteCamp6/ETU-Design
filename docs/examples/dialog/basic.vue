<template>
  <etu-button text @click="dialogVisible = true"> 点击打开对话框 </etu-button>

  <etu-dialog v-model="dialogVisible" title="Tips" width="30%">
    <span>这里是消息</span>
    <template #footer>
      <span class="dialog-footer">
        <etu-button @click="dialogVisible = false">取消</etu-button>
        <etu-button type="primary" @click="dialogVisible = false">
          确认
        </etu-button>
      </span>
    </template>
  </etu-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const dialogVisible = ref(false);
</script>
