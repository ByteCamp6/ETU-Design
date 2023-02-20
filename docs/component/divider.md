---
title: Divider
---

# Divider 分割线

区隔内容的分割线。

## 基础用法

对不同段落的文本进行分割。

<preview path="../examples/divider/basic.vue" title="" description=""></preview>

## 设置文案

通过设置 separator-class 可使用相应的 iconfont 作为分隔符，注意这将使 separator 失效。

<preview path="../examples/divider/text-type.vue" title="" description=""></preview>

## 虚线

您可以设置分隔符的样式。

<preview path="../examples/divider/dotted.vue" title="" description=""></preview>

## 垂直分隔线

<preview path="../examples/divider/vertical.vue" title="" description=""></preview>

## Divider 属性

| 属性名           | 说明                   | 类型   | 可选值                       | 默认值     |
| :--------------- | :--------------------- | :----- | :--------------------------- | :--------- |
| direction        | 设置分割线方向         | string | horizontal/vertical          | horizontal |
| border-style     | 设置分隔符样式         | string | none/solid/hidden/dashed/... | solid      |
| content-position | 自定义分隔线内容的位置 | string | left/center/right            | center     |

## Divider 插槽

| 名称 | 说明           |
| :--- | :------------- |
| —    | 自定义默认内容 |
