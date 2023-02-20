import type { InjectionKey } from "vue";
// import type { DropDownProps } from "../dropdown";

export interface dropdounProvide {
  handleMousedown: any;
}
export const dropdownKey: InjectionKey<any> = Symbol("dropdownKey");
