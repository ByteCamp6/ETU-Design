"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const table = require("../../tokens/table.js");
const useTable = () => vue.inject(table.TableKey, void 0);
exports.useTable = useTable;
