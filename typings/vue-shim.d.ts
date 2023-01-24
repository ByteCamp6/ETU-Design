// vue文件类型声明
// declare module "*.vue" {
//   import { DefineComponent } from "vue";
//   const component: DefineComponent;
//   export default component;
// }
declare module "*.vue" {
  import { defineComponent, App } from "vue";
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void;
  };
  export default component;
}

