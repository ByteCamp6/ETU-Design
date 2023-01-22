import { useProp } from "../use-prop";
import { computed, unref } from "vue";
import type { Ref } from "vue";

type MaybeRef<T> = T | Ref<T>;

/**
 * @description useDisabled是一个hooks，通过判断其prop是否有disabled属性，以及其fallback是否为假得出组件是否被禁用
 * @param fallback 一个可能为Ref/Computed或者原始值的值
 */
export const useDisabled = (fallback?: MaybeRef<boolean | undefined>) => {
  const disabled = useProp<boolean>("disabled");
  // unref()如果参数是一个 ref 则返回它的 value，否则返回参数本身
  return computed(() => disabled.value || unref(fallback) || false);
};
