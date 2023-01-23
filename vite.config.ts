/// <reference types="vitest" />
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueSetupExtend from "vite-plugin-vue-setup-extend";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueSetupExtend()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL(import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
