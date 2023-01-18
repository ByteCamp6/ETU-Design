<template>
  <a
    :class="linkKls"
    :href="disabled || !href ? undefined : href"
    @click="handleClick"
  >
    <!-- <etu-icon v-if="icon"><component :is="icon" /></etu-icon> -->
    <span v-if="$slots.default" :class="bem.e('inner')">
      <!-- {{ $slots.default }} -->
      <slot />
    </span>
    <!-- <slot v-if="$slots.icon" name="icon" /> -->
  </a>
</template>

<script setup lang="ts" name="EtuLink">
import { useNamespace } from "../../hooks/index";
const props = defineProps({
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger", "default"],
    default: "default",
  },
  underline: {
    type: Boolean,
    default: false,
  },
  disabled: { type: Boolean, default: false },
  href: { type: String, default: "" },
  // icon: {
  // },
});
const bem = useNamespace("link");
let linkKls = [bem.b(), bem.m(props.type), bem.is("disabled", props.disabled)];
console.log(linkKls);
console.log(props);
// console.log(this.$slots);
const emit = defineEmits(["click"]);
function handleClick(event: MouseEvent) {
  if (!props.disabled) emit("click", event);
}
// export default {
//   name: "EtuLink",
//   props: {
//     type: {
//       type: String,
//       default: "default",
//     },
//   },
//   setup() {
//     const bem = useNamespace("link");
//     let testClassName = [
//       bem.b("b"),
//       bem.e("e"),
//       bem.m("m"),
//       bem.be("b", "e"),
//       bem.bm("b", "m"),
//       bem.em("e", "m"),
//       bem.bem("b", "e", "m"),
//     ];
//     console.log(testClassName);
//     return {};
//   },
// };
</script>
<script lang="ts">
export default {
  name: "EtuLink",
};
</script>
