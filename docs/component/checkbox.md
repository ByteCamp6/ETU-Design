---
title: Checkbox
---

# Checkbox 多选框

在一组备选项中进行多选。

## 基础用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

`checkbox-group`元素能把多个 checkbox 管理为一组，只需要在 Group 中使用 `v-model` 绑定 `Array` 类型的变量即可。 只有一个选项时的默认值类型为 `Boolean`，当选中时值为`true`。 `checkbox` 标签中的内容将成为复选框按钮之后的描述。

<preview path="../examples/checkbox/basic.vue" title="" description=""></preview>

## 禁用状态

多选框不可用状态，需要设置设置 `disabled` 属性

<preview path="../examples/checkbox/disabled.vue" title="" description=""></preview>

## 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

在 `checkbox` 元素中定义 `v-model` 绑定变量，单一的 `checkbox` 中，默认绑定变量的值会是 `Boolean`，选中为 `true`。 在 `checkbox` 组件中，`label` 是选择框的值。 如果该组件下没有被传入内容，那么 `label` 将会作为 checkbox 按钮后的介绍。 `label` 也与数组中的元素值相对应。 如果指定的值存在于数组中，就处于选择状态，反之亦然。

<preview path="../examples/checkbox/group.vue" title="" description=""></preview>

## 中间状态

`indeterminate` 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果

<preview path="../examples/checkbox/indeterminate.vue" title="" description=""></preview>

## 可选项目数量的限制

使用 `min` 和 `max` 属性能够限制可以被勾选的项目的数量。

<preview path="../examples/checkbox/limit.vue" title="" description=""></preview>


## Checkbox属性


| 属性名                | 说明                                                         | 类型                                       | 默认值 |
| :-------------------- | :----------------------------------------------------------- | :----------------------------------------- | :----- |
| model-value / v-model | 选中项绑定值                                                 | `string` / `number` / `boolean`            | —      |
| label                 | 选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效） | `string` / `number` / `boolean` / `object` | —      |
| true-label            | 选中时的值                                                   | `string` / `number`                        | —      |
| false-label           | 没有选中时的值                                               | `string` / `number`                        | —      |
| disabled              | 是否禁用                                                     | `boolean`                                  | false  |
| border                | 是否显示边框                                                 | `boolean`                                  | false  |
| size                  | Checkbox 的尺寸                                              | large / default /small                                    | —      |
| name                  | 原生 name 属性                                               | `string`                                   | —      |
| checked               | 当前是否勾选                                                 | `boolean`                                  | false  |
| indeterminate         | 设置不确定状态，仅负责样式控制                               | `boolean`                                  | false  |

## Checkbox事件

| 事件名 | 说明                     | 类型       |
| :----- | :----------------------- | :--------- |
| change | 当绑定值变化时触发的事件 | `Function` |

## Checkbox插槽

| 插槽名  | 说明           |
| :------ | :------------- |
| default | 自定义默认内容 |

## CheckboxGroup属性

| 属性名                | 说明                           | 类型      | 默认值 |
| :-------------------- | :----------------------------- | :-------- | :----- |
| model-value / v-model | 绑定值                         | `object`  | []     |
| size                  | 多选框组尺寸                   | `enum`    | —      |
| disabled              | 是否禁用                       | `boolean` | false  |
| min                   | 可被勾选的 checkbox 的最小数量 | `number`  | —      |
| max                   | 可被勾选的 checkbox 的最大数量 | `number`  | —      |

## CheckboxGroup事件

| 事件名 | 说明                     | 类型       |
| :----- | :----------------------- | :--------- |
| change | 当绑定值变化时触发的事件 | `Function` |

## CheckboxGroup插槽

| 插槽名  | 说明           | 子标签                     |
| :------ | :------------- | :------------------------- |
| default | 自定义默认内容 | Checkbox  |