import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueSetupExtend from "vite-plugin-vue-setup-extend";

export default defineConfig({
  plugins: [
    // 添加JSX插件
    vueJsx(),
    VueSetupExtend(),
  ],
  server: {
    port: 3000,
  },
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
