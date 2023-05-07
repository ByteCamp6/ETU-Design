import { ref, getCurrentInstance, inject, computed } from "vue";
import { checkboxGroupContextKey } from "../../../tokens/checkbox.js";
import { isUndefined } from "../../../utils/types.js";
import { isArray } from "../../../../node_modules/@vue/shared/dist/shared.esm-bundler.js";
const useCheckboxModel = (props) => {
  const selfModel = ref(null);
  const { emit } = getCurrentInstance();
  const checkboxGroup = inject(checkboxGroupContextKey, void 0);
  const isGroup = computed(() => isUndefined(checkboxGroup) === false);
  const isLimitExceeded = ref(false);
  const model = computed({
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
      if (isGroup.value && isArray(val)) {
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
export { useCheckboxModel };
