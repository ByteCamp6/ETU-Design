import { componentPreview, containerPreview } from "@vitepress-demo-preview/plugin";


interface IMd {
  use: (cb: any) => any
}

export default {
  theme: {
    light: 'vitesse-light',
    dark: 'vitesse-dark'
  },
  lineNumbers: true,
  config(md: IMd) {
    md.use(componentPreview)
    md.use(containerPreview)
  }
}