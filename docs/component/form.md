---
title: Form
---

# Form 表单

表单包含 输入框, 单选框, 下拉选择, 多选框 等用户输入的组件。 使用表单，您可以收集、验证和提交数据。

## 典型表单

最基础的表单包括各种输入表单项，比如 input、select、radio、checkbox 等。
<preview path="../examples/form/basic.vue" title="" description=""></preview>

## 表单校验
Form 组件允许你验证用户的输入是否符合规范，来帮助你找到和纠正错误。

Form 组件提供了表单验证的功能，只需为 rules 属性传入约定的验证规则，并将 form-Item 的 prop 属性设置为需要验证的特殊键值即可。 更多高级用法可参考 async-validator。
<preview path="../examples/form/check.vue" title="" description=""></preview>

## 自定义校验规则
这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。
<preview path="../examples/form/validate.vue" title="" description=""></preview>



## FormItem API

| 名称        | 说明         | 类型              | 默认值 |
| ----------- | ------------ | ----------------- | ------ |
| prop        | model的键名  | string / string[] | ——     |
| label       | 标签文本     | string            | ——     |
| label-width | 标签宽度     | string / number   | ——     |
| required    | 校验规则     | boolean           | false  |
| rules       | 表单验证规则 | object            | ——     |



#### FormItemRule

| 插槽名  | 说明               | 类型 | 默认 |
| ------- | ------------------ | ---- | ---- |
| trigger | 验证逻辑的触发方式 | enum | ——   |

