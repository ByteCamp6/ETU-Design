# drawer组件

这是抽屉组件，可以拉出一个抽屉的效果。

# API

| 键名称 | 可选值                | 描述                                      |
| ---- |--------------------|-----------------------------------------|
| bgColor | white , dodgerblue | 对应两种背景色                                 |
| v-model="" | true               | 绑定布尔值，接下来操作布尔值的值,true时为抽屉打开,false时为抽屉关闭 |
| direction    | Up,Down,Left,Right | 分别对应抽屉的位置，上下左右，默认为Right                 |
| Tittle | string | 输入一段自定义的标题 |

同时内部还提供了插槽，可以向抽屉内部加入一些东西。

抽屉打开之后，点击抽屉之外的遮罩层会让抽屉收回，遮罩层消失，也可以点击抽屉上的x标志，关闭抽屉。

# demo

```

<template>
  <etu-drawer direction="Left" v-model="valLeft" Tittle="自定义标题">
    这是一段很长的故事......
  </etu-drawer>
  <etu-drawer direction="Right" v-model="valRight"></etu-drawer>
  <etu-drawer direction="Up" v-model="valUp"></etu-drawer>
  <etu-drawer direction="Down" v-model="valDown"></etu-drawer>
  <etu-button @click="LeftShow">左抽屉</etu-button>
  <etu-button @click="RightShow">右抽屉</etu-button>
  <etu-button @click="UpShow">上抽屉</etu-button>
  <etu-button @click="DownShow">下抽屉</etu-button>
</template>

<script setup lang="ts">
import { ref } from "vue";

let valLeft = ref(false);
let valRight = ref(false);
let valUp = ref(false);
let valDown = ref(false);
function LeftShow() {
  valLeft.value = !valLeft.value;
  console.log("左抽屉");
}
function RightShow() {
  valRight.value = !valRight.value;
  console.log("右抽屉");
}
function UpShow() {
  valUp.value = !valUp.value;
  console.log("上抽屉");
}
function DownShow() {
  valDown.value = !valDown.value;
  console.log("下抽屉");
}
</script>

<style scoped></style>


```