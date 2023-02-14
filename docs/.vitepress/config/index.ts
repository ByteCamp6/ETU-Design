import { defineConfig } from 'vitepress'
import nav from './nav';
import markdown from './markdown';
import sidebar from './sidebar';


export default defineConfig({
  title: 'ETU组件库',
  // description: ' vue-cc-ui 组件库',
  // lastUpdated: true,
  // head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
  markdown,
  themeConfig: {
    sidebar,
    nav,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    logo: '/logo.svg'
  },
})