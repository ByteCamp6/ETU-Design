---
title: Tree
---

# Tree 标签

用于虚拟树形控件

## 基础用法

我们使用`<etu-tree></etu-tree>`标签来调用虚拟树形控件。

我们使用`:options=`来绑定要展示的数据。

数据示例:

```vue
const state = reactive({
  treeOptions: [
    {
      label: "一级",
      children: [
        {
          label: "一级-1",
        },
        {
          label: "一级-2",
          children: [
            {
              label: "一级-2-1",
            },
            {
              label: "一级-2-2",
            },
          ],
        },
      ],
    },
  ],
});
const { treeOptions } = state;
```

数据可以按照树形数据给Tree组件，每个数据可以包含`label`名称,和`children`子节点。

<preview path="../examples/tree/basic.vue" title="" description=""></preview>

