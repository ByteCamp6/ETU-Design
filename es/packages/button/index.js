import Button from "./src/button.vue.js";
Button.install = (app) => {
  app.component(Button.name, Button);
};
export {
  Button as default
};
