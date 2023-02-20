<template>
  <etu-MenuGroup mode="horizontal">
    <etu-MenuItem @click="fun_1"> 首页 </etu-MenuItem>
    <etu-MenuItem> 菜单 </etu-MenuItem>
    <etu-MenuItem> 我的 </etu-MenuItem>
    <etu-MenuItem> 聊天 </etu-MenuItem>
    <etu-MenuItem> 其他 </etu-MenuItem>
  </etu-MenuGroup>
</template>
<script setup lang="ts">
function fun_1(): void {
  console.log("fun1");
}
</script>

<style scoped></style>
