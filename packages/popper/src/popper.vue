<template>
  <div
    class="inline-block"
    :style="interactiveStyle"
    @mouseleave="hover && closePopper()"
    ref="popperContainerNode"
  >
    <div
      ref="triggerNode"
      @mouseover="hover && openPopper()"
      @click="togglePopper"
      @focus="openPopper"
      @keyup.esc="closePopper"
    >
      <!-- The default slot to trigger the popper  -->
      <slot />
    </div>
    <Transition name="fade">
      <div
        @click="!interactive && closePopper()"
        v-show="shouldShowPopper"
        class="popper"
        ref="popperNode"
      >
        <slot name="content" :close="close" :isOpen="modifiedIsOpen">
          {{ content }}
        </slot>
        <!--        <Arrow v-if="arrow" />-->
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
// import Arrow from "./Arrow.vue";
import { useTimeoutFn } from "@etu-design/hooks";
const emit = defineEmits(["open:popper", "close:popper"]);
const slots = useSlots();
const props = defineProps({
  /**
   * Preferred placement (the "auto" placements will choose the side with most space.)
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
   * Disables automatically closing the popover when the user clicks away from it
   */
  disableClickAway: {
    type: Boolean,
    default: false,
  },
  /**
   * Offset in pixels along the trigger element
   */
  offsetSkid: {
    type: String,
    default: "0",
  },
  /**
   * Offset in pixels away from the trigger element
   */
  offsetDistance: {
    type: String,
    default: "12",
  },
  /**
   * Trigger the popper on hover
   */
  hover: {
    type: Boolean,
    default: false,
  },
  /**
   * Manually open/close the Popper, other events are ignored if this prop is set
   */
  show: {
    type: Boolean,
    default: null,
  },
  /**
   * Disables the Popper. If it was already open, it will be closed.
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * Open the Popper after a delay (ms).
   */
  openDelay: {
    type: Number,
    default: 0,
  },
  /**
   * Close the Popper after a delay (ms).
   */
  closeDelay: {
    type: Number,
    default: 0,
  },
  /**
   * The z-index of the Popper.
   */
  zIndex: {
    type: [Number, String],
    default: 9999,
  },
  /**
   * Display an arrow on the popper
   */
  arrow: {
    type: Boolean,
    default: false,
  },
  /**
   * Stop arrow from reaching the edge of the popper
   */
  arrowPadding: {
    type: String,
    default: "0",
  },
  /**
   * If the Popper should be interactive, it will close when clicked/hovered if false
   */
  interactive: {
    type: Boolean,
    default: true,
  },
  /**
   * Lock the Popper into place, it will not flip dynamically when it runs out of space if true
   */
  locked: {
    type: Boolean,
    default: false,
  },
  /**
   * If the content is just a simple string, it can be passed in as a prop
   */
  content: {
    type: String,
    default: "",
  },
});
const popperContainerNode = ref(null) as Ref<HTMLElement>;
const popperNode = ref(null) as Ref<HTMLElement>;
const triggerNode = ref(null) as Ref<HTMLElement>;
const modifiedIsOpen = ref(false);
onMounted(() => {
  const children = slots.default?.();
  if (children && children.length > 1) {
    return console.error(
      `[Popper]: The <Popper> component expects only one child element at its root. You passed ${children.length} child nodes.`,
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
  popperNode,
  triggerNode,
});
const { hasContent } = useContent(slots, popperNode, content!);
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
  console.log(manualMode.value);
  if (invalid.value || manualMode.value) {
    return;
  }
  console.log(22);
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
 * Watch for manual mode.
 */
watchEffect(() => {
  if (manualMode.value) {
    props.show ? doOpen() : doClose();
  }
});
/**
 * Use click away if it should be enabled.
 */
watchEffect(() => {
  if (enableClickAway.value) {
    useClickAway(popperContainerNode, closePopper);
  }
});
</script>

<style scoped>
.inline-block {
  display: inline-block;
}
.popper {
  transition: background 250ms ease-in-out;
  background: #ffffff;
  padding: 16px;
  color: inherit;
  border-radius: 6px;
  border-width: 1px;
  border-style: solid;
  border-color: #eeeeee;
  box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
  z-index: v-bind(zIndex);
}
.popper:hover,
.popper:hover > #arrow::before {
  background: #ffffff;
}
.inline-block {
  display: inline-block;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
