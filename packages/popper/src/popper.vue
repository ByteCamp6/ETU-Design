<template>
  <span
    ref="triggerRef"
    @click="togglePopper"
    @focus="openPopper"
    @keyup.esc="closePopper"
    @mouseover="hover && openPopper()"
    @mouseleave="hover && closePopper()"
  >
    <slot />
  </span>
  <Teleport to="body">
    <div
      :class="[ns.b()]"
      :style="interactiveStyle"
      @mouseover="hover && openPopper()"
      @mouseleave="hover && closePopper()"
      ref="popperContainerRef"
    >
      <Transition name="popper-fade">
        <div
          @click="!interactive && closePopper()"
          v-show="shouldShowPopper"
          :class="contentCls"
          :style="{ zIndex: innerZIndex }"
          ref="popperRef"
        >
          <slot name="content" :close="close" :isOpen="modifiedIsOpen">
            {{ content }}
          </slot>
          <Arrow v-if="arrow" />
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<script lang="ts" setup name="EtuPopper">
import {
  ref,
  computed,
  useSlots,
  toRefs,
  watch,
  watchEffect,
  onMounted,
} from "vue";
import type { Ref } from "vue";
import {
  usePopper,
  useContent,
  useClickAway,
  useTimeEvent,
} from "./composables";
import Arrow from "./arrow.vue";
import { useNamespace, useZIndex } from "@etu-design/hooks";
import { popperProps } from "./popper";
import type { PopperExpose } from "./popper";
const ns = useNamespace("popper");
const emit = defineEmits(["open", "close"]);
const slots = useSlots();
const props = defineProps(popperProps);
const popperContainerRef = ref(null) as Ref<HTMLElement>;
const popperRef = ref(null) as Ref<HTMLElement>;
const triggerRef = ref(null) as Ref<HTMLElement>;
const modifiedIsOpen = ref(false);
const { nextZIndex } = useZIndex();
const innerZIndex = ref(props.zIndex ? props.zIndex : nextZIndex());
const contentCls = computed(() => {
  return [ns.e("content"), ns.is("canclePadding", props.canclePadding)];
});
console.log(contentCls, "??contentCls");
onMounted(() => {
  const children = slots.default?.();
  if (children && children.length > 1) {
    return console.error(
      `[Popper]: 该Popper组件只能有一个子节点，你传入了${children.length}个节点.`,
    );
  }
});
const {
  arrowPadding,
  content,
  disabled,
  locked,
  offsetDistance,
  offsetSkid,
  placement,
} = toRefs(props);

// @ts-ignore
const { isOpen, open, close } = usePopper({
  arrowPadding,
  emit,
  locked,
  offsetDistance,
  offsetSkid,
  placement,
  popperRef,
  triggerRef,
});
const { hasContent } = useContent(slots, popperRef, content!);
const manualMode = computed(() => props.show !== null);
const invalid = computed(() => disabled!.value || !hasContent.value);
const shouldShowPopper = computed(() => isOpen.value && !invalid.value);
const enableClickAway = computed(
  () => !props.disableClickAway && !manualMode.value,
);
// Add an invisible border to keep the Popper open when hovering from the trigger into it
const interactiveStyle = computed(() =>
  props.interactive
    ? `border: ${offsetDistance!.value}px solid transparent; margin: -${
        offsetDistance!.value
      }px;`
    : null,
);

const { openPopper, closePopper, doClose, doOpen } = useTimeEvent(
  props,
  manualMode,
  invalid,
  open,
  close,
);

const togglePopper = () => {
  if (props.hover) {
    return;
  }
  isOpen.value ? closePopper() : openPopper();
};
/**
 * 如果Popper是打开的，如果它被禁用或没有内容，我们会自动关闭它
 */
watch([hasContent, disabled], ([hasContent, disabled]) => {
  if (isOpen.value && (!hasContent || disabled)) {
    close();
  }
});
/**
 * 为了消除在使用isOpen插槽属性时由于转换而产生的闪烁或明显的空Poppers，我们需要基于isOpen返回一个单独的反跳值。
 */
watch(isOpen, (isOpen) => {
  if (isOpen) {
    modifiedIsOpen.value = true;
  } else {
    setTimeout(() => {
      modifiedIsOpen.value = false;
    }, 200);
  }
});
/**
 * 观察手动模式.
 */
watchEffect(() => {
  if (manualMode.value) {
    props.show ? doOpen() : doClose();
  }
});
/**
 * 观察是否允许点击外部关闭.
 */
watchEffect(() => {
  if (enableClickAway.value) {
    useClickAway(popperContainerRef, closePopper);
  }
});

defineExpose<PopperExpose>({
  popperContainerRef,
  popperRef,
  triggerRef,
  isOpen,
  doOpen,
  doClose,
  open,
  close,
});
</script>
