import { defineComponent, ref, resolveComponent, openBlock, createElementBlock, Fragment, renderList, withModifiers, createTextVNode, toDisplayString, withDirectives, createVNode, vShow, Transition, withCtx, createBlock, createCommentVNode } from "vue";
import _sfc_main$1 from "./tree-node.vue.js";
const _hoisted_1 = ["onClick"];
const __default__ = {
  name: "EtuTree"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    options: {
      type: Array,
      default: () => {
        return [];
      }
    },
    showCheck: {
      type: Boolean,
      default: true
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    ref(false);
    let state = ref(props.showCheck);
    console.log("state is " + state.value + "," + typeof state.value);
    const newOptions = ref(props.options);
    const isOpen = (item) => {
      item.isOpened = !item.isOpened;
    };
    ref(false);
    ref(true);
    ref(false);
    ref(["selected and disabled"]);
    return (_ctx, _cache) => {
      const _component_etu_checkbox = resolveComponent("etu-checkbox");
      const _component_etu_tree = resolveComponent("etu-tree");
      return openBlock(true), createElementBlock(Fragment, null, renderList(newOptions.value, (item, index) => {
        return openBlock(), createElementBlock("li", {
          key: index,
          onClick: withModifiers(($event) => isOpen(item), ["stop"])
        }, [
          createTextVNode(toDisplayString(item.label) + " ", 1),
          withDirectives(createVNode(_component_etu_checkbox, null, null, 512), [
            [vShow, item.showCheck === true]
          ]),
          createVNode(Transition, { name: "slide-fade" }, {
            default: withCtx(() => [
              item.children && item.children.length ? withDirectives((openBlock(), createBlock(_sfc_main$1, { key: 0 }, {
                default: withCtx(() => [
                  createVNode(_component_etu_tree, {
                    options: item.children
                  }, null, 8, ["options"])
                ]),
                _: 2
              }, 1536)), [
                [vShow, item.isOpened]
              ]) : createCommentVNode("", true)
            ]),
            _: 2
          }, 1024)
        ], 8, _hoisted_1);
      }), 128);
    };
  }
});
export {
  _sfc_main as default
};
