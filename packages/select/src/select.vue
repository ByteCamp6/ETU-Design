<template>
  <div :class="[...selectClass]" @click.stop="focus" ref="select">
    <span
      :class="[nc.e('inner'), nc.is('selected', currentValue.label === '')]"
      >{{
        currentValue.label === "" ? props.placeholder : currentValue.label
      }}</span
    >
    <span :class="iconClass"><etu-icon name="arrow-down-bold"></etu-icon></span>
    <transition
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
    >
      <div :class="dropdownClass" v-show="isFocus">
        <slot @setValue="setValue" /></div
    ></transition>
  </div>
</template>

<script lang="ts">
export default {
  name: "EtuSelect",
};
</script>

<script setup lang="ts">
import { ref, reactive, provide, onMounted, onUnmounted } from "vue";
import { useNamespace } from "../../hooks";
import { selectProps, selectEmits } from "./select";
import { selectKey } from "../../tokens";
import Icon from "@etu-design/icon";
import "animate.css";

const select = ref(null);

const props = defineProps(selectProps);
const emit = defineEmits(selectEmits);

const currentValue = reactive({ value: "", label: "" });

const setValue = (val, text) => {
  currentValue.value = val;
  currentValue.label = text;
};

provide(selectKey, { setValue, currentValue });

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

const selectClass = reactive(
  new Set([
    nc.b(),
    props.size !== "default" ? nc.m(props.size) : "",
    nc.is("disabled", props.disabled),
  ]),
);
const iconClass = reactive([nc.e("icon")]);
const dropdownClass = reactive([nc.b("dropdown")]);

onMounted(() => {
  document.addEventListener("click", unFocus);
});

onUnmounted(() => {
  document.removeEventListener("click", unFocus);
});
</script>
