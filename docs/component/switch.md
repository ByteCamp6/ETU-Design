---
title: Switch
---

# Switch 标签

开关组件

## 基础用法

我们可以使用`bgColor`属性来设置背景色，默认是让人比较舒服的`dodgerblue`色。

<preview path="../examples/switch/bgColor.vue" title="" description=""></preview>

我们可以使用`size`属性来指定开关的尺寸，我们提供了`large`,`normal`和`small`三种可选值。

<preview path="../examples/switch/size.vue" title="" description=""></preview>

我们可以使用`v-model`为他绑定一个布尔值，后续点击开关切换状态就可以完成布尔值的切换。

<preview path="../examples/switch/vmodel.vue" title="" description=""></preview>

我们也可以通过`activeValue`和`inactiveValue`自定义两种不同的状态对应值,同时让`v-model`的值为其中一个。

<preview path="../examples/switch/differentVal.vue" title="" description=""></preview>

## Drawer属性


| 参数名           | 可选值                                       | 描述                      |
|---------------|-------------------------------------------|-------------------------|
| bgColor       | crimson,limegreen,dodgerblue,mediumpurple | 设置背景色                   |
| size          | large,normal,small                        | 设置开关的大小尺寸               |
| activeValue   | 绑定值                                       | 开关为true时的值，不指定默认为true   |
| inactiveValue | 绑定值                                       | 开关为false时的值，不指定默认为false |
| disabled | true , false                              | 是否禁用,默认为false，不禁用       |
| @change= | 函数                                        |  绑定切换事件                                   |
| @dataVal | 函数 | 获取开关现在值 |

同时内部还提供了插槽，可以向抽屉内部加入一些东西。

抽屉打开之后，点击抽屉之外的遮罩层会让抽屉收回，遮罩层消失，也可以点击抽屉上的x标志，关闭抽屉。

## Drawer插槽

| 名称    | 说明           |
|:------|:-------------|
| Title | 自定义的标题       |
| - | 自定义任意content |