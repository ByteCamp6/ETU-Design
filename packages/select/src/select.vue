<template>
  <div
    :class="[...selectClass]"
    @click.stop="focus"
    @mouseover.self="hover"
    @mouseleave.self="unHover"
    ref="select"
  >
    <input
      :class="innerClass"
      v-if="currentValue.size === 0"
      type="text"
      :placeholder="props.placeholder"
      disabled
    />
    <span :class="nc.e('tag')" v-else>
      <etu-tag
        v-for="item of [...currentValue].map((item) => item.label)"
        :key="item"
        >item</etu-tag
      >
    </span>
    <span :class="iconClass"
      ><etu-icon
        name="arrow-down-bold"
        v-if="!isSelected || !isHover"
      ></etu-icon
      ><etu-icon
        name="error"
        v-else-if="isSelected && isHover"
        @click="store.clear"
      ></etu-icon
    ></span>
    <transition
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
    >
      <div :class="dropdownClass" v-show="isFocus"><slot /></div
    ></transition>
  </div>
</template>

<script lang="ts">
export default {
  name: "EtuSelect",
};
</script>

<script setup lang="ts">
import {
  ref,
  reactive,
  provide,
  watch,
  toRefs,
  onMounted,
  onUnmounted,
} from "vue";
import type { SelectItem } from "./useSelect";
import { useNamespace } from "../../hooks";
import { selectProps, selectEmits } from "./select";
import { selectKey } from "../../tokens";
import { useSelect } from "./useSelect";
import "animate.css";

const select = ref(null);

const props = defineProps(selectProps);
const emit = defineEmits(selectEmits);

const store = useSelect();

const currentValue: Set<SelectItem> = store.getCurrentValue();
const { isSelected } = toRefs(store.state);
const isHover = ref(false);

provide(selectKey, { props });

const nc = useNamespace("select");

const isFocus = ref(false);

const unFocus = (e?) => {
  if (e && (e.target === select.value || e.target.parentNode === select.value))
    return;
  isFocus.value = false;
  selectClass.delete(nc.is("focus"));
};

const focus = () => {
  if (props.disabled) return;
  if (isFocus.value) {
    unFocus();
    return;
  }
  isFocus.value = true;
  selectClass.add(nc.is("focus"));
};

const hover = () => {
  if (!props.clearable) return;
  isHover.value = true;
  selectClass.add(nc.is("hover"));
};

const unHover = () => {
  if (!props.clearable) return;
  isHover.value = false;
  selectClass.delete(nc.is("hover"));
};

const inputClick = (e) => {
  e.stopPropagation();
  e.preventDefault();
};

const selectClass = reactive(
  new Set([
    nc.b(),
    props.size !== "default" ? nc.m(props.size) : "",
    nc.is("disabled", props.disabled),
  ]),
);
const iconClass = reactive([nc.e("icon")]);
const dropdownClass = reactive([nc.b("dropdown")]);
const innerClass = reactive([nc.e("inner")]);

onMounted(() => {
  document.addEventListener("click", unFocus);
});

onUnmounted(() => {
  document.removeEventListener("click", unFocus);
});
</script>
