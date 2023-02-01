# overlay 遮罩层组件

这是遮罩层组件

# API

| 键名 | 可选值 | 描述 |
| ---- | ---- | ---- |
| v-model | false , true | false为遮罩层消失,true为遮罩层显示 |

# demo
```vue
<template>
  <etu-button @click="changeState">遮罩层</etu-button>
  <etu-overlay v-model="isShow"></etu-overlay>
</template>

<script setup lang="ts">
import { ref } from "vue";

let isShow = ref(false);
function changeState() {
  isShow.value = !isShow.value;
}
</script>

<style scoped></style>

```

这里绑定了isShow ，然后通过操作isShow的值来决定遮罩层是否显示。

**另外遮罩层内置了点击遮罩层遮罩层消失的事件**

**遮罩层内部提供了插槽**