"use strict";
const vue = require("vue");
const treeNode_vue_vue_type_script_setup_true_lang = require("./tree-node.vue.js");
const _hoisted_1 = ["onClick"];
const __default__ = {
  name: "EtuTree",
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: {
    options: {
      type: Array,
      default: () => {
        return [];
      },
    },
    showCheck: {
      type: Boolean,
      default: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  setup(__props) {
    const props = __props;
    vue.ref(false);
    let state = vue.ref(props.showCheck);
    console.log("state is " + state.value + "," + typeof state.value);
    const newOptions = vue.ref(props.options);
    const isOpen = (item) => {
      item.isOpened = !item.isOpened;
    };
    vue.ref(false);
    vue.ref(true);
    vue.ref(false);
    vue.ref(["selected and disabled"]);
    return (_ctx, _cache) => {
      const _component_etu_checkbox = vue.resolveComponent("etu-checkbox");
      const _component_etu_tree = vue.resolveComponent("etu-tree");
      return (
        vue.openBlock(true),
        vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList(newOptions.value, (item, index) => {
            return (
              vue.openBlock(),
              vue.createElementBlock(
                "li",
                {
                  key: index,
                  onClick: vue.withModifiers(
                    ($event) => isOpen(item),
                    ["stop"],
                  ),
                },
                [
                  vue.createTextVNode(vue.toDisplayString(item.label) + " ", 1),
                  vue.withDirectives(
                    vue.createVNode(_component_etu_checkbox, null, null, 512),
                    [[vue.vShow, item.showCheck === true]],
                  ),
                  vue.createVNode(
                    vue.Transition,
                    { name: "slide-fade" },
                    {
                      default: vue.withCtx(() => [
                        item.children && item.children.length
                          ? vue.withDirectives(
                              (vue.openBlock(),
                              vue.createBlock(
                                treeNode_vue_vue_type_script_setup_true_lang,
                                { key: 0 },
                                {
                                  default: vue.withCtx(() => [
                                    vue.createVNode(
                                      _component_etu_tree,
                                      {
                                        options: item.children,
                                      },
                                      null,
                                      8,
                                      ["options"],
                                    ),
                                  ]),
                                  _: 2,
                                },
                                1536,
                              )),
                              [[vue.vShow, item.isOpened]],
                            )
                          : vue.createCommentVNode("", true),
                      ]),
                      _: 2,
                    },
                    1024,
                  ),
                ],
                8,
                _hoisted_1,
              )
            );
          }),
          128,
        )
      );
    };
  },
});
module.exports = _sfc_main;
