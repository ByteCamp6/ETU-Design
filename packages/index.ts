// 整合所有组件
import Button from "./button/index";
import Divider from "./divider/index";
import breadcrumb from "./breadcrumb/index";
import Icon from "./icon/index";
import Tag from "./tag/index";
import select from "./select/index";
import type { App } from "vue";

const { Breadcrumb, BreadcrumbItem } = breadcrumb;
const { Select, Option } = select;

// 全部引入
const components = [
  Button,
  Divider,
  Breadcrumb,
  BreadcrumbItem,
  Icon,
  Tag,
  Select,
  Option,
];

// 全局动态添加
const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
// 全局注册
export default {
  install,
};
