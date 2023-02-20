---
title: DatePicker
---

# DatePicker 面包屑

显示当前页面的路径，快速返回之前的任意页面。

## 基础用法

以”日“为基本单位，基础的日期选择控件

<preview path="../examples/date-picker/basic.vue" title="" description=""></preview>

## 其他日期单位

通过扩展基础的日期选择，可以选择月、年

<preview path="../examples/date-picker/type.vue" title="" description=""></preview>

## 选择一段时间

<preview path="../examples/date-picker/range.vue" title="" description=""></preview>

## 日期格式

使用 format 指定输入框的格式。 使用 value-format 指定绑定值的格式。

<preview path="../examples/date-picker/format.vue" title="" description=""></preview>

## DatePicker 属性

| 属性名                | 说明                               | 类型                           | 默认值 |
| :-------------------- | :--------------------------------- | :----------------------------- | :----- |
| model-value / v-model | 绑定值，如果它是数组，长度应该是 2 | Date / number / string / Array | —      |
| readonly              | 只读                               | boolean                        | false  |
| disabled              | 禁用                               | boolean                        | false  |
| placeholder           | 是否为全屏 Dialog                  | placeholder                    | false  |

## DatePicker 插槽

| 名称    | 说明           |
| :------ | :------------- |
| default | 自定义默认内容 |

## DatePicker 方法

| 事件名         | 说明                                    | 类型       |
| :------------- | :-------------------------------------- | :--------- |
| change         | 用户确认选定的值时触发                  | `Function` |
| blur           | 在组件 Input 失去焦点时触发             | `Function` |
| focus          | 在组件 Input 获得焦点时触发             | `Function` |
| visible-change | 当 DatePicker 的下拉列表出现/消失时触发 | `Function` |
