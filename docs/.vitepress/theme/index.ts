import Theme from "vitepress/theme";
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import './style.css'
import type { App } from 'vue'

import Tag from "../../../packages/tag/src/tag.vue";
import '../../../packages/theme-chalk/src/tag.scss'

export default {
  ...Theme,
  enhanceApp({ app }: { app: App }) {
    //  注册组件
    app.component('demo-preview', ElementPlusContainer)
    app.component('EtuTag',Tag)
  },
};