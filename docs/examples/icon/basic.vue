<template>
  <ul class="demo-icon-list">
    <li
      class="icon-item"
      v-for="icon in iconList"
      :key="icon"
      @click="copy(icon)"
    >
      <span class="demo-svg-icon">
        <span class="icon-container">
          <EtuIcon :name="icon" style="font-size: 20px"></EtuIcon>
        </span>
        <span class="icon-name">{{ icon }}</span>
      </span>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.demo-icon-list {
  overflow: hidden;
  list-style: none;
  padding: 0 !important;
  border-top: 1px solid lightgray;
  border-left: 1px solid lightgray;
  border-radius: 4px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  .icon-item {
    text-align: center;
    color: gray;
    height: 90px;
    font-size: 13px;
    border-right: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    transition: background-color 0.3s;

    .demo-svg-icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      cursor: pointer;
    }
  }
}

.icon-name {
  margin-top: 8px;
  height: 40px;
  line-height: 16px;
  width: 80%;
}

.icon-container {
  height: 30px;
  display: flex;
  flex-direction: column-reverse;
}
</style>

<script lang="ts" setup>
import EtuMessage from "@etu-design/components/message";

const copy = (text: any) => {
  // text是复制文本
  // 创建input元素
  text = `<etu-icon name="${text}"></etu-icon>`;
  const el = document.createElement("input");
  // 给input元素赋值需要复制的文本
  el.setAttribute("value", text);
  // 将input元素插入页面
  document.body.appendChild(el);
  // 选中input元素的文本
  el.select();
  // 复制内容到剪贴板
  document.execCommand("copy");
  // 删除input元素
  document.body.removeChild(el);
  EtuMessage.success(text + "复制成功");
};

const iconList = [
  // "column-3",
  "column-4",
  "add",
  "add-circle",
  "adjust",
  "arrow-up-circle",
  "arrow-right-circle",
  "arrow-down",
  "ashbin",
  "arrow-right",
  "browse",
  "bottom",
  "back",
  "bad",
  "arrow-double-left",
  "arrow-left-circle",
  "arrow-double-right",
  "caps-lock",
  "camera",
  "chart-bar",
  "attachment",
  "code",
  "close",
  "check-item",
  "calendar",
  "comment",
  "column-vertical",
  "column-horizontal",
  "complete",
  "chart-pie",
  "cry",
  "customer-service",
  "delete",
  "direction-down",
  "copy",
  "cut",
  "data-view",
  "direction-down-circle",
  "direction-right",
  "direction-up",
  "discount",
  "direction-left",
  "download",
  "electronics",
  "drag",
  "elipsis",
  "export",
  "explain",
  "edit",
  "eye-close",
  "email",
  "error",
  "favorite",
  "file-common",
  "file-delete",
  "file-add",
  "film",
  "fabulous",
  "file",
  "folder-close",
  "filter",
  "good",
  "hide",
  "home",
  "history",
  "file-open",
  "forward",
  "import",
  "image-text",
  "keyboard-26",
  "keyboard-9",
  "link",
  "layout",
  "fullscreen-shrink",
  "layers",
  "lock",
  "fullscreen-expand",
  "map",
  "meh",
  "menu",
  "loading",
  "help",
  "minus-circle",
  "modular",
  "notification",
  "mic",
  "more",
  "pad",
  "operation",
  "play",
  "print",
  "mobile-phone",
  "minus",
  "navigation",
  "pdf",
  "prompt",
  "move",
  "refresh",
  "run-up",
  "picture",
  "run-in",
  "pin",
  "save",
  "search",
  "share",
  "scanning",
  "security",
  "sign-out",
  "select",
  "stop",
  "success",
  "smile",
  "switch",
  "setting",
  "survey",
  "task",
  "skip",
  "text",
  "time",
  "telephone-out",
  "toggle-left",
  "toggle-right",
  "telephone",
  "top",
  "unlock",
  "user",
  "upload",
  "work",
  "training",
  "warning",
  "zoom-in",
  "zoom-out",
  "add-bold",
  "arrow-left-bold",
  "arrow-up-bold",
  "close-bold",
  "arrow-down-bold",
  "minus-bold",
  "arrow-right-bold",
  "select-bold",
  "arrow-up-filling",
  "arrow-down-filling",
  "arrow-left-filling",
  "arrow-right-filling",
  "caps-unlock-filling",
  "comment-filling",
  "check-item-filling",
  "clock-filling",
  "delete-filling",
  "decline-filling",
  "dynamic-filling",
  "intermediate-filling",
  "favorite-filling",
  "layout-filling",
  "help-filling",
  "history-filling",
  "filter-filling",
  "file-common-filling",
  "news-filling",
  "edit-filling",
  "fullscreen-expand-filling",
  "smile-filling",
  "rise-filling",
  "picture-filling",
  "notification-filling",
  "user-filling",
  "setting-filling",
  "switch-filling",
  "work-filling",
  "task-filling",
  "success-filling",
  "warning-filling",
  "folder-filling",
  "map-filling",
  "prompt-filling",
  "meh-filling",
  "cry-filling",
  "top-filling",
  "home-filling",
  "sorting",
];
</script>
