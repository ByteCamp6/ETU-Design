"use strict";
const vue = require("vue");
const popper = require("./popper.js");
const popper$1 = require("../../tokens/popper.js");
const __default__ = vue.defineComponent({
  name: "EtuPopperRoot"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: popper.popperProps,
  setup(__props, { expose }) {
    const props = __props;
    const triggerRef = vue.ref();
    const popperInstanceRef = vue.ref();
    const contentRef = vue.ref();
    const referenceRef = vue.ref();
    const role = vue.computed(() => props.role);
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
    vue.provide(popper$1.POPPER_INJECTION_KEY, popperProvides);
    return (_ctx, _cache) => {
      return vue.renderSlot(_ctx.$slots, "default");
    };
  }
});
module.exports = _sfc_main;
