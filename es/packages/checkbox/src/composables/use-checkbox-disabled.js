import { inject, computed } from "vue";
import { isUndefined } from "../../../utils/types.js";
import { checkboxGroupContextKey } from "../../../tokens/checkbox.js";
import { useDisabled } from "../../../hooks/use-common-props/index.js";
import "../../../hooks/use-z-index/index.js";
import { isArray } from "../../../../node_modules/@vue/shared/dist/shared.esm-bundler.js";
const useCheckboxDisabled = ({ model, isChecked }) => {
  const checkboxGroup = inject(checkboxGroupContextKey, void 0);
  const isLimitDisabled = computed(() => {
    var _a, _b;
    const max =
      (_a = checkboxGroup == null ? void 0 : checkboxGroup.max) == null
        ? void 0
        : _a.value;
    const min =
      (_b = checkboxGroup == null ? void 0 : checkboxGroup.min) == null
        ? void 0
        : _b.value;
    return (
      (!isUndefined(max) &&
        isArray(model.value) &&
        model.value.length >= max &&
        !isChecked.value) ||
      (!isUndefined(min) &&
        isArray(model.value) &&
        model.value.length <= min &&
        isChecked.value)
    );
  });
  const isDisabled = useDisabled(
    computed(
      () =>
        (checkboxGroup == null ? void 0 : checkboxGroup.disabled.value) ||
        isLimitDisabled.value,
    ),
  );
  return {
    isDisabled,
    isLimitDisabled,
  };
};
export { useCheckboxDisabled };
