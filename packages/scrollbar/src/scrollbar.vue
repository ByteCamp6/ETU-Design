<template>
  <div :class="ns.b()">
    <div
      ref="wrap"
      :class="[
        ns.e('wrapper'),
        { [ns.em('wrapper', 'hidden-default')]: !native },
      ]"
      :style="wrapperStyle"
      @scroll="handleScroll"
    >
      <div :class="ns.e('view')" ref="view">
        <slot />
      </div>
    </div>
    <bar
      v-if="!native"
      :always="always"
      :width="sizeWidth"
      :height="sizeHeight"
      :ratioX="ratioX"
      :ratioY="ratioY"
      ref="barRef"
    ></bar>
  </div>
</template>

<script lang="ts">
export default {
  name: "EtuScrollbar",
};
</script>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, onUpdated, nextTick } from "vue";
import { useNamespace } from "@etu-design/hooks";
import { scrollbarProps, scrollbarEmits } from "./scrollbar";
import { _throttle } from "@etu-design/utils";
import bar from "./bar.vue";

const props = defineProps(scrollbarProps);
const emit = defineEmits(scrollbarEmits);
const wrap = ref<HTMLDivElement>();
const view = ref<HTMLDivElement>();
const barRef = ref<HTMLDivElement>();
const ns = useNamespace("scrollbar");

const ratioY = ref(1);
const ratioX = ref(1);
const sizeWidth = ref("0");
const sizeHeight = ref("0");

const wrapperStyle = computed(() => {
  return {
    height:
      typeof props.height === "number" ? props.height + "px" : props.height,
    maxHeight:
      typeof props.maxHeight === "number"
        ? props.maxHeight + "px"
        : props.maxHeight,
  };
});

const handleScroll = () => {
  if (!props.native) return;
  if (wrap.value) {
    barRef.value?.handleScroll(wrap.value);

    emit("scroll", {
      scrollTop: wrap.value.scrollTop,
      scrollLeft: wrap.value.scrollLeft,
    });
  }
};

const update = () => {
  if (!wrap.value || props?.native) return;
  const offsetHeight = wrap.value.offsetHeight - 4;
  const offsetWidth = wrap.value.offsetWidth - 4;

  const originalHeight = offsetHeight ** 2 / wrap.value.scrollHeight;
  const originalWidth = offsetWidth ** 2 / wrap.value.scrollWidth;
  const height = Math.max(originalHeight, props.minSize);
  const width = Math.max(originalWidth, props.minSize);

  ratioY.value =
    originalHeight /
    (offsetHeight - originalHeight) /
    (height / (offsetHeight - height));
  ratioX.value =
    originalWidth /
    (offsetWidth - originalWidth) /
    (width / (offsetWidth - width));

  sizeHeight.value = height + 4 < offsetHeight ? `${height}px` : "";
  sizeWidth.value = width + 4 < offsetWidth ? `${width}px` : "";
};

onMounted(() => {
  if (!props.native)
    nextTick(() => {
      update();
    });
});
onUpdated(() => update());
</script>