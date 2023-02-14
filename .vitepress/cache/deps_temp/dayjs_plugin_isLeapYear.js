import {
  __commonJS
} from "./chunk-RSJERJUL.js";

// node_modules/dayjs/plugin/isLeapYear.js
var require_isLeapYear = __commonJS({
  "node_modules/dayjs/plugin/isLeapYear.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isLeapYear = t();
    }(exports, function() {
      "use strict";
      return function(e, t) {
        t.prototype.isLeapYear = function() {
          return this.$y % 4 == 0 && this.$y % 100 != 0 || this.$y % 400 == 0;
        };
      };
    });
  }
});
export default require_isLeapYear();
//# sourceMappingURL=dayjs_plugin_isLeapYear.js.map
