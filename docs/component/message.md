---
title: Message
---

# Message 消息提示

常用于主动操作后的反馈提示。

# 基础用法

从顶部出现，3 秒后自动消失

<preview path="../examples/message/basic.vue" title="" description=""></preview>

# 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

<preview path="../examples/message/status.vue" title="" description=""></preview>

# 可关闭的消息提示

可以添加关闭按钮。

设置`showClose`以手动关闭

<preview path="../examples/message/closable.vue" title="" description=""></preview>

## Message配置项

| 属性         | 说明                                          | 类型                                       | 默认值    |
|:-----------| :-------------------------------------------- |:-----------------------------------------|:-------|
| message    | 消息文字                                      | string / VNode / (() => VNode)           | —      |
| type       | 消息类型                                      | 'success' / 'warning' / 'info' / 'error' | 'info' |
| duration   | 显示时间，单位为毫秒。 设为 0 则不会自动关闭  | number                                   | 3000   |
| show-close | 是否显示关闭按钮                              | boolean                                  | false  |
| on-close   | 关闭时的回调函数, 参数为被关闭的 message 实例 | function                                 | —      |
| offset     | Message 距离窗口顶部的偏移量                  | number                                   | 20     |

## Message方法

| 方法名   | 描述               |
|:------| :----------------- |
| close | 关闭当前的 Message |