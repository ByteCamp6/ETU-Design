---
title: Dropdown
---

# Dropdown 下拉菜单

将动作或菜单折叠到下拉菜单中。

## 基础用法

悬停在下拉菜单上以展开更多操作。

通过组件 `slot` 来设置下拉触发的元素以及需要通过具名 `slot` 为 `dropdown` 来设置下拉菜单。 默认情况下，只需要悬停在触发菜单的元素上即可，无需点击也会显示下拉菜单。

<preview path="../examples/dropdown/basic.vue" title="" description=""></preview>

## 触发对象

可使用按钮触发下拉菜单。

设置 `split-button` 属性来让触发下拉元素呈现为双按钮组，左边是功能按钮，右边是触发下拉菜单的按钮。

:::preview title

demo-preview=../examples/dropdown/trigger.vue

:::

## 触发方式

可以配置点击激活或者悬停激活。

将 trigger 属性设置为 click 即可， 默认为 hover

:::preview title

demo-preview=../examples/dropdown/triggerStyle.vue

:::

## 指令事件

点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。

<preview path="../examples/dropdown/event.vue" title="" description=""></preview>

## 尺寸

Dropdown 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的尺寸。

使用 size 属性配置尺寸，可选的尺寸大小有: large, default 或 small
:::preview title
demo-preview=../examples/dropdown/size.vue
:::

## Dropdown 属性

| 属性名       | 说明                                                              | 类型            | 可选值                                                                                                                                                             | 默认值  |
| :----------- | :---------------------------------------------------------------- | :-------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ |
| type         | 菜单按钮类型，仅在 `split-button` 为 `true` 的情况下有效。        | string          | primary/success/info/warning/danger                                                                                                                                | primary |
| size         | 菜单尺寸，在 `split-button` 为 `true` 的情况下也对触发按钮生效    | boolean         | large / default / small                                                                                                                                            | default |
| max-height   | 菜单最大高度                                                      | string / number | —                                                                                                                                                                  | —       |
| split-button | 下拉触发元素呈现为双按钮组                                        | boolean         | —                                                                                                                                                                  | false   |
| placement    | 菜单弹出位置                                                      | string          | "auto"/"auto-start"/"auto-end"/"top"/"top-start"/"top-end"/"bottom"/"bottom-start"/"bottom-end"/"right"/"right-start"/"right-end"/"left"/"left-start"/"left-end"/— | bottom  |
| arrowDown    | 使用默认的箭头 `icon`,仅在 `split-button` 为 `false` 的情况下有效 | boolean         | —                                                                                                                                                                  | true    |

## Dropdown-item 属性

| 属性名   | 说明                                                            | 类型                 | 可选值 | 默认值 |
| :------- | :-------------------------------------------------------------- | :------------------- | ------ | ------ |
| command  | 绑定在 `Dropdown-item` 上，作为`Dropdown 事件command`的回调参数 | string/object/number | —      | —      |
| disabled | `item` 的不可选取状态                                           | boolean              | —      | false  |
| divided  | 分割线                                                          | boolean              | —      | false  |

## Dropdown 事件

| 事件名  | 说明                                            | 参数                 |
| :------ | :---------------------------------------------- | :------------------- |
| click   | `split-button` 为 `true` 时，点击左侧按钮的回调 | —                    |
| command | 点击菜单项触发的事件回调                        | dropdown-item 的指令 |

## Dropdown 插槽

| 插槽名   | 说明                                       | 子标签        |
| :------- | :----------------------------------------- | ------------- |
| dropdown | 下拉列表，通常是 `<el-dropdown-menu>` 组件 | Dropdown-Menu |
