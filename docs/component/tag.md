---
title: Tag
---

# Tag 标签

用于标记和选择。

## 基础用法

由 `type` 属性来选择 tag 的类型。

<preview path="../examples/tag/basic.vue" title="" description=""></preview>

## 可移除标签

设置 `closable` 属性可以定义一个标签是否可移除。 它接受一个 `Boolean` , 当 Tag 被移除时会触发 `close` 事件

:::preview title

demo-preview=../examples/tag/removeable.vue

:::

## 不同尺寸

使用 `size` 属性来设置额外尺寸, 可选值包括 `large`, `default` 或 `small`.

<preview path="../examples/tag/size.vue" title="" description=""></preview>

## 主题

Tag 组件提供了三个不同的主题：`dark`、`light` 和 `plain`

通过设置 `effect` 属性来改变主题，默认为 `light`

<preview path="../examples/tag/theme.vue" title="" description=""></preview>

## 圆形标签

变为完全圆形,使用`round`设置

<preview path="../examples/tag/round.vue" title="" description=""></preview>


## Tag属性


| 属性名   | 说明           | 类型    | 可选值                      | 默认值  |
| :------- | :------------- | :------ | :-------------------------- | :------ |
| type     | 类型           | string  | success/info/warning/danger | —       |
| closable | 是否可关闭     | boolean | —                           | false   |
| size     | 尺寸           | string  | large / default /small      | default |
| effect   | 主题           | string  | dark / light / plain        | light   |
| round    | Tag 是否为圆形 | boolean | —                           | false   |

## Tag事件

| 事件名 | 说明                  | 参数 |
| :----- | :-------------------- | :--- |
| click  | 点击 Tag 时触发的事件 | —    |
| close  | 关闭 Tag 时触发的事件 | —    |

## Tag插槽

| 名称 | 说明           |
| :--- | :------------- |
| —    | 自定义默认内容 |