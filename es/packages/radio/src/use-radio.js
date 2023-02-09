import { getCurrentInstance, ref, inject, computed } from "vue";
import { radioGroupKey } from "../../tokens/radio.js";
import { useDisabled } from "../../hooks/use-common-props/index.js";
import { isUndefined } from "../../utils/types.js";
import "../../hooks/use-z-index/index.js";
const useRadio = (props) => {
  const { emit } = getCurrentInstance();
  const radioRef = ref();
  const radioGroup = inject(radioGroupKey, void 0);
  const isGroup = computed(() => isUndefined(radioGroup) === false);
  const modelValue = computed({
    get() {
      var _a;
      return isGroup.value ? (_a = radioGroup.modelValue) == null ? void 0 : _a.value : props.modelValue;
    },
    set(val) {
      if (isGroup.value) {
        radioGroup.changeEvent(val);
      } else {
        emit && emit("update:modelValue", val);
      }
      radioRef.value.checked = props.modelValue === props.label;
    }
  });
  const disabled = useDisabled(computed(() => {
    var _a;
    return (_a = radioGroup == null ? void 0 : radioGroup.disabled) == null ? void 0 : _a.value;
  }));
  const focus = ref(false);
  return {
    radioRef,
    isGroup,
    radioGroup,
    focus,
    disabled,
    modelValue
  };
};
export {
  useRadio
};
