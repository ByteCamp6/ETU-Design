---
title: Layout
---

# 布局组件

通过基础的 24 分栏，迅速简便地创建布局。

## 基础用法
<preview path="../examples/layout/basic.vue" title="" description=""></preview>

## 分栏间隔
支持列间距。

行提供 gutter 属性来指定列之间的间距，其默认值为0。
<preview path="../examples/layout/gutter.vue" title="" description=""></preview>

## 混合布局
通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。
<preview path="../examples/layout/mixin.vue" title="" description=""></preview>

## 列偏移
您可以指定列偏移量。

通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数
<preview path="../examples/layout/offset.vue" title="" description=""></preview>

## 对齐方式
默认使用 flex 布局来对分栏进行灵活的对齐。

您可以通过justify 属性来定义子元素的排版方式，其取值为start、center、end、space-between、space-around或space-evenly。
<preview path="../examples/layout/flex.vue" title="" description=""></preview>

## Row API

| 属性名  | 说明                     | 类型   | 默认值 |
| ------- | :----------------------- | ------ | ------ |
| gutter  | 栅格间距                 | number | 0      |
| justify | flex布局下的水平排列方式 | enum   | start  |
| align   | flex布局下的垂直排列方式 | enum   | top    |



## Col API

| 属性名 | 说明               | 类型   | 默认值 |
| ------ | ------------------ | ------ | ------ |
| span   | 栅格占据的列数     | number | 24     |
| offset | 栅格左侧的间隔格数 | number | 0      |

