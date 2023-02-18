---
title: Button
---

# Button 标签

用于按钮

## 基础用法

由 `type` 属性来选择 Button 的类型。我们可以指定`type=""`来指定`type`的类型，我们内置了`default`,`primary`,`success`,`warning`,`Info`,`rainbow`,`danger`不同的属性。

<preview path="../examples/button/type.vue" title="" description=""></preview>

由 `Hollow`属性来决定按钮是由实到虚，还是由虚到实，提供了两个值供选择:`solid`和`Hollow`,分别对应实心，空心, 默认实心。

<preview path="../examples/button/Hollow.vue" title="" description=""></preview>


由 `Curvature`属性来决定按钮边框曲度大小，提供了两个值供选择:`Microcurvature`和`curved`,分别对应微曲和大曲度，默认微曲。

<preview path="../examples/button/curvature.vue" title="" description=""></preview>

由`circle`属性决定按钮是否为圆形，提供了两个值供选择`true`,`false`。默认为`false`。

<preview path="../examples/button/iscircle.vue" title="" description=""></preview>

由`size`属性来决定按钮尺寸大小，提供了`small`,`normal`,`large`三个选项，默认为`normal`。

<preview path="../examples/button/size.vue" title="" description=""></preview>

由`disabled`属性决定按钮是否被禁用，提供了两个值供选择`true`,`false`。默认为`false`。

<preview path="../examples/button/disabled.vue" title="" description=""></preview>

| 属性名       | 值                                            | 描述                             |
|-----------|----------------------------------------------|--------------------------------|
| type      | default,primary,Info,danger,warnning,rainbow | 分别对应默认，主要按钮，灰色按钮，危险按钮，警告按钮,彩虹按钮 |
| Hollow    | solid,Hollow                                 | 由实到虚，还是由虚到实 ，默认由实到虚            |
| Curvature | Microcurvature , curved                      | 微曲和大曲度，默认微曲                    |
| circle    | true , false | 指定按钮是否为圆，默认false               |
| size      | large , normal , small | 按钮尺寸的大中小，默认是normal             |
| disabled  | true , false | 按钮状态是否禁用，默认为false,不禁用          |

## Button事件

<preview path="../examples/button/clickFun.vue" title="" description=""></preview>

| 事件名 | 说明               | 参数 |
| :----- |:-----------------| :--- |
| click  | 点击 Button 时触发的事件 | —    |

## Tag插槽

<preview path="../examples/button/slotDemo.vue" title="" description=""></preview>

| 名称 | 说明           |
| :--- | :------------- |
| —    | 自定义默认内容 |