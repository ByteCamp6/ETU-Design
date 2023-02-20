---
title: Link
---

# Link 链接

文字超链接

## 基础用法

基础的文字链接用法
:::preview title

demo-preview=../examples/link/basic.vue

:::

## 禁用状态

文字链接不可用状态

:::preview title

demo-preview=../examples/link/disabled.vue

:::

## 下划线

文字链接下划线。

:::preview title

demo-preview=../examples/link/undline.vue

:::

## 图标

带图标的链接

:::preview title

demo-preview=../examples/link/iconLink.vue

:::

## Link API

| 属性名    | 说明           | 类型    | 可选值                      | 默认值 |
| --------- | :------------- | ------- | --------------------------- | ------ |
| type      | 类型           | string  | success/info/warning/danger | —      |
| underline | 是否下划线     | boolean | —                           | true   |
| disabled  | 是否禁用状态   | boolean | —                           | false  |
| href      | 原生 href 属性 | string  | —                           | —      |
| icon      | 图标组件       | string  | —                           | —      |

## 插槽

| 插槽名  | 说明           |
| ------- | :------------- |
| default | 自定义默认内容 |
| icon    | 自定义图标组件 |
