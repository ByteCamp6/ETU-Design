"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
function tryOnScopeDispose(fn) {
  if (vue.getCurrentScope()) {
    vue.onScopeDispose(fn);
    return true;
  }
  return false;
}
exports.tryOnScopeDispose = tryOnScopeDispose;
