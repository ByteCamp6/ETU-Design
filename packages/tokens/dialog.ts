import type { CSSProperties, ComputedRef, InjectionKey, Ref } from "vue";

export type DialogContext = {
  dialogRef: Ref<HTMLElement | undefined>;
  headerRef: Ref<HTMLElement | undefined>;
  rendered: Ref<boolean>;
  style: ComputedRef<CSSProperties>;
};

export const dialogInjectionKey: InjectionKey<DialogContext> =
  Symbol("dialogInjectionKey");
