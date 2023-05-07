import Theme from "vitepress/theme";
import { ElementPlusContainer } from "@vitepress-demo-preview/component";
import "@vitepress-demo-preview/component/dist/style.css";
import "./style.scss";
import type { App } from "vue";
import ETU from "@etu-design/components";
import "@etu-design/theme-chalk/src/index.scss";

export default {
  ...Theme,
  enhanceApp({ app }: { app: App }) {
    //  注册组件
    app.component("demo-preview", ElementPlusContainer);
    app.use(ETU as any);
  },
};
