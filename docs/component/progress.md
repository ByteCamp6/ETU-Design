---
title: Progress
---

# Progress 进度条

用于展示操作进度，告知用户当前状态和预期。

## 直线进度条

Progress 组件设置 percentage 属性即可，表示进度条对应的百分比。 该属性必填，并且必须在 0-100 的范围内。

<preview path="../examples/progress/basic.vue" title="" description=""></preview>

## 进度条内显示百分比标识

百分比不占用额外控件，适用于文件上传等场景。

<preview path="../examples/progress/precent.vue" title="" description=""></preview>

## Progress 属性

| 属性名       | 说明                   | 类型    | 可选值                    | 默认值 |
| :----------- | :--------------------- | :------ | :------------------------ | :----- |
| percentage   | 百分比，必填           | number  | (0-100)                   | 0      |
| stroke-width | 进度条的宽度           | number  | —                         | 6      |
| status       | 进度条当前状态         | string  | success/exception/warning | -      |
| show-text    | 是否显示进度条文字内容 | boolean | -                         | true   |

## Progress 插槽

| 名称 | 说明           |
| :--- | :------------- |
| —    | 自定义默认内容 |
