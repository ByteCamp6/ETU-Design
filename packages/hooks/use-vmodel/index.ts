import { ref, watch, getCurrentInstance } from "vue";
import type { UnwrapRef } from "vue";

type Emit = (event: string, ...args: any[]) => void;

export function useVmodel<P extends object, K extends keyof P>(
  props: P,
  key?: K,
  emit?: Emit,
) {
  const vm = getCurrentInstance();
  const _emit = emit || vm?.emit;
  if (!key) {
    key = "modelValue" as K;
  }
  const event = `update:${key!.toString()}`;
  const proxy = ref(props[key]);
  watch(
    () => props[key!],
    (v) => (proxy.value = v as UnwrapRef<P[K]>),
  );
  watch(
    () => proxy.value,
    (v) => {
      if (v !== props[key!]) {
        _emit!(event, v);
      }
    },
  );
  return proxy;
}
