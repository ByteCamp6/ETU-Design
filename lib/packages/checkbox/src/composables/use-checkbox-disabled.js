"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const types = require("../../../utils/types.js");
const shared_esmBundler = require("../../../../node_modules/@vue/shared/dist/shared.esm-bundler.js");
const checkbox = require("../../../tokens/checkbox.js");
const index = require("../../../hooks/use-common-props/index.js");
require("../../../hooks/use-z-index/index.js");
const useCheckboxDisabled = ({
  model,
  isChecked
}) => {
  const checkboxGroup = vue.inject(checkbox.checkboxGroupContextKey, void 0);
  const isLimitDisabled = vue.computed(() => {
    var _a, _b;
    const max = (_a = checkboxGroup == null ? void 0 : checkboxGroup.max) == null ? void 0 : _a.value;
    const min = (_b = checkboxGroup == null ? void 0 : checkboxGroup.min) == null ? void 0 : _b.value;
    return !types.isUndefined(max) && shared_esmBundler.isArray(model.value) && model.value.length >= max && !isChecked.value || !types.isUndefined(min) && shared_esmBundler.isArray(model.value) && model.value.length <= min && isChecked.value;
  });
  const isDisabled = index.useDisabled(
    vue.computed(() => (checkboxGroup == null ? void 0 : checkboxGroup.disabled.value) || isLimitDisabled.value)
  );
  return {
    isDisabled,
    isLimitDisabled
  };
};
exports.useCheckboxDisabled = useCheckboxDisabled;
