---
title: Radio
---

# Radio 单选框

在一组备选项中进行单选。

## 基础用法

要使用 Radio 组件，只需要设置`v-model`绑定变量， 选中意味着变量的值为相应 Radio `label`属性的值， `label`可以是`String`、`Number` 或 `Boolean`

<preview path="../examples/radio/basic.vue" title="" description=""></preview>

## 禁用状态

单选框不可用状态，需要设置设置 `disabled` 属性

<preview path="../examples/radio/disabled.vue" title="" description=""></preview>

## 单选框组

适用于多个勾选框相互排斥的情景。

在 `radio-group` 元素中定义 `v-model` 绑定变量，为 每一个`radio` 设置好 label 属性即可， 另外，还可以通过 change 事件来响应变化，它会传入一个参数 value 来表示改变之后的值。

<preview path="../examples/radio/group.vue" title="" description=""></preview>

## Radio属性


| 属性名                | 说明                                                         | 类型                                       | 默认值 |
| :-------------------- | :----------------------------------------------------------- | :----------------------------------------- | :----- |
| model-value / v-model | 选中项绑定值                                                 | `string` / `number` / `boolean`            | —      |
| label                 | 选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效） | `string` / `number` / `boolean` / `object` | —      |
| disabled              | 是否禁用                                                     | `boolean`                                  | false  |
| name                  | 原生 name 属性                                               | `string`                                   | —      |

## Radio事件

| 事件名 | 说明                     | 类型       |
| :----- | :----------------------- | :--------- |
| change | 当绑定值变化时触发的事件 | `Function` |

## Radio插槽

| 插槽名  | 说明           |
| :------ | :------------- |
| default | 自定义默认内容 |

## RadioGroup属性

| 属性名                | 说明                           | 类型      | 默认值 |
| :-------------------- | :----------------------------- | :-------- | :----- |
| model-value / v-model | 绑定值                         | `object`  | []     |
| size                  | 多选框组尺寸                   | `enum`    | —      |
| disabled              | 是否禁用                       | `boolean` | false  |

## RadioGroup事件

| 事件名 | 说明                     | 类型       |
| :----- | :----------------------- | :--------- |
| change | 当绑定值变化时触发的事件 | `Function` |

## RadioGroup插槽

| 插槽名  | 说明           | 子标签                     |
| :------ | :------------- | :------------------------- |
| default | 自定义默认内容 | Checkbox  |