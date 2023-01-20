import { useProp } from "../use-prop";
import { computed, unref } from "vue";
import type { Ref } from "vue";

type MaybeRef<T> = T | Ref<T>;

export const useDisabled = (fallback?: MaybeRef<boolean | undefined>) => {
  const disabled = useProp<boolean>("disabled");
  return computed(() => disabled.value || unref(fallback) || false);
};
