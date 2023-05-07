import "./link/index.js";
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
import "./input/index.js";
import scrollbar from "./scrollbar/index.js";
import "./row/index.js";
import "./col/index.js";
import "./table/index.js";
import "./date-picker/index.js";
import "./popper/index.js";
import "./tree/index.js";
import "./form/index.js";
import dropdown from "./dropdown/index.js";
import "./pagination/index.js";
import "./menu-group/index.js";
import "./menu-group-item/index.js";
import _sfc_main from "./divider/src/divider.vue.js";
import _sfc_main$2 from "./tag/src/tag.vue.js";
import _sfc_main$4 from "./empty/src/empty.vue.js";
import _sfc_main$5 from "./link/src/link.vue.js";
import _sfc_main$7 from "./button/src/button.vue.js";
import _sfc_main$8 from "./upload/src/upload.vue.js";
import _sfc_main$9 from "./switch/src/switch.vue.js";
import _sfc_main$a from "./drawer/src/drawer.vue.js";
import _sfc_main$c from "./avatar/src/avatar.vue.js";
import _sfc_main$d from "./dialog/src/dialog.vue.js";
import _sfc_main$e from "./row/src/row.vue.js";
import _sfc_main$f from "./col/src/col.vue.js";
import Pagination from "./pagination/src/pagination.js";
import _sfc_main$g from "./table/src/table.vue.js";
import _sfc_main$h from "./date-picker/src/date-picker.vue.js";
import _sfc_main$j from "./tree/src/tree.vue.js";
import _sfc_main$k from "./form/src/form.vue.js";
import _sfc_main$l from "./form/src/form-item.vue.js";
import _sfc_main$m from "./menu-group/src/menuGroup.vue.js";
import _sfc_main$n from "./menu-group-item/src/menuGroupItem.vue.js";
import _sfc_main$1 from "./icon/src/icon.vue.js";
import _sfc_main$3 from "./progress/src/progress.vue.js";
import _sfc_main$6 from "./input/src/input.vue.js";
import _sfc_main$b from "./overlay/src/overlay.vue.js";
import _sfc_main$i from "./popper/src/popper.vue.js";
const { Breadcrumb, BreadcrumbItem } = breadcrumb;
const { Checkbox, CheckboxGroup } = checkbox;
const { Radio, RadioGroup } = radio;
const { Select, Option, OptionGroup } = select;
const { Collapse, CollapseItem } = collapse;
const { Scrollbar } = scrollbar;
const { DropDown, DropDownItem, DropDownMenu } = dropdown;
const components = [
  _sfc_main,
  Breadcrumb,
  BreadcrumbItem,
  _sfc_main$1,
  _sfc_main$2,
  Select,
  Option,
  OptionGroup,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  _sfc_main$3,
  _sfc_main$4,
  _sfc_main$5,
  _sfc_main$6,
  _sfc_main$7,
  _sfc_main$8,
  _sfc_main$9,
  Collapse,
  CollapseItem,
  _sfc_main$a,
  _sfc_main$b,
  _sfc_main$c,
  _sfc_main$d,
  Scrollbar,
  _sfc_main$e,
  _sfc_main$f,
  Pagination,
  _sfc_main$g,
  _sfc_main$h,
  _sfc_main$i,
  _sfc_main$j,
  _sfc_main$k,
  _sfc_main$l,
  DropDown,
  DropDownItem,
  DropDownMenu,
  Pagination,
  _sfc_main$m,
  _sfc_main$n,
];
const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
const index = {
  install,
};
export { index as default };
