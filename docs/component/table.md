---
title: Table
---

# Table 表格

用于展示多条结构类似的数据， 可对数据进行排序、筛选、对比或其他自定义操作。

## 基础表格

当 `etu-table` 元素中注入 `data` 对象数组和`columns`, 可以使用 `width` 属性来定义列宽。

<preview path="../examples/table/basic.vue" title="" description=""></preview>

## 带状态表格

可以通过指定 `Table` 组件的 `row-class` 属性来为 `Table` 中的某一行添加 `class`

<preview path="../examples/table/withClass.vue" title="" description=""></preview>

## 固定表头

纵向内容过多时，可选择固定表头。

只要定义`height`属性，即可实现固定表头的表格。

<preview path="../examples/table/fixHead.vue" title="" description=""></preview>

## 固定列

横向内容过多时，可选择固定列。

固定列需要使用 `fixed` 属性 它接受传入字符串left 或 right，表示左边固定还是右边固定。

<preview path="../examples/table/fixColumns.vue" title="" description=""></preview>

## 固定列和表头

当您有大量数据块放入表中，您可以同时固定表头和列。

固定列和表头可以同时使用，只需要将上述两个属性分别设置好即可。

<preview path="../examples/table/fixAll.vue" title="" description=""></preview>

## 多选

通过设置 `row-selection` 开启行选择器。

<preview path="../examples/table/checkbox.vue" title="" description=""></preview>

## 单选

通过设置 `rowSelection.type='radio'` 开启单选模式。

<preview path="../examples/table/radio.vue" title="" description=""></preview>

## 排序

通过设置 `columns` 中的 `sortable`属性，可以配置排序功能。

<preview path="../examples/table/sort.vue" title="" description=""></preview>

## 筛选

通过设置 `columns` 中的 `filterable`属性，可以配置排序功能。

<preview path="../examples/table/filterable.vue" title="" description=""></preview>

## 自定义渲染

通过设置`columns`中的`headerRender`和`cellRender`，可以对列进行自定义渲染

<preview path="../examples/table/custom.vue" title="" description=""></preview>


## table属性

| 属性名        | 说明                                                         | 类型                                   | 默认值 |
| :------------ | :----------------------------------------------------------- |:-------------------------------------| :----- |
| columns       | 表格的列描述信息                                             | TableColumnCtx[]                     |        |
| data          | 显示的数据                                                   | TableData[]                          | —      |
| height        | Table 的高度， 默认为自动高度。 如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。 | string / number                      | —      |
| max-height    | Table 的最大高度。 合法的值为数字或者单位为 px 的高度。      | string / number                      | —      |
| row-key       | 表格行 `key` 的取值字段string                                |                                      | 'key'  |
| row-class     | 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。 | function({ row, rowIndex }) / string | —      |
| row-selection | 表格的行选择器配置                                           | TableRowSelection                    | —      |

## Table 事件

| 事件名           | 说明                                         | 回调参数                         |
| :--------------- | :------------------------------------------- | :------------------------------- |
| select           | 当用户手动勾选数据行的 Checkbox 时触发的事件 | rowKeys, checked, rowKey, record |
| select-all       | 当用户手动勾选全选 Checkbox 时触发的事件     | rowKeys, checked                 |
| selection-change | 当选择项发生变化时会触发该事件               | rowKeys                          |
| select-radio     | 当用户手动勾选数据行的 Radio 时触发的事件    | rowKey, record                   |
| cell-click       | 当某个单元格被点击时会触发该事件             | record, column, event            |
| row-click        | 当某一行被点击时会触发该事件                 | record, event                    |
| header-click     | 当某一列的表头被点击时会触发该事件           | column, event                    |
| sort-change      | 当表格的排序条件发生变化的时候会触发该事件   | columnProp, direction            |
| filter-change    | 当表格的筛选条件发生变化的时候会触发该事件   | columnProp, filteredValues       |

## Table方法

| 方法名             | 说明                                                         | 参数             |
| :----------------- | :----------------------------------------------------------- | :--------------- |
| getSelectionRows   | 返回当前选中的行                                             | —                |
| toggleRowSelection | 用于多选表格，切换某一行的选中状态， 如果使用了第二个参数，则可直接设置这一行选中与否 | rowKey, selected |
| toggleAllSelection | 用于多选表格，切换全选和全不选                               | —                |
| setCurrentRow      | 用于单选表格，设定某一行为选中行                             | rowKey           |
| clearSort          | 用于清空排序条件，数据会恢复成未排序的状态                   | —                |


## 类型

### TableColumnCtx

| 参数名          | 描述                                    | 类型                                                         |
| :-------------- | :-------------------------------------- | :----------------------------------------------------------- |
| prop            | 列信息的标识，对应 `TableData` 中的数据 | string                                                       |
| label           | 列标题                                  | string                                                       |
| width           | 列宽度                                  | number                                                       |
| align           | 对齐方向                                | left/center/right                                            |
| fixed           | 固定位置                                | left/right                                                   |
| sortable        | 排序相关选项                            | TableSortable                                                |
| filterable      | 过滤相关选项                            | TableFilterable                                              |
| headerRender    | 自定义表头渲染                          | (data: {   column: TableColumnCtx;   columnIndex: number; }) => VNodeChild |
| cellRender      | 自定义单元格渲染                        | (data: {   cellData: any;   record: T;   column: TableColumnCtx;   rowIndex: number;   columnIndex: number; }) => VNodeChild |
| headerCellClass | 自定义表头单元格类名                    | ClassName /((data: { column: TableColumnCtx; columnIndex: number }) => any) |
| bodyCellClass   | 自定义单元格类名                        | ClassName /((data: {     cellData: any;     record: T;     column: TableColumnCtx;     rowIndex: number;     columnIndex: number;   }) => any) |

### TableRowSelection

| 参数名         | 描述               | 类型           | 默认值 |
| :------------- | :----------------- | :------------- | :----- |
| type           | 行选择器的类型     | checkbox/radio | —      |
| showCheckedAll | 是否显示全选选择器 | boolean        | true   |
| title          | 列标题             | string         | —      |
| width          | 列宽度             | number         | —      |
| fixed          | 是否固定           | boolean        | false  |

### TableSortable

| 参数名         | 描述           | 类型                                     | 默认值 |
| :------------- | :------------- | :--------------------------------------- | :----- |
| sortDirections | 支持的排序方向 | ('ascend' \| 'descend')[]                | —      |
| sorter         | 排序函数       | ( a: TableData, b: TableData ) => number | —      |

### TableFilterData

| 参数名 | 描述               | 类型   | 默认值 |
| :----- | :----------------- | :----- | :----- |
| text   | 筛选数据选项的内容 | string | —      |
| value  | 筛选数据选项的值   | string | —      |

### TableFilterable

| 参数名          | 描述         | 类型                                                    | 默认值         |
| :-------------- | :----------- | :------------------------------------------------------ | :------------- |
| filters         | 筛选数据     | TableFilterData[]                                       | —              |
| filter          | 筛选函数     | (value: string[], record: TableData) => boolean | —              |
| filterPlacement | 筛选浮动位置 | popper配置                                              | "bottom-start" |
| filterCombine   | 筛选合并逻辑 | "and" / "or"                                            | "or"           |

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
