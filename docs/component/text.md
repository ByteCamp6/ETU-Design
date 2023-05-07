---
title: Text
---

# Text 标签

用于虚拟树形控件

## 基础用法

由 `type` 属性来选择 Text 的类型。


<preview path="../examples/text/basic.vue" title="" description=""></preview>

## 尺寸

使用 `size` 属性配置尺寸，可选的尺寸大小有: `large`, `default` 或 `small`


<preview path="../examples/text/size.vue" title="" description=""></preview>

## 覆盖

使用属性 `tag` 覆盖元素

<preview path="../examples/text/tag.vue" title="" description=""></preview>

## 省略

通过 `truncated` 属性，在文本超过视图或最大宽度设置时展示省略符。

<preview path="../examples/text/truncated.vue" title="" description=""></preview>

| 属性名      | 值                                            | 描述                            |
|----------|----------------------------------------------|-------------------------------|
| type   | default,primary,Info,danger,warnning,rainbow | 默认为default                    |
| size | large, default 或 small                       | 分别对应大中小，默认为default            |
| tag   | p,b.i.span.div.mark,sub,sup,del,ins          | 覆盖元素的html标签                   |
| truncated   | true,false                                   | 在文本超过视图或最大宽度设置时展示省略符。默认为false |