import Pagination from "./src/pagination.js";
Pagination.install = (app) => {
  app.component(Pagination.name, Pagination);
};
export {
  Pagination as default
};
