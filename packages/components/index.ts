// 整合所有组件
export * from "./link";
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
import Table from "./table";
import DatePicker from "./date-picker";
import Popper from "./popper";
import Tree from "./tree";
import { Form } from "./form";
import { FormItem } from "./form";
import dropdown from "./dropdown";
import Pagination from "./pagination";
import MenuGroup from "./menu-group";
import MenuGroupItem from "./menu-group-item";
import Text from "./text";
import Affix from "./affix";
import type { App } from "vue";
const { Breadcrumb, BreadcrumbItem } = breadcrumb;
const { Checkbox, CheckboxGroup } = checkbox;
const { Radio, RadioGroup } = radio;
const { Select, Option, OptionGroup } = select;
const { Collapse, CollapseItem } = collapse;
const { Scrollbar } = scrollbar;
const { DropDown, DropDownItem, DropDownMenu } = dropdown;

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
  Form,
  FormItem,
  DropDown,
  DropDownItem,
  DropDownMenu,
  Pagination,
  MenuGroup,
  MenuGroupItem,
  Text,
  Affix,
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
