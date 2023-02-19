---
title: Pagination
---

# Pagination 分页

当数据量过多时，使用分页分解数据。

## 基础用法

设置`layout`，表示需要显示的内容，用逗号分隔，布局元素会依次显示。 `prev`表示上一页，`next`为下一页，`pager`表示页码列表，除此以外还提供了`jumper`，`total`和`size`

<preview path="../examples/pagination/basic.vue" title="" description=""></preview>

## 当只有一页时隐藏分页

当只有一页时，通过设置 `hide-on-single-page` 属性来隐藏分页

<preview path="../examples/pagination/one.vue" title="" description=""></preview>

## 附加功能

根据场景需要，可以添加其他功能模块。

此示例是一个完整的用例。 使用了 `size-change` 和 `current-change` 事件来处理页码大小和当前页变动时候触发的事件。 `page-sizes`接受一个整数类型的数组，数组元素为展示的选择每页显示个数的选项，`[100, 200, 300, 400]` 表示四个选项，每页显示 100 个，200 个，300 个或者 400 个。

<preview path="../examples/pagination/other.vue" title="" description=""></preview>

## Pagination属性

| 属性名                              | 说明                                                         | 类型                   | 默认值                               |
| :---------------------------------- | :----------------------------------------------------------- | :--------------------- | :----------------------------------- |
| page-size / v-model:page-size       | 每页显示条目个数                                             | `number`               | 10                                   |
| default-page-size                   | 每页显示条目数的初始值                                       | `number`               | -                                    |
| total                               | 总条目数                                                     | `number`               | —                                    |
| page-count                          | 总页数， `total` 和 `page-count` 设置任意一个就可以达到显示页码的功能；如果要支持 `page-sizes` 的更改，则需要使用 `total` 属性 | `number`               | —                                    |
| pager-count                         | 设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠 | `number`               | 7                                    |
| current-page / v-model:current-page | 当前页数                                                     | `number`               | 1                                    |
| default-current-page                | 当前页数的初始值                                             | `number`               | -                                    |
| layout                              | 组件布局，子组件名用逗号分隔                                 | `string`               | prev, pager, next, jumper, ->, total |
| page-sizes                          | 每页显示个数选择器的选项设置                                 | `array`                | [10, 20, 30, 40, 50, 100]            |
| popper-class                        | 每页显示个数选择器的下拉框类名                               | `string`               | —                                    |
| prev-text                           | 替代图标显示的上一页文字                                     | `string`               | —                                    |
| next-text                           | 替代图标显示的下一页文字                                     | `string`               | —                                    |
| disabled                            | 是否禁用分页                                                 | `boolean`              | false                                |
| hide-on-single-page                 | 只有一页时是否隐藏                                           | `boolean`              | -                                    |


## Pagination事件

| 事件名         | 说明                               | 类型       |
| :------------- | :--------------------------------- | :--------- |
| size-change    | `page-size` 改变时触发             | `Function` |
| current-change | `current-page` 改变时触发          | `Function` |
| prev-click     | 用户点击上一页按钮改变当前页时触发 | `Function` |
| next-click     | 用户点击下一页按钮改变当前页时触发 | `Function` |

## Pagination插槽

| 名称    | 说明                                               |      |
| :------ | :------------------------------------------------- | ---- |
| default | 自定义内容 设置文案，需要在 `layout` 中列出 `slot` |      |