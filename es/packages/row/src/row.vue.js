import {
  defineComponent,
  ref,
  computed,
  onMounted,
  openBlock,
  createElementBlock,
  normalizeClass,
  unref,
  renderSlot,
} from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import "../../hooks/use-z-index/index.js";
import { rowProps } from "./row.js";
const __default__ = {
  name: "EtuRow",
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: rowProps,
  setup(__props) {
    const props = __props;
    const bem = useNamespace("row");
    const rowRef = ref();
    const classes = computed(() => {
      const isFlex = props.type === "flex";
      const temp = isFlex ? bem.m("flex") : bem.b();
      const name = [temp];
      if (isFlex) {
        name.push(`etu-row-flex-justify-${props.justify}`);
        name.push(`etu-row-flex-align-${props.align}`);
      }
      return name;
    });
    const setColAttrs = () => {
      const row = rowRef.value.children || [];
      let len = row.length;
      if (len === 0) return;
      for (let i = 0; i < len; i++) {
        row[i].classList.add("etu-col");
        if (props.gutter !== 0 && len > 1) {
          if (i !== 0) row[i].style.paddingLeft = `${props.gutter}px`;
          if (i !== len - 1) row[i].style.paddingRight = `${props.gutter}px`;
        }
      }
    };
    onMounted(() => {
      setColAttrs();
    });
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          "div",
          {
            class: normalizeClass(unref(classes)),
            ref_key: "rowRef",
            ref: rowRef,
          },
          [renderSlot(_ctx.$slots, "default")],
          2,
        )
      );
    };
  },
});
export { _sfc_main as default };
