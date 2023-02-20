---
title: Dropdown
---

# Dropdown 下拉菜单

将动作或菜单折叠到下拉菜单中。

## 基础用法

悬停在下拉菜单上以展开更多操作。

通过组件 slot 来设置下拉触发的元素以及需要通过具名 slot 为 dropdown 来设置下拉菜单。 默认情况下，只需要悬停在触发菜单的元素上即可，无需点击也会显示下拉菜单。

<preview path="../examples/dropdown/basic.vue" title="" description=""></preview>

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

## Tag 属性

| 属性名   | 说明           | 类型    | 可选值                      | 默认值  |
| :------- | :------------- | :------ | :-------------------------- | :------ |
| type     | 类型           | string  | success/info/warning/danger | —       |
| closable | 是否可关闭     | boolean | —                           | false   |
| size     | 尺寸           | string  | large / default /small      | default |
| effect   | 主题           | string  | dark / light / plain        | light   |
| round    | Tag 是否为圆形 | boolean | —                           | false   |

## Tag 事件

| 事件名 | 说明                  | 参数 |
| :----- | :-------------------- | :--- |
| click  | 点击 Tag 时触发的事件 | —    |
| close  | 关闭 Tag 时触发的事件 | —    |

## Tag 插槽

| 名称 | 说明           |
| :--- | :------------- |
| —    | 自定义默认内容 |
