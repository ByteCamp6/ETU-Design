---
title: Button
---

# Button 标签

用于按钮

## 基础用法

由 `type` 属性来选择 Button 的类型。

| 属性名       | 值                                            | 描述                              |
|-----------|----------------------------------------------|---------------------------------|
| type      | default,primary,Info,danger,warnning,rainbow | 分别对应默认，主要按钮，灰色按钮，危险按钮，警告按钮,彩虹按钮 |
| Hollow    | solid,Hollow                                 | 实心，空心, 默认实心                     |
| Curvature | Microcurvature , curved                      | 微曲和大曲度，默认微曲                     |
| circle    | true , false | 指定按钮是否为圆，默认false |
| size      | large , normal , small | 按钮尺寸的大中小，默认是normal |
| disabled  | true , false | 按钮状态是否禁用，默认为false,不禁用 |

## Button事件

| 事件名 | 说明               | 参数 |
| :----- |:-----------------| :--- |
| click  | 点击 Button 时触发的事件 | —    |

## Tag插槽

| 名称 | 说明           |
| :--- | :------------- |
| —    | 自定义默认内容 |