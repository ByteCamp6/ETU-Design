---
title: Switch
---

# Switch 开关

表示两种相互对立的状态间的切换。

## 基础用法

我们可以直接使用，或者使用`v-model`为他绑定一个布尔值，后续点击开关切换状态就可以完成布尔值的切换。

<preview path="../examples/switch/basic.vue" title="" description=""></preview>

## 背景颜色

我们可以使用`bgColor`属性来设置背景色，默认是让人比较舒服的`dodgerblue`色。

<preview path="../examples/switch/bgColor.vue" title="" description=""></preview>

## 大小

我们可以使用`size`属性来指定开关的尺寸，我们提供了`large`,`normal`和`small`三种可选值。

<preview path="../examples/switch/size.vue" title="" description=""></preview>

## 更多的值

我们也可以通过`activeValue`和`inactiveValue`自定义两种不同的状态对应值,同时让`v-model`的值为其中一个。

<preview path="../examples/switch/differentVal.vue" title="" description=""></preview>

## 禁用

设置`disabled`属性来禁用`switch`

<preview path="../examples/switch/disabled.vue" title="" description=""></preview>

## Drawer 属性

| 参数名        | 可选值                                    | 描述                                    |
| ------------- | ----------------------------------------- | --------------------------------------- |
| bgColor       | crimson,limegreen,dodgerblue,mediumpurple | 设置背景色                              |
| size          | large,normal,small                        | 设置开关的大小尺寸                      |
| activeValue   | 绑定值                                    | 开关为 true 时的值，不指定默认为 true   |
| inactiveValue | 绑定值                                    | 开关为 false 时的值，不指定默认为 false |
| disabled      | true , false                              | 是否禁用,默认为 false，不禁用           |

## Drawer 事件

| 事件名 | 说明                            | 回调参数 |
| ------ | ------------------------------- | -------- |
| change | switch 状态发生变化时的回调函数 | val      |

## Drawer 插槽

| 名称  | 说明               |
| :---- | :----------------- |
| Title | 自定义的标题       |
| -     | 自定义任意 content |

<style>
.ml-2 {
  margin-left: 0.5rem;
}
</style>
