export default {
  "/guide/": [
    {
      text: "指南",
      items: [
        // This shows `/guide/index.md` page.
        { text: "团队", link: "/guide/team.md" }, // /guide/index.md
        { text: "快速开始", link: "/guide/quickstart.md" }, // /guide/two.md
      ],
    },
  ],
  "/component/": [
    {
      text: "Basic 基础组件",
      items: [
        { text: "Button 按钮", link: "/component/button.md" },
        { text: "Icon 图标", link: "/component/icon.md" },
        { text: "Layout 布局", link: "/component/layout.md" },
        { text: "Link 链接", link: "/component/link.md" },
        { text: "Scrollbar 滚动条", link: "/component/scrollbar.md" },
      ],
    },
    {
      text: "Form 表单组件",
      items: [
        { text: "Checkbox 多选框", link: "/component/checkbox.md" },
        { text: "Date Picker 日期选择器", link: "/component/date-picker.md" },
        { text: "Form 表单", link: "/component/form.md" },
        { text: "Input 输入框", link: "/component/input.md" },
        { text: "Radio 单选框", link: "/component/radio.md" },
        { text: "Select 选择器", link: "/component/select.md" },
        { text: "Switch 开关", link: "/component/switch.md" },
        { text: "Upload 上传", link: "/component/upload.md" },
      ],
    },
    {
      text: "Data 数据展示",
      items: [
        { text: "Avatar 头像", link: "/component/avatar.md" },
        { text: "Pagination 分页", link: "/component/pagination.md" },
        { text: "Progress 进度条", link: "/component/progress.md" },
        { text: "Table 表格", link: "/component/table.md" },
        { text: "Tag标签", link: "/component/tag.md" },
        { text: "Tree 树形控件", link: "/component/tree.md" },
      ],
    },
    {
      text: "Navigation 导航组件",
      items: [
        { text: "Breadcrumb 面包屑", link: "/component/breadcrumb.md" },
        { text: "Dropdown 下拉菜单", link: "/component/dropdown.md" },
        { text: "Menu 菜单", link: "/component/menu.md" },
      ],
    },
    {
      text: "Feedback 反馈组件",
      items: [
        { text: "Dialog 对话框", link: "/component/dialog.md" },
        { text: "Drawer 抽屉", link: "/component/drawer.md" },
        { text: "Message 消息提示", link: "/component/message.md" },
        { text: "Popper 气泡", link: "/component/popper.md" },
      ],
    },
    {
      text: "Others 其他组件",
      items: [{ text: "Divider 分割线", link: "/component/divider.md" }],
    },
  ],
};
