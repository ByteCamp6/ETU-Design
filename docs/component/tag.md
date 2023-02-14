---
title: Tag
---

# Tag 标签

用于标记和选择。

## 基础用法

由 `type` 属性来选择 tag 的类型。

<preview path="../examples/tag/basic.vue" title="" description=""></preview>

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