import { useProp } from "../use-prop/index.js";
import { computed, unref } from "vue";
const useDisabled = (fallback) => {
  const disabled = useProp("disabled");
  return computed(() => disabled.value || unref(fallback) || false);
};
export { useDisabled };
