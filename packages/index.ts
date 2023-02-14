// 整合所有组件
import Link from "./link";
import Button from "./button";
import Divider from "./divider";
import breadcrumb from "./breadcrumb";
import Icon from "./icon";
import Tag from "./tag";
import select from "./select";
import checkbox from "./checkbox";
import radio from "./radio";
import Switch from "./switch";
import Empty from "./empty";
import Upload from "./upload";
import Progress from "./progress";
import collapse from "./collapse";
import Drawer from "./drawer";
import Overlay from "./overlay";
import Avatar from "./avatar";
import Dialog from "./dialog";
import Input from "./input";
import scrollbar from "./scrollbar";
import Row from "./row/index";
import Col from "./col/index";
import Pagination from "./pagination";
import Table from "./table";
import DatePicker from "./date-picker";
import Popper from "./popper";
import Tree from "./tree";
import type { App } from "vue";

const { Breadcrumb, BreadcrumbItem } = breadcrumb;
const { Checkbox, CheckboxGroup } = checkbox;
const { Radio, RadioGroup } = radio;
const { Select, Option, OptionGroup } = select;
const { Collapse, CollapseItem } = collapse;
const { Scrollbar } = scrollbar;

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
  Input,
  Button,
  Upload,
  Switch,
  Collapse,
  CollapseItem,
  Drawer,
  Overlay,
  Avatar,
  Dialog,
  Scrollbar,
  Row,
  Col,
  Pagination,
  Table,
  DatePicker,
  Popper,
  Tree,
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
