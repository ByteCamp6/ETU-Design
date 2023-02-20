import { defineComponent, ref, openBlock, createElementBlock, renderSlot } from "vue";
const __default__ = {
  name: "EtuTree-node"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    options: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  setup(__props) {
    const props = __props;
    ref(props.options);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ul", null, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
export {
  _sfc_main as default
};
