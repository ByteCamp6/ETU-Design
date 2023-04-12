import _DropDown from "./src/dropdown.vue";
import _DropDownItem from "./src/dropdown-item.vue";
import _DropDownMenu from "./src/dropdown-menu.vue";
import type { App, Plugin } from "vue";
type SFCWithInstall<T> = T & Plugin & { name: string };
const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    const name = (comp as SFCWithInstall<T>).name;
    app.component(name, comp as SFCWithInstall<T>);
  };
  return comp as SFCWithInstall<T>;
};
const DropDown = withInstall(_DropDown);
const DropDownItem = withInstall(_DropDownItem);
const DropDownMenu = withInstall(_DropDownMenu);
export default { DropDown, DropDownItem, DropDownMenu };
export * from "./src/dropdown";
