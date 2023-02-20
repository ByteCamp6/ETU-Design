---
title: Dialog
---

# Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法

需要设置 `model-value / v-model` 属性，它接收 `Boolean`，当为 `true` 时显示 Dialog。 Dialog 分为两个部分：`body` 和 `footer`，`footer` 需要具名为 `footer` 的 `slot`。 `title` 属性用于定义标题，它是可选的，默认值为空

<preview path="../examples/dialog/basic.vue" title="" description=""></preview>

## 自定义内容

对话框的内容可以是任何东西

<preview path="../examples/dialog/custom.vue" title="" description=""></preview>

## 可拖拽对话框

`header`部分可拖拽

设置`draggable`属性为`true`以做到拖拽

<preview path="../examples/dialog/draggable.vue" title="" description=""></preview>


## Dialog属性

| 属性名                 | 说明                                                         | 类型                                  | 默认值 |
| :--------------------- | :----------------------------------------------------------- | :------------------------------------ | :----- |
| model-value / v-model  | 是否显示 Dialog                                              | boolean                               | —      |
| title                  | Dialog 对话框 Dialog 的标题， 也可通过具名 slot 传入         | string                                | —      |
| width                  | Dialog 的宽度                                                | string / number                       | 50%    |
| fullscreen             | 是否为全屏 Dialog                                            | boolean                               | false  |
| top                    | Dialog CSS 中的 margin-top 值                                | string                                | 15vh   |
| modal                  | 是否需要遮罩层                                               | boolean                               | true   |
| lock-scroll            | 是否在 Dialog 出现时将 body 滚动锁定                         | boolean                               | true   |
| custom-classdeprecated | Dialog 的自定义类名                                          | string                                | —      |
| open-delay             | Dialog 打开的延时时间，单位毫秒                              | number                                | 0      |
| close-delay            | Dialog 关闭的延时时间，单位毫秒                              | number                                | 0      |
| close-on-click-modal   | 是否可以通过点击 modal 关闭 Dialog                           | boolean                               | true   |
| show-close             | 是否显示关闭按钮                                             | boolean                               | true   |
| before-close           | 关闭前的回调，会暂停 Dialog 的关闭. 回调函数内执行 done 参数方法的时候才是真正关闭对话框的时候. | Function(done) (done 用来关闭 Dialog) | —      |
| draggable              | 为 Dialog 启用可拖拽功能                                     | boolean                               | false  |
| align-center           | 是否水平垂直对齐对话框                                       | boolean                               | false  |
| destroy-on-close       | 当关闭 Dialog 时，销毁其中的元素                             | boolean                               | false  |

## Dialog插槽

| 插槽名 | 说明                                                   |
| :----- | :----------------------------------------------------- |
| —      | Dialog 的内容                                          |
| header | 对话框标题的内容；会替换标题部分，但不会移除关闭按钮。 |
| footer | Dialog 按钮操作区的内容                                |


## Dialog事件

| 事件名 | 说明                        | 参数 |
| :----- | :-------------------------- | :--- |
| open   | Dialog 打开的回调           | —    |
| opened | Dialog 打开动画结束时的回调 | —    |
| close  | Dialog 关闭的回调           | —    |
| closed | Dialog 关闭动画结束时的回调 | —    |


<style lang="scss">
.etu-table{
  table {
    display: table;
    margin: 0;
    overflow-x: unset;
    border: none;
  }

  tr {
  border-top: unset;
  transition: unset;
  }

  th,
  td {
  font-weight: unset;
  color: unset;
  background-color: unset;
  border: none;
  }

  .etu-table__cell {
    padding: 8px 0;
    min-width: 0;
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    position: relative;
    text-align: left;
    z-index: 1;
  }

  tr.etu-table__row {
    transition: background-color 0.25s ease;
    background-color: var(--etu-table-tr-bg-color);
  }
}
</style>