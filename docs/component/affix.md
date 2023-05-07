---
title: Avatar
---

# Affix 固钉

# 基础用法

我们使用`<etu-affix></etu-affix>`来使用固钉。

<preview path="../examples/affix/basic.vue" title="" description=""></preview>

# 吸顶距离

通过设置 `offset` 属性来改变吸顶距离，默认值为 0。

<preview path="../examples/affix/offset.vue" title="" description=""></preview>

# 固钉位置

Affix 组件提供 4 个固定的位置参数 `top` , `bottom` ,`left` , `right`。

通过设置 `position` 属性来改变固定位置，默认值为 `top` 

<preview path="../examples/affix/position.vue" title="" description=""></preview>

# 固钉容器

通过设置 `target` 属性，让固钉始终保持在容器内， 超过范围则隐藏，默认是处于body中。

请注意容器避免出现滚动条。

<preview path="../examples/affix/target.vue" title="" description=""></preview>

# API

| 属性名      | 值                       | 描述                    |
|----------|-------------------------|-----------------------|
| offset   | Number                  | 改变吸顶距离，默认值为 0         |
| position | top , bottom ,left , right                      | 改变固定位置，默认值为 `top`     |
| zIndex   | Number | 改变其z-index属性          |