<template>
  <div
    :class="[ns.b()]"
    :style="interactiveStyle"
    @mouseleave="hover && closePopper()"
    ref="popperContainerRef"
  >
    <div
      ref="triggerRef"
      @mouseover="hover && openPopper()"
      @click="togglePopper"
      @focus="openPopper"
      @keyup.esc="closePopper"
    >
      <slot />
    </div>
    <Transition name="popper-fade">
      <div
        @click="!interactive && closePopper()"
        v-show="shouldShowPopper"
        :class="ns.e('content')"
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
import { usePopper, useContent, useClickAway } from "./composables";
import Arrow from "./arrow.vue";
import { useNamespace, useTimeoutFn, useZIndex } from "@etu-design/hooks";
const ns = useNamespace("popper");
const emit = defineEmits(["open:popper", "close:popper"]);
const slots = useSlots();
const props = defineProps({
  /**
   * 首选放置位置("auto"将选择空间最大的一侧。)
   */
  placement: {
    type: String,
    default: "bottom",
    validator: (value: string) => {
      return (
        [
          "auto",
          "auto-start",
          "auto-end",
          "top",
          "top-start",
          "top-end",
          "bottom",
          "bottom-start",
          "bottom-end",
          "right",
          "right-start",
          "right-end",
          "left",
          "left-start",
          "left-end",
        ].indexOf(value) !== -1
      );
    },
  },
  /**
   * 禁用当用户单击弹出窗口时自动关闭它
   */
  disableClickAway: {
    type: Boolean,
    default: false,
  },
  /**
   * 沿触发器元素的偏移（以像素为单位）
   */
  offsetSkid: {
    type: String,
    default: "0",
  },
  /**
   * 距触发元素的偏移（以像素为单位）
   */
  offsetDistance: {
    type: String,
    default: "12",
  },
  /**
   * 悬停时触发弹出按钮
   */
  hover: {
    type: Boolean,
    default: false,
  },
  /**
   * 手动打开Popper，如果设置了此属性，则忽略其他事件
   */
  show: {
    type: Boolean,
    default: null,
  },
  /**
   * 禁用Popper。如果它已经打开，它将关闭。
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * 延迟（ms）后打开Popper。
   */
  openDelay: {
    type: Number,
    default: 0,
  },
  /**
   * 延迟（ms）后关闭Popper。
   */
  closeDelay: {
    type: Number,
    default: 0,
  },
  /**
   * Popper的z-index
   */
  zIndex: {
    type: [Number, String],
  },
  /**
   * 在Popper上显示箭头
   */
  arrow: {
    type: Boolean,
    default: false,
  },
  /**
   * 箭头到popper的距离
   */
  arrowPadding: {
    type: String,
    default: "0",
  },
  /**
   * 如果Popper应该是交互式的，如果为false，则当单击悬停时将关闭
   */
  interactive: {
    type: Boolean,
    default: true,
  },
  /**
   * 是否会自动动态翻转
   */
  locked: {
    type: Boolean,
    default: false,
  },
  /**
   * 如果内容只是一个简单的字符串，它可以作为prop传入
   */
  content: {
    type: String,
    default: "",
  },
});
const popperContainerRef = ref(null) as Ref<HTMLElement>;
const popperRef = ref(null) as Ref<HTMLElement>;
const triggerRef = ref(null) as Ref<HTMLElement>;
const modifiedIsOpen = ref(false);
const { nextZIndex } = useZIndex();
const innerZIndex = ref(props.zIndex ? props.zIndex : nextZIndex());
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

// Dialog 打开/关闭的延时时间，单位毫秒
let openTimer: (() => void) | undefined = undefined;
let closeTimer: (() => void) | undefined = undefined;
const openPopper = () => {
  if (invalid.value || manualMode.value) {
    return;
  }
  doOpen();
};
const closePopper = () => {
  if (manualMode.value) {
    return;
  }
  doClose();
};

const doOpen = () => {
  closeTimer?.();
  openTimer?.();
  if (props.openDelay && props.openDelay > 0) {
    ({ stop: openTimer } = useTimeoutFn(() => open(), props.openDelay));
  } else {
    open();
  }
};

const doClose = () => {
  openTimer?.();
  closeTimer?.();

  if (props.closeDelay && props.closeDelay > 0) {
    ({ stop: closeTimer } = useTimeoutFn(() => close(), props.closeDelay));
  } else {
    close();
  }
};
const togglePopper = () => {
  console.log(isOpen.value);
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

defineExpose({
  popperContainerRef,
  popperRef,
  triggerRef,
});
</script>
