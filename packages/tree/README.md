# 虚拟树形控件

这是虚拟树形控件

# 使用

`<etu-tree :options="treeOptions"></etu-tree>`

然后在options中绑定值

```vue
const state = reactive({
  treeOptions: [
    {
      label: "一级",
      checked: false,
      children: [
        {
          label: "一级-1",
          checked: false,
        },
        {
          label: "一级-2",
          checked: false,
          children: [
            {
              label: "一级-2-1",
              checked: false,
            },
            {
              label: "一级-2-2",
              checked: false,
            },
          ],
        },
      ],
    },
  ],
});
const { treeOptions } = state;
```
`label`:值的名，`showCheck: true`:是否显示多选框。

# 不足

目前没有做出check-group式的选择框，没有中间状态。
