---
title: Drawer
---

# Drawer 标签

用于抽屉

## 基础用法

由 `direction` 属性来选择 Drawer 的展开方向。

<preview path="../examples/Drawer.vue" title="" description=""></preview>

## Drawer属性


| 键名称 | 可选值                | 描述                                      |
| ---- |--------------------|-----------------------------------------|
| bgColor | white , dodgerblue | 对应两种背景色                                 |
| v-model="" | true  , false      | 绑定布尔值，接下来操作布尔值的值,true时为抽屉打开,false时为抽屉关闭 |
| direction    | Up,Down,Left,Right | 分别对应抽屉的位置，上下左右，默认为Right                 |

同时内部还提供了插槽，可以向抽屉内部加入一些东西。

抽屉打开之后，点击抽屉之外的遮罩层会让抽屉收回，遮罩层消失，也可以点击抽屉上的x标志，关闭抽屉。

## Tag插槽

| 名称    | 说明           |
|:------|:-------------|
| Title | 自定义的标题       |
| - | 自定义任意content |