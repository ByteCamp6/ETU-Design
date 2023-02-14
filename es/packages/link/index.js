import _sfc_main from "./src/link.vue.js";
console.log(_sfc_main, "???");
_sfc_main.install = (app) => {
  app.component(_sfc_main.name, _sfc_main);
};
export {
  _sfc_main as default
};
