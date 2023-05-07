<template>
  <component :is="Tag" :class="tClass">
    <slot />
  </component>
  <!--  <div v-html="htmlText"></div>-->
</template>

<script setup lang="ts" name="EtuText">
import { useNamespace } from "@etu-design/hooks";
import { computed, ref } from "vue";
import Span from "./Span.vue";
import Mark from "./Mark.vue";
import Sub from "./Sub.vue";
import Sup from "./Sup.vue";
import Ins from "./Ins.vue";
import Del from "./Del.vue";
import PTag from "./Ptag.vue";
import BTag from "./BTag.vue";
import ITag from "./ITag.vue";
import Div from "./Div.vue";

const bem = useNamespace("Text");
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  size: {
    type: String,
    default: "default",
  },
  truncated: {
    type: Boolean,
    default: false,
  },
  tag: {
    type: String,
    default: "Span",
  },
});
const tClass = computed(() => {
  return [bem.m(String(props.truncated)), bem.bm(props.size, props.type)];
});
const Tag = computed(() => {
  if (props.tag === "Span") {
    return Span;
  } else if (props.tag === "mark") {
    return Mark;
  } else if (props.tag === "sub") {
    return Sub;
  } else if (props.tag === "sup") {
    return Sup;
  } else if (props.tag === "ins") {
    return Ins;
  } else if (props.tag === "del") {
    return Del;
  } else if (props.tag === "p") {
    return PTag;
  } else if (props.tag === "b") {
    return BTag;
  } else if (props.tag === "i") {
    return ITag;
  } else if (props.tag === "div") {
    return Div;
  } else {
    return Span;
  }
});
</script>

<style scoped lang="scss"></style>
