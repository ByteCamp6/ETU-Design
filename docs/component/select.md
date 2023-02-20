---
title: Select
---

# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

适用广泛的基础单选 v-model 的值为当前被选中的 el-option 的 value 属性值

<preview path="../examples/select/basic.vue" title="" description=""></preview>

## 有禁用选项

在 el-option 中，设定 disabled 值为 true，即可禁用该选项

<preview path="../examples/select/disabled-option.vue" title="" description=""></preview>

## 禁用状态

禁用整个选择器组件

<preview path="../examples/select/disabled.vue" title="" description=""></preview>

## 可清空单选

您可以使用清除图标来清除选择。

<preview path="../examples/select/clearable.vue" title="" description=""></preview>

## 基础多选

多选选择器使用 tag 组件来展示已选中的选项。

<preview path="../examples/select/multiple.vue" title="" description=""></preview>

## 将选项进行分组

你可以为选项进行分组来区分不同的选项

<preview path="../examples/select/group.vue" title="" description=""></preview>

## 筛选选项

可以利用筛选功能快速查找选项。

<preview path="../examples/select/filterable.vue" title="" description=""></preview>

## 远程搜索

输入关键字以从远程服务器中查找数据。

<preview path="../examples/select/remote.vue" title="" description=""></preview>

## Scrollbar 属性

| 属性名     | 说明           | 类型          | 可选值 | 默认值 |
| :--------- | :------------- | :------------ | :----- | :----- |
| height     | 滚动条高度     | string/number | -      | -      |
| max-height | 滚动条最大高度 | string/number | -      | -      |

## DatePicker 事件

| 事件名 | 说明                             | 类型       |
| :----- | :------------------------------- | :--------- |
| scroll | 当触发滚动事件时，返回滚动的距离 | `Function` |

## Scrollbar 插槽

| 名称 | 说明           |
| :--- | :------------- |
| —    | 自定义默认内容 |

<style>
  .vitepress-demo-preview__element-plus__container {
    overflow: unset;
  }
</style>
