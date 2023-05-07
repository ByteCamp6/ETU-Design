"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const useCheckboxModel = require("./use-checkbox-model.js");
const useCheckboxStatus = require("./use-checkbox-status.js");
const useCheckboxDisabled = require("./use-checkbox-disabled.js");
const useCheckboxEvent = require("./use-checkbox-event.js");
require("vue");
const shared_esmBundler = require("../../../../node_modules/@vue/shared/dist/shared.esm-bundler.js");
const useCheckbox = (props, slots) => {
  const { model, isGroup, isLimitExceeded } =
    useCheckboxModel.useCheckboxModel(props);
  const { isFocused, isChecked, hasOwnLabel } =
    useCheckboxStatus.useCheckboxStatus(props, slots, { model });
  const { isDisabled } = useCheckboxDisabled.useCheckboxDisabled({
    model,
    isChecked,
  });
  const { handleChange } = useCheckboxEvent.useCheckboxEvent(props, {
    model,
    isLimitExceeded,
    hasOwnLabel,
    isDisabled,
  });
  function addToStore() {
    if (
      shared_esmBundler.isArray(model.value) &&
      !model.value.includes(props.label)
    ) {
      model.value.push(props.label);
    } else {
      model.value = true;
    }
  }
  props.checked && addToStore();
  return {
    isChecked,
    isDisabled,
    isFocused,
    hasOwnLabel,
    model,
    handleChange,
  };
};
exports.useCheckbox = useCheckbox;
