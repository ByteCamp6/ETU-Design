---
title: Scrollbar
---

# Scrollbar 滚动条

用于替换浏览器原生滚动条。

## 基础用法

通过 height 属性设置滚动条高度，若不设置则根据父容器高度自适应。

<preview path="../examples/scrollbar/basic.vue" title="" description=""></preview>

## 横向滚动

当元素宽度大于滚动条宽度时，会显示横向滚动条。

<preview path="../examples/scrollbar/vertical.vue" title="" description=""></preview>

## 最大高度

当元素高度超过最大高度，才会显示滚动条。

<preview path="../examples/scrollbar/max-height.vue" title="" description=""></preview>

## Scrollbar 属性

| 属性名     | 说明           | 类型          | 可选值 | 默认值 |
| :--------- | :------------- | :------------ | :----- | :----- |
| height     | 滚动条高度     | string/number | -      | -      |
| max-height | 滚动条最大高度 | string/number | -      | -      |

## DatePicker 事件

| 事件名 | 说明                             | 类型       |
| :----- | :------------------------------- | :--------- |
| scroll | 当触发滚动事件时，返回滚动的距离 | `Function` |

## Scrollbar 插槽

| 名称 | 说明           |
| :--- | :------------- |
| —    | 自定义默认内容 |
