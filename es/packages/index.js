import { EtuLink } from "./link/index.js";
import "./button/index.js";
import "./divider/index.js";
import breadcrumb from "./breadcrumb/index.js";
import "./icon/index.js";
import "./tag/index.js";
import select from "./select/index.js";
import checkbox from "./checkbox/index.js";
import radio from "./radio/index.js";
import "./switch/index.js";
import "./empty/index.js";
import "./upload/index.js";
import "./progress/index.js";
import collapse from "./collapse/index.js";
import "./drawer/index.js";
import "./overlay/index.js";
import "./avatar/index.js";
import "./dialog/index.js";
import { EtuPopper } from "./popper/index.js";
import "./input/index.js";
import scrollbar from "./scrollbar/index.js";
import _sfc_main from "./divider/src/divider.vue.js";
import _sfc_main$2 from "./tag/src/tag.vue.js";
import _sfc_main$4 from "./empty/src/empty.vue.js";
import _sfc_main$5 from "./input/src/input.vue.js";
import Button from "./button/src/button.vue.js";
import _sfc_main$6 from "./upload/src/upload.vue.js";
import _sfc_main$7 from "./switch/src/switch.vue.js";
import _sfc_main$8 from "./drawer/src/drawer.vue.js";
import _sfc_main$a from "./avatar/src/avatar.vue.js";
import _sfc_main$b from "./dialog/src/dialog.vue.js";
import _sfc_main$1 from "./icon/src/icon.vue.js";
import _sfc_main$3 from "./progress/src/progress.vue.js";
import _sfc_main$9 from "./overlay/src/overlay.vue.js";
const { Breadcrumb, BreadcrumbItem } = breadcrumb;
const { Checkbox, CheckboxGroup } = checkbox;
const { Radio, RadioGroup } = radio;
const { Select, Option, OptionGroup } = select;
const { Collapse, CollapseItem } = collapse;
const { Scrollbar } = scrollbar;
const components = [
  _sfc_main,
  Breadcrumb,
  BreadcrumbItem,
  _sfc_main$1,
  _sfc_main$2,
  EtuLink,
  EtuPopper,
  Select,
  Option,
  OptionGroup,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  _sfc_main$3,
  _sfc_main$4,
  EtuLink,
  _sfc_main$5,
  Button,
  _sfc_main$6,
  _sfc_main$7,
  Collapse,
  CollapseItem,
  _sfc_main$8,
  _sfc_main$9,
  _sfc_main$a,
  _sfc_main$b,
  Scrollbar
];
const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
const index = {
  install
};
export {
  index as default
};
