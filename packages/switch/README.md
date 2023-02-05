# Switch组件

| 参数名           | 可选值                                       | 描述                      |
|---------------|-------------------------------------------|-------------------------|
| bgColor       | crimson,limegreen,dodgerblue,mediumpurple | 设置背景色                   |
| size          | large,normal,small                        | 设置开关的大小尺寸               |
| activeValue   | 绑定值                                       | 开关为true时的值，不指定默认为true   |
| inactiveValue | 绑定值                                       | 开关为false时的值，不指定默认为false |
| disabled | true , false                              | 是否禁用,默认为false，不禁用       |
| @change= | 函数                                        |  绑定切换事件                                   |
| @dataVal | 函数 | 获取开关现在值 |
## demo

```
<template>
  <etu-switch
    id="cx"
    bgColor="crimson"
    activeValue="100"
    inactiveValue="0"
    @change="handleChange(100)"
    v-model="xx"
    size="normal"
    @dataVal="func"
  ></etu-switch>
</template>

<script setup lang="ts">
import { ref } from "vue";

const func = (v: any) => {
  console.log(v);
};

const xx = ref();
const handleChange = (row: any) => {
  console.log("这是个自定义事件");
};
</script>

<style scoped></style>



```