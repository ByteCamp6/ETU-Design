import type { Ref } from "vue";

export type MaybeRef<T> = Ref<T> | T;
export type MaybeUndefinedRef<T> = Ref<T | undefined>;
