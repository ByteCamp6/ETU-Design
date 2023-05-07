"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const checkbox = require("../../../tokens/checkbox.js");
const types = require("../../../utils/types.js");
const shared_esmBundler = require("../../../../node_modules/@vue/shared/dist/shared.esm-bundler.js");
const useCheckboxModel = (props) => {
  const selfModel = vue.ref(null);
  const { emit } = vue.getCurrentInstance();
  const checkboxGroup = vue.inject(checkbox.checkboxGroupContextKey, void 0);
  const isGroup = vue.computed(
    () => types.isUndefined(checkboxGroup) === false,
  );
  const isLimitExceeded = vue.ref(false);
  const model = vue.computed({
    get() {
      var _a;
      return isGroup.value
        ? (_a = checkboxGroup == null ? void 0 : checkboxGroup.modelValue) ==
          null
          ? void 0
          : _a.value
        : props.modelValue ?? selfModel.value;
    },
    set(val) {
      var _a, _b;
      if (isGroup.value && shared_esmBundler.isArray(val)) {
        isLimitExceeded.value =
          ((_a = checkboxGroup == null ? void 0 : checkboxGroup.max) == null
            ? void 0
            : _a.value) !== void 0 &&
          val.length >
            (checkboxGroup == null ? void 0 : checkboxGroup.max.value);
        isLimitExceeded.value === false &&
          ((_b = checkboxGroup == null ? void 0 : checkboxGroup.changeEvent) ==
          null
            ? void 0
            : _b.call(checkboxGroup, val));
      } else {
        emit("update:modelValue", val);
        selfModel.value = val;
      }
    },
  });
  return {
    model,
    isGroup,
    isLimitExceeded,
  };
};
exports.useCheckboxModel = useCheckboxModel;
