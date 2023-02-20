---
title: Avatar
---

# Avatar 头像

Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。

## 基础用法

使用 shape 和 size 属性来设置 Avatar 的形状和大小。

<preview path="../examples/avatar/basic.vue" title="" description=""></preview>

## 展示类型

支持使用图片，图标或者文字作为 Avatar。

<preview path="../examples/avatar/type.vue" title="" description=""></preview>

## 适应容器

当使用图片作为用户头像时，设置该图片如何在容器中展示。与 object-fit 属性一致

<preview path="../examples/avatar/contain.vue" title="" description=""></preview>

## Avatar 属性

| 属性名 | 说明                                         | 类型   | 可选值                             | 默认值 |
| :----- | :------------------------------------------- | :----- | :--------------------------------- | :----- |
| icon   | 设置 Avatar 的图标类型，具体参考 Icon 组件   | string | —                                  | —      |
| size   | Avatar 大小                                  | number | —                                  | 40     |
| shape  | Avatar 形状                                  | num    | cicrle/square                      | circle |
| src    | Avatar 图片的源地址                          | string | —                                  | —      |
| fit    | 当展示类型为图片的时候，设置图片如何适应容器 | enum   | cover/contain/fill/none/scale-down | cover  |

## Avatar 事件

| 事件名 | 说明               | 参数 |
| :----- | :----------------- | :--- |
| error  | 图片加载失败时触发 | —    |

## Avatar 插槽

| 名称 | 说明           |
| :--- | :------------- |
| —    | 自定义默认内容 |
