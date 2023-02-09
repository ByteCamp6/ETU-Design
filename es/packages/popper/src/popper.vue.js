import { defineComponent, ref, computed, provide, renderSlot } from "vue";
import { popperProps } from "./popper.js";
import { POPPER_INJECTION_KEY } from "../../tokens/popper.js";
const __default__ = defineComponent({
  name: "EtuPopperRoot"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: popperProps,
  setup(__props, { expose }) {
    const props = __props;
    const triggerRef = ref();
    const popperInstanceRef = ref();
    const contentRef = ref();
    const referenceRef = ref();
    const role = computed(() => props.role);
    const popperProvides = {
      /**
       * @description trigger element
       */
      triggerRef,
      /**
       * @description popperjs instance
       */
      popperInstanceRef,
      /**
       * @description popper content element
       */
      contentRef,
      /**
       * @description popper reference element
       */
      referenceRef,
      /**
       * @description role determines how aria attributes are distributed
       */
      role
    };
    expose(popperProvides);
    provide(POPPER_INJECTION_KEY, popperProvides);
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default");
    };
  }
});
export {
  _sfc_main as default
};
