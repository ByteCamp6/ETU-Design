// 整合所有组件
import Link from "./link/index";
import Button from "./button/index";
import Divider from "./divider/index";
import breadcrumb from "./breadcrumb/index";
import Icon from "./icon/index";
import Tag from "./tag/index";
import select from "./select/index";
import checkbox from "./checkbox";
import radio from "./radio";
import Switch from "./switch/index";
import Empty from "./empty";
import Upload from "./upload";
import Progress from "./progress";
import collapse from "./collapse";
import Drawer from "./drawer";
import Overlay from "./overlay";
import type { App } from "vue";

const { Breadcrumb, BreadcrumbItem } = breadcrumb;
const { Checkbox, CheckboxGroup } = checkbox;
const { Radio, RadioGroup } = radio;
const { Select, Option, OptionGroup } = select;
const { Collapse, CollapseItem } = collapse;

// 全部引入
const components = [
  Divider,
  Breadcrumb,
  BreadcrumbItem,
  Icon,
  Tag,
  Select,
  Option,
  OptionGroup,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Progress,
  Empty,
  Link,
  Button,
  Upload,
  Switch,
  Collapse,
  CollapseItem,
  Drawer,
  Overlay,
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
