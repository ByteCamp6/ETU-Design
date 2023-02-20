---
title: Breadcrumb
---

# Breadcrumb 面包屑

显示当前页面的路径，快速返回之前的任意页面。

## 基础用法

在 etu-breadcrumb 中使用 etu-breadcrumb-item 标签表示从首页开始的每一级。 该组件接受一个 String 类型的参数 separator 来作为分隔符。 默认值为 '/'。

<preview path="../examples/breadcrumb/basic.vue" title="" description=""></preview>

## 图标分隔符

通过设置 separator-class 可使用相应的 iconfont 作为分隔符，注意这将使 separator 失效。

<preview path="../examples/breadcrumb/separator.vue" title="" description=""></preview>

## Breadcrumb 属性

| 属性名    | 说明   | 类型   | 可选值 | 默认值 |
| :-------- | :----- | :----- | :----- | :----- |
| separator | 分隔符 | string | —      | —      |

## Breadcrumb 插槽

| 名称 | 说明           |
| :--- | :------------- |
| —    | 自定义默认内容 |

## BreadcrumbItem 属性

| 属性名 | 说明                                   | 类型          | 可选值 | 默认值 |
| :----- | :------------------------------------- | :------------ | :----- | :----- |
| to     | 路由跳转目标，同 vue-router 的 to 属性 | string/object | —      | ''     |

## BreadcrumbItem 插槽

| 名称 | 说明           |
| :--- | :------------- |
| —    | 自定义默认内容 |
