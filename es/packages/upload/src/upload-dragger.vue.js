import {
  defineComponent,
  ref,
  openBlock,
  createElementBlock,
  normalizeClass,
  unref,
  withModifiers,
  renderSlot,
  createVNode,
  createElementVNode,
} from "vue";
import { useNamespace } from "../../hooks/use-namespace/index.js";
import { useDisabled } from "../../hooks/use-common-props/index.js";
import "../../hooks/use-z-index/index.js";
import { uploadDraggerProps, uploadDraggerEmits } from "./upload-dragger.js";
import "../../icon/index.js";
import _sfc_main$1 from "../../icon/src/icon.vue.js";
const _hoisted_1 = ["onDrop", "onDragover"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "upload-dragger",
  props: uploadDraggerProps,
  emits: uploadDraggerEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("upload");
    const dragover = ref(false);
    const disabled = useDisabled();
    const onDrop = (e) => {
      if (disabled.value) return;
      dragover.value = false;
      const files = Array.from(e.dataTransfer.files);
      const { accept } = props;
      if (!accept) {
        emit("file", files);
        return;
      }
      const filesFiltered = files.filter((file) => {
        const { type, name } = file;
        const extension = name.includes(".") ? `.${name.split(".").pop()}` : "";
        const baseType = type.replace(/\/.*$/, "");
        return accept
          .split(",")
          .map((type2) => type2.trim())
          .filter((type2) => type2)
          .some((acceptedType) => {
            if (acceptedType.startsWith(".")) {
              return extension === acceptedType;
            }
            if (/\/\*$/.test(acceptedType)) {
              return baseType === acceptedType.replace(/\/\*$/, "");
            }
            if (/^[^/]+\/[^/]+$/.test(acceptedType)) {
              return type === acceptedType;
            }
            return false;
          });
      });
      emit("file", filesFiltered);
    };
    const onDragover = () => {
      if (!disabled.value) dragover.value = true;
    };
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          "div",
          {
            class: normalizeClass([
              unref(ns).b("dragger"),
              unref(ns).is("dragover", dragover.value),
            ]),
            onDrop: withModifiers(onDrop, ["prevent"]),
            onDragover: withModifiers(onDragover, ["prevent"]),
            onDragleave:
              _cache[0] ||
              (_cache[0] = withModifiers(
                ($event) => (dragover.value = false),
                ["prevent"],
              )),
          },
          [
            renderSlot(_ctx.$slots, "default", {}, () => [
              createVNode(
                unref(_sfc_main$1),
                {
                  class: normalizeClass(unref(ns).e("icon-upload")),
                  name: "upload",
                },
                null,
                8,
                ["class"],
              ),
              createElementVNode(
                "div",
                {
                  class: normalizeClass(unref(ns).e("text")),
                },
                "Drop file here or click to upload",
                2,
              ),
            ]),
          ],
          42,
          _hoisted_1,
        )
      );
    };
  },
});
export { _sfc_main as default };
