"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const pagination = require("../../tokens/pagination.js");
const vue = require("vue");
const usePagination = () => vue.inject(pagination.PaginationKey, {});
exports.usePagination = usePagination;
