# Switch组件

| 参数名           | 可选值                                       | 描述                      |
|---------------|-------------------------------------------|-------------------------|
| bgColor       | crimson,limegreen,dodgerblue,mediumpurple | 设置背景色                   |
| size          | large,normal,small                        | 设置开关的大小尺寸               |
| activeValue   | 绑定值                                       | 开关为true时的值，不指定默认为true   |
| inactiveValue | 绑定值                                       | 开关为false时的值，不指定默认为false |
| disabled | true , false                              | 是否禁用,默认为false，不禁用       |
| @change= | 函数                                        |  绑定切换事件                                   |

## demo

```
<template>
  <etu-switch
    bgColor="crimson"
    :modelValue="r"
    activeValue="100"
    inactiveValue="0"
    @change="handleChange(true)"
    disabled="true"
    size="normal"
  ></etu-switch>
</template>

<script setup lang="ts">
import { ref } from "vue";

let r = ref(100);

const handleChange = (row: any) => {
  console.log(row);
  console.log(333);
};
</script>

<style scoped></style>


```