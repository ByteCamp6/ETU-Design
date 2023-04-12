import Avatar from "./src/avatar.vue";
import type { App } from "vue";

Avatar.install = (app: App) => {
  app.component(Avatar.name, Avatar);
};

export default Avatar;
export * from "./src/avatar";
