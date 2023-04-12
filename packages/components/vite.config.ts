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
      entryRoot: "index.ts",
      outputDir: [
        "../../dist/es/packages/components/index",
        "../../dist/lib/packages/components/index",
      ],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: "../../tsconfig.json",
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
  build: {
    target: "modules",
    //打包文件目录
    outDir: "es",
    //压缩
    minify: false,
    //css分离
    //cssCodeSplit: true,
    rollupOptions: {
      //忽略打包vue文件
      external: ["vue", /\.scss/, /\.scss/, /\.css/],
      input: ["index.ts"],
      output: [
        {
          format: "es",
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: "[name].mjs",
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: "../../dist/es",
          preserveModulesRoot: "packages",
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: "../../dist/lib",
          preserveModulesRoot: "packages",
        },
      ],
    },
    lib: {
      entry: "./index.ts",
      formats: ["es", "cjs"],
    },
  },
});
