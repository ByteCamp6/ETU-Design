// vue文件类型声明
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
// declare module "*.vue" {
//   import { defineComponent, App } from "vue";
//   const component: ReturnType<typeof defineComponent> & {
//     install(app: App): void;
//   };
//   export default component;
// }
