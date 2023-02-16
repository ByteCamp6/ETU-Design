import DropDown from "./src/dropdown.vue";
import DropDownItem from "./src/dropdown-item.vue";
import DropDownMenu from "./src/dropdown-menu.vue";
import type { App } from "vue";

DropDown.install = (app: App) => {
  // 注册组件
  app.component(DropDown.name, DropDown);
};
DropDownItem.install = (app: App) => {
  // 注册组件
  app.component(DropDownItem.name, DropDownItem);
};
DropDownMenu.install = (app: App) => {
  // 注册组件
  app.component(DropDownMenu.name, DropDownMenu);
};

export default { DropDown, DropDownItem, DropDownMenu };
