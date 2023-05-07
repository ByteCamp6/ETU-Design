const popperProps = {
  /**
   * 首选放置位置("auto"将选择空间最大的一侧。)
   */
  placement: {
    type: String,
    default: "bottom",
    validator: (value) => {
      return (
        [
          "auto",
          "auto-start",
          "auto-end",
          "top",
          "top-start",
          "top-end",
          "bottom",
          "bottom-start",
          "bottom-end",
          "right",
          "right-start",
          "right-end",
          "left",
          "left-start",
          "left-end",
        ].indexOf(value) !== -1
      );
    },
  },
  /**
   * 禁用当用户单击弹出窗口时自动关闭它
   */
  disableClickAway: {
    type: Boolean,
    default: false,
  },
  /**
   * 沿触发器元素的偏移（以像素为单位）
   */
  offsetSkid: {
    type: String,
    default: "0",
  },
  /**
   * 距触发元素的偏移（以像素为单位）
   */
  offsetDistance: {
    type: String,
    default: "12",
  },
  /**
   * 悬停时触发弹出按钮
   */
  hover: {
    type: Boolean,
    default: false,
  },
  /**
   * 手动打开Popper，如果设置了此属性，则忽略其他事件
   */
  show: {
    type: Boolean,
    default: null,
  },
  /**
   * 禁用Popper。如果它已经打开，它将关闭。
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * 延迟（ms）后打开Popper。
   */
  openDelay: {
    type: Number,
    default: 0,
  },
  /**
   * 延迟（ms）后关闭Popper。
   */
  closeDelay: {
    type: Number,
    default: 200,
  },
  /**
   * Popper的z-index
   */
  zIndex: {
    type: [Number, String],
  },
  /**
   * 在Popper上显示箭头
   */
  arrow: {
    type: Boolean,
    default: false,
  },
  /**
   * 箭头到popper的距离
   */
  arrowPadding: {
    type: String,
    default: "0",
  },
  /**
   * 如果Popper应该是交互式的，如果为false，则当单击悬停时将关闭
   */
  interactive: {
    type: Boolean,
    default: true,
  },
  /**
   * 是否会自动动态翻转
   */
  locked: {
    type: Boolean,
    default: false,
  },
  /**
   * 如果内容只是一个简单的字符串，它可以作为prop传入
   */
  content: {
    type: String,
    default: "",
  },
  canclePadding: {
    type: Boolean,
    default: false,
  },
};
export { popperProps };
