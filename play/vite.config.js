import { defineConfig } from "vite";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue(), VueSetupExtend()],
});
