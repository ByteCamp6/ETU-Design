import {
  Transition,
  computed,
  createApp,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createStaticVNode,
  createVNode,
  defineComponent,
  normalizeClass,
  normalizeStyle,
  onMounted,
  openBlock,
  ref,
  renderSlot,
  toDisplayString,
  unref,
  watch,
  withCtx
} from "./chunk-6S52NMOK.js";

// node_modules/@vitepress-demo-preview/component/dist/preview-component.js
var $ = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [c, i] of o)
    e[c] = i;
  return e;
};
var G = {};
var J = {
  t: "1661231422733",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "3259",
  width: "20",
  height: "20"
};
var K = createBaseVNode("path", {
  d: "M682.666667 810.666667c-12.8 0-21.333333-4.266667-29.866667-12.8-17.066667-17.066667-17.066667-42.666667 0-59.733334l226.133333-226.133333-226.133333-226.133333c-17.066667-17.066667-17.066667-42.666667 0-59.733334s42.666667-17.066667 59.733333 0l256 256c17.066667 17.066667 17.066667 42.666667 0 59.733334l-256 256c-8.533333 8.533333-17.066667 12.8-29.866666 12.8zM341.333333 810.666667c-12.8 0-21.333333-4.266667-29.866666-12.8l-256-256c-17.066667-17.066667-17.066667-42.666667 0-59.733334l256-256c17.066667-17.066667 42.666667-17.066667 59.733333 0s17.066667 42.666667 0 59.733334L145.066667 512l226.133333 226.133333c17.066667 17.066667 17.066667 42.666667 0 59.733334-8.533333 8.533333-17.066667 12.8-29.866667 12.8z",
  "p-id": "3260"
}, null, -1);
var Q = [
  K
];
function W(t, o) {
  return openBlock(), createElementBlock("svg", J, Q);
}
var S = $(G, [["render", W]]);
var X = {};
var Y = {
  t: "1661231449868",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "3541",
  width: "20",
  height: "20"
};
var ee = createBaseVNode("path", {
  d: "M305.6 225.6c-17.6-17.6-43.2-17.6-59.2 0L19.2 460.8c-25.6 30.4-25.6 72 0 97.6l225.6 235.2c8 8 20.8 12.8 30.4 12.8s20.8-4.8 30.4-12.8c17.6-17.6 17.6-43.2 0-59.2L88 512l217.6-225.6c17.6-17.6 17.6-43.2 0-60.8zM1001.6 460.8L774.4 225.6c-17.6-17.6-43.2-17.6-59.2 0s-17.6 43.2 0 59.2L932.8 512 715.2 737.6c-17.6 17.6-17.6 43.2 0 59.2 8 8 17.6 12.8 30.4 12.8 12.8 0 20.8-4.8 30.4-12.8l225.6-235.2c28.8-28.8 28.8-70.4 0-100.8zM612.8 230.4c-20.8-8-46.4 4.8-56 25.6L382.4 742.4c-8 20.8 4.8 46.4 25.6 56 4.8 0 8 4.8 12.8 4.8 17.6 0 33.6-12.8 38.4-30.4l179.2-491.2c8-20.8-4.8-46.4-25.6-51.2z",
  "p-id": "3542"
}, null, -1);
var te = [
  ee
];
function oe(t, o) {
  return openBlock(), createElementBlock("svg", Y, te);
}
var T = $(X, [["render", oe]]);
var ne = {};
var se = {
  width: "24",
  height: "24",
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var ce = createStaticVNode('<path d="M13 38H41V16H30V4H13V38Z" fill="none" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"></path><path d="M30 4L41 16" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 20V44H28" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 20H23" stroke="#333" stroke-width="4" stroke-linecap="round"></path><path d="M19 28H31" stroke="#333" stroke-width="4" stroke-linecap="round"></path>', 5);
var ie = [
  ce
];
function le(t, o) {
  return openBlock(), createElementBlock("svg", se, ie);
}
var z = $(ne, [["render", le]]);
var y = "vitepress-demo-preview";
var L = (t, o, e, c) => {
  let i = o === "" ? `${t}` : `${t}-${o}`;
  return e && (i += `__${e}`), c && (i += `--${c}`), i;
};
var A = (t = "") => ({
  b: () => L(y, t),
  e: (p = "") => L(y, t, p),
  m: (p = "") => L(y, t, "", p),
  bem: (p, h, C) => L(y, p, h, C)
});
var E = () => {
  const t = ref(true);
  return {
    isCodeFold: t,
    setCodeFold: (e) => {
      t.value = e;
    }
  };
};
var I = () => ({
  copyContent: ref(""),
  clickCopy: async (e) => {
    await navigator.clipboard.writeText(e);
  }
});
var re = {};
var de = {
  width: "20",
  height: "20",
  viewBox: "0 0 48 48",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
};
var ue = createBaseVNode("path", {
  d: "M24 4L29.2533 7.83204L35.7557 7.81966L37.7533 14.0077L43.0211 17.8197L41 24L43.0211 30.1803L37.7533 33.9923L35.7557 40.1803L29.2533 40.168L24 44L18.7467 40.168L12.2443 40.1803L10.2467 33.9923L4.97887 30.1803L7 24L4.97887 17.8197L10.2467 14.0077L12.2443 7.81966L18.7467 7.83204L24 4Z",
  fill: "currentColor",
  stroke: "#333",
  "stroke-width": "4",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
var ae = createBaseVNode("path", {
  d: "M17 24L22 29L32 19",
  fill: "currentColor",
  stroke: "#333",
  "stroke-width": "4",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
var pe = [
  ue,
  ae
];
function _e(t, o) {
  return openBlock(), createElementBlock("svg", de, pe);
}
var he = $(re, [["render", _e]]);
var Ce = defineComponent({
  __name: "message-notice",
  props: {
    content: { default: "复制成功！" },
    close: null
  },
  setup(t, { expose: o }) {
    const e = t, c = A(), i = ref(false), p = (r) => {
      i.value = r;
    }, h = ref(-999), C = (r) => {
      h.value = r;
    };
    watch(i, (r) => {
      r === true && setTimeout(() => {
        i.value = false;
      }, 3e3);
    });
    const m = () => {
      e.close();
    };
    return o({
      setVisible: p,
      setTopHeight: C
    }), (r, w) => (openBlock(), createBlock(Transition, {
      name: "slide-fade",
      onAfterLeave: m
    }, {
      default: withCtx(() => [
        i.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(c).bem("message-notice", "container")]),
          style: normalizeStyle({ top: h.value + "px" })
        }, [
          createVNode(he),
          createBaseVNode("span", null, toDisplayString(t.content), 1)
        ], 6)) : createCommentVNode("", true)
      ]),
      _: 1
    }));
  }
});
var b = [];
var j = {
  open: () => {
    const t = document.createElement("div"), o = createApp(Ce, {
      content: "复制成功！",
      close: () => {
        document.body.removeChild(t), b.pop(), o.unmount();
      }
    }), e = o.mount(t);
    document.body.appendChild(t);
    const c = b.length, i = c === 0 ? 10 : (c + 1) * 10 + c * 42;
    e.setTopHeight(i), e.setVisible(true), b.push(e);
  }
};
var ve = ["innerHTML"];
var fe = defineComponent({
  __name: "AntDesign",
  props: {
    code: null,
    showCode: null,
    title: { default: "默认标题" },
    description: { default: "描述内容" }
  },
  setup(t) {
    const o = t, e = A(), { isCodeFold: c, setCodeFold: i } = E(), { copyContent: p, clickCopy: h } = I(), C = ref(decodeURIComponent(o.code)), m = ref(decodeURIComponent(o.showCode)), r = ref(null), w = () => {
      h(C.value), j.open();
    }, g = computed(() => {
      var n;
      return r.value ? (n = r.value) == null ? void 0 : n.clientHeight : 0;
    }), f = (n) => {
      c.value ? r.value.style.height = "0px" : r.value.style.height = `${n}px`;
    };
    return onMounted(() => {
      const n = g.value;
      f(n);
    }), watch(c, () => {
      const n = g.value;
      f(n);
    }), (n, _) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(e).e("ant-design__container")])
    }, [
      createBaseVNode("section", {
        class: normalizeClass([unref(e).bem("preview")])
      }, [
        renderSlot(n.$slots, "default")
      ], 2),
      createBaseVNode("section", {
        class: normalizeClass([unref(e).bem("description")])
      }, [
        createBaseVNode("div", {
          class: normalizeClass([unref(e).bem("description", "title")])
        }, toDisplayString(t.title), 3),
        createBaseVNode("div", {
          class: normalizeClass([unref(e).bem("description", "content")])
        }, toDisplayString(t.description), 3),
        createBaseVNode("div", {
          class: normalizeClass([unref(e).bem("description", "split-line")])
        }, null, 2),
        createBaseVNode("div", {
          class: normalizeClass([unref(e).bem("description", "handle-btn")])
        }, [
          unref(c) ? (openBlock(), createBlock(S, {
            key: 1,
            onClick: _[1] || (_[1] = (x) => unref(i)(false))
          })) : (openBlock(), createBlock(T, {
            key: 0,
            onClick: _[0] || (_[0] = (x) => unref(i)(true))
          })),
          createVNode(z, { onClick: w })
        ], 2)
      ], 2),
      createBaseVNode("section", {
        class: normalizeClass([unref(e).bem("source")]),
        ref_key: "sourceCodeArea",
        ref: r
      }, [
        createBaseVNode("div", {
          innerHTML: m.value,
          class: "language-vue"
        }, null, 8, ve)
      ], 2)
    ], 2));
  }
});
var me = ["innerHTML"];
var ke = defineComponent({
  __name: "ElementPlus",
  props: {
    code: null,
    showCode: null,
    title: { default: "默认标题" },
    description: { default: "描述内容" }
  },
  setup(t) {
    const o = t, e = A(), { isCodeFold: c, setCodeFold: i } = E(), { copyContent: p, clickCopy: h } = I(), C = ref(decodeURIComponent(o.code)), m = ref(decodeURIComponent(o.showCode)), r = ref(null), w = () => {
      h(C.value), j.open();
    }, g = computed(() => {
      var n;
      return r.value ? (n = r.value) == null ? void 0 : n.clientHeight : 0;
    }), f = (n) => {
      c.value ? r.value.style.height = "0px" : r.value.style.height = `${n}px`;
    };
    return onMounted(() => {
      const n = g.value;
      f(n);
    }), watch(c, () => {
      const n = g.value;
      f(n);
    }), (n, _) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(e).e("element-plus__container")])
    }, [
      createBaseVNode("section", {
        class: normalizeClass([unref(e).bem("preview")])
      }, [
        renderSlot(n.$slots, "default")
      ], 2),
      createBaseVNode("section", {
        class: normalizeClass([unref(e).bem("description")])
      }, [
        createBaseVNode("div", {
          class: normalizeClass([unref(e).bem("description", "split-line")])
        }, null, 2),
        createBaseVNode("div", {
          class: normalizeClass([unref(e).bem("description", "handle-btn")])
        }, [
          unref(c) ? (openBlock(), createBlock(S, {
            key: 1,
            onClick: _[1] || (_[1] = (x) => unref(i)(false))
          })) : (openBlock(), createBlock(T, {
            key: 0,
            onClick: _[0] || (_[0] = (x) => unref(i)(true))
          })),
          createVNode(z, { onClick: w })
        ], 2)
      ], 2),
      createBaseVNode("section", {
        class: normalizeClass([unref(e).bem("source")]),
        ref_key: "sourceCodeArea",
        ref: r
      }, [
        createBaseVNode("div", {
          innerHTML: m.value,
          class: "language-vue"
        }, null, 8, me)
      ], 2)
    ], 2));
  }
});
export {
  fe as AntDesignContainer,
  ke as ElementPlusContainer
};
//# sourceMappingURL=@vitepress-demo-preview_component.js.map
