---
title: Menu
---

# Menu 组件

用于菜单栏的使用

## 基础用法

我们使用`<etu-MenuGroup></etu-MenuGroup>`和`<etu-MenuItem></etu-MenuItem>`来使用菜单组件，将`<etu-MenuItem></etu-MenuItem>`放入`<etu-MenuGroup></etu-MenuGroup>`内部。

## 菜单位置

我们通过`mode`,我们提供了`horizontal`和`vertical`两种可选值，默认为`vertical`。分别对应横向菜单和竖向菜单，默认是竖向菜单

### 横向菜单

<preview path="../examples/menu/basic.vue" title="" description=""></preview>

### 竖向菜单

<preview path="../examples/menu/mode.vue" title="" description=""></preview>

## 背景色和字体色

我们可以设置`bgColor`和`textColor`分别组合背景色和字体色。我们提供了常见的颜色`crimson` , `dodgerblue` , `limegreen` , `grey` , `darkorange` , `black` , `white` , inherit ,lightslategrey

当然也可以直接覆盖我们样式中的属性。

<preview path="../examples/menu/colors.vue" title="" description=""></preview>

## 菜单禁用

我们可以设置`disabled`属性来决定是否禁用部分菜单，我们提供了`true`和`false`两种可供选择。

<preview path="../examples/menu/disabled.vue" title="" description=""></preview>

## 其他

我们的菜单也可以结合其他组件进行使用，比如下拉菜单。