---
title: Input
---

# Input 输入框
通过鼠标或键盘输入字符

## 基础用法
<preview path="../examples/input/basic.vue" title="" description=""></preview>

## 禁用状态
通过 disabled 属性指定是否禁用 input 组件
<preview path="../examples/input/disabled.vue" title="" description=""></preview>

## 一键清空
使用clearable属性即可得到一个可一键清空的输入框
<preview path="../examples/input/clearable.vue" title="" description=""></preview>

## 密码框
设置 password 属性即可得到一个可切换显示隐藏的密码框
<preview path="../examples/input/password.vue" title="" description=""></preview>

## 带图标的输入框
带有图标标记输入类型

要在输入框中添加图标，你可以简单地使用 prefix-icon 和 suffix-icon 属性
<preview path="../examples/input/prefixSuffix.vue" title="" description=""></preview>

## 复合型输入框
可以在输入框中前置或后置一个元素，通常是标签或按钮。
<preview path="../examples/input/complex.vue" title="" description=""></preview>

## 尺寸
使用 size 属性改变输入框大小。 除了默认大小外，还有另外两个选项： large, small。
<preview path="../examples/input/size.vue" title="" description=""></preview>

## 文本域
用于输入多行文本信息可缩放的输入框。 添加 type="textarea" 属性来将 input 元素转换为原生的 textarea 元素。
<preview path="../examples/input/textarea.vue" title="" description=""></preview>

## API



| 属性名        | 说明                 | 类型               | 默认值 |
| ------------- | -------------------- | ------------------ | ------ |
| type          | 类型                 | string             | text   |
| v-model       | 绑定值               | string / number    | ——     |
| placeholder   | 输入框占位文本       | string             | ——     |
| clearable     | 清除按钮             | boolean            | false  |
| show-password | 是否显示切换密码图标 | boolean            | false  |
| disabled      | 是否禁用             | boolean            | false  |
| size          | 输入框尺寸           | enum               | medium |
| prefix-icon   | 自定义前缀图标       | string / Component | ——     |
| suffix-icon   | 自定义后缀图标       | string / Component | ——     |

