import { useCheckboxModel } from "./use-checkbox-model.js";
import { useCheckboxStatus } from "./use-checkbox-status.js";
import { useCheckboxDisabled } from "./use-checkbox-disabled.js";
import { useCheckboxEvent } from "./use-checkbox-event.js";
import "vue";
import "../../../utils/types.js";
import { isArray } from "../../../../node_modules/@vue/shared/dist/shared.esm-bundler.js";
const useCheckbox = (props, slots) => {
  const { model, isGroup, isLimitExceeded } = useCheckboxModel(props);
  const { isFocused, isChecked, hasOwnLabel } = useCheckboxStatus(
    props,
    slots,
    { model }
  );
  const { isDisabled } = useCheckboxDisabled({ model, isChecked });
  const { handleChange } = useCheckboxEvent(props, {
    model,
    isLimitExceeded,
    hasOwnLabel,
    isDisabled
  });
  function addToStore() {
    if (isArray(model.value) && !model.value.includes(props.label)) {
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
    handleChange
  };
};
export {
  useCheckbox
};
