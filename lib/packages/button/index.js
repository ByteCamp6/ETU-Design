"use strict";
const button = require("./src/button.vue.js");
button.install = (app) => {
  app.component(button.name, button);
};
module.exports = button;
