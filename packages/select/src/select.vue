<template>
  <div
    :class="[...selectClass]"
    @click.stop="toggleMenu"
    ref="select"
    @mouseover.self="onHover"
    @mouseleave.self="onUnHover"
  >
    <slot name="prefix" />
    <input
      ref="input"
      :class="innerClass"
      v-if="!selected.length"
      v-model="currentLable"
      type="text"
      :placeholder="props.placeholder"
      :disabled="!props.filterable"
      @blur="onBlur"
      @focus="onFocus"
    />
    <span :class="ns.e('tag')" v-else>
      <etu-tag v-for="item in selected" :key="item">{{ item }}</etu-tag>
    </span>
    <span :class="iconClass"
      ><etu-icon
        :class="ns.e('icon-arrow')"
        name="arrow-down-bold"
        v-if="caches.size === 0 || !hover"
      ></etu-icon
      ><etu-icon name="error" @click.stop="resetStates" v-else></etu-icon
    ></span>
    <transition
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
    >
      <div :class="dropdownClass" v-show="visible" ref="dropdown">
        <div :class="ns.be('dropdown', 'wrapper')">
          <slot v-if="slots.default" />
          <span :class="ns.e('empty')" v-else>暂时没有数据</span>
        </div>
      </div></transition
    >
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
  computed,
  provide,
  toRefs,
  watch,
  onMounted,
  onUnmounted,
  nextTick,
  useSlots,
} from "vue";
import type { Ref } from "vue";
import { useNamespace } from "../../hooks";
import { selectProps, selectEmits } from "./select";
import { selectKey } from "../../tokens";
import { useSelectStates, useSelect } from "./useSelect";
import "animate.css";

const select = ref(null);
const dropdown: Ref<HTMLInputElement | null> = ref(null);

const props = defineProps(selectProps);
const emit = defineEmits(selectEmits);
const slots = useSlots();

const states = useSelectStates(props);

const { visible, currentLable, hover, filterable, caches, selected, empty } =
  toRefs(states);

const {
  toggleMenu,
  hideMenu,
  handlerClickOption,
  onHover,
  onUnHover,
  isShow,
  isSelected,
  resetStates,
  addValue,
} = useSelect(states, props, emit);

provide(
  selectKey,
  reactive({ props, handlerClickOption, isSelected, isShow, addValue }),
);

const ns = useNamespace("select");

const onBlur = (e) => {
  emit && emit("blur", e);
};

const onFocus = (e) => {
  emit && emit("focus", e);
};

const selectClass = computed(() => {
  return [
    ns.b(),
    props.size !== "default" ? ns.m(props.size) : "",
    ns.is("disabled", props.disabled),
    ns.is("focus", visible.value || filterable.value),
    ns.is("hover", hover.value),
  ];
});
const iconClass = computed(() => [ns.e("icon")]);
const dropdownClass = computed(() => [ns.b("dropdown")]);
const innerClass = computed(() => [ns.e("inner")]);

onMounted(() => {
  window.addEventListener("click", hideMenu);
});

onUnmounted(() => {
  window.removeEventListener("click", hideMenu);
});
</script>
