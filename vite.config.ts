/// <reference types="vitest" />
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import vueJsxPlugin from "@vitejs/plugin-vue-jsx";
import dts from "vite-plugin-dts";
// import DefineOptions from "unplugin-vue-define-options/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueSetupExtend(),
    vueJsxPlugin(),
    dts({
      entryRoot: "./packages",
      outputDir: ["dist/es/src", "dist/lib/src"],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: "./tsconfig.json",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL(import.meta.url)),
    },
  },
  define: {
    "process.env": {},
  },
  test: {
    globals: true,
    environment: "jsdom",
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
});
