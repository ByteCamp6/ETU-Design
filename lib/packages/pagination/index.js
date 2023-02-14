"use strict";
const pagination = require("./src/pagination.js");
pagination.install = (app) => {
  app.component(pagination.name, pagination);
};
module.exports = pagination;
