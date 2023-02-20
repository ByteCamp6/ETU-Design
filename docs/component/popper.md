---
title: Popper
---

# Popper 气泡

常用于展示鼠标 click或hover时的提示信息。

## 基础用法

点击后触发气泡

使用 `content` 属性来决定提示信息。 由 `placement` 属性决定展示效果： `placement`属性值为：`[方向]-[对齐位置]`；四个方向：`top`、`left`、`right`、`bottom`；三种对齐位置：`start`, `end`，默认为空。 如 `placement="left-end"`，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。

`placement`也可也传入`auto`,`auto-left`,`auto-right`,`auto`将选择空间最大的一侧
<preview path="../examples/popper/basic.vue" title="" description=""></preview>

## hover时触发

使用`hover`属性来让气泡在hover时触发

<preview path="../examples/popper/hover.vue" title="" description=""></preview>

## 箭头

使用`arrow`属性来使用箭头

<preview path="../examples/popper/arrow.vue" title="" description=""></preview>

## 手动控制

使用`show`属性来手动控制popper

<preview path="../examples/popper/show.vue" title="" description=""></preview>

## popper属性

| 属性名           | 说明                                                    | 类型    | 可选值                                                       | 默认值 |
| :--------------- | :------------------------------------------------------ | :------ | :----------------------------------------------------------- | :----- |
| placement        | 出现位置                                                | string  | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end/auto/auto-start/auto-bottom | bottom |
| content          | 标题                                                    | string  | —                                                            | —      |
| disableClickAway | 禁用当用户单击窗口外部时自动关闭它                      | boolean | —                                                            | false  |
| hover            | 悬停时触发Popper                                        | boolean | —                                                            | false  |
| show             | 手动控制是否显示Popper                                  | boolean | —                                                            | false  |
| disabled         | 禁用Popper，已经打开的会被关闭                          | boolean | —                                                            | false  |
| openDelay        | 延迟（ms）后打开Popper                                  | number  | —                                                            | false  |
| closeDelay       | 延迟（ms）后关闭Popper                                  | number  | —                                                            | 200    |
| arrow            | 是否显示箭头                                            | boolean | —                                                            | false  |
| interactive      | Popper应该是交互式的，如果为false，则当单击悬停时将关闭 | boolean | —                                                            | true   |
| locked           | 是否会自动动态翻转                                      | boolean | —                                                            | false  |
| content          | 如果内容只是一个简单的字符串，它可以作为prop传入        | string  | —                                                            | —      |

## popper插槽

| 插槽名  | 说明                          |
| :------ | :---------------------------- |
| —       | Popover 内嵌 HTML 文本        |
| content | 触发 Popover 显示的 HTML 元素 |

## popper事件

| 事件名 | 说明       | 回调参数 |
| :----- | :--------- | :------- |
| open   | 显示时触发 | —        |
| close  | 关闭时触发 | —        |