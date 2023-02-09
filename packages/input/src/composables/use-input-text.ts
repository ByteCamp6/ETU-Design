import { computed, getCurrentInstance, nextTick, ref, watch } from "vue";
import type { InputProps } from "../input";
import type { ComputedRef } from "vue";
import input from "../../index";
import { useCursor } from "@etu-design/hooks";

export const useInputText = (
  props: InputProps,
  aimRef: ComputedRef<HTMLInputElement | HTMLTextAreaElement | undefined>,
) => {
  // 在使用中文输入法时，只有在输入结束后才会进行过滤，isComposing判断是否在输入中
  const isComposing = ref(false);
  const { emit } = getCurrentInstance()!;

  // nativeInputValue和modelValue绑定，当props.modelValue不存在时始终为空，因此必须要双向绑定
  const nativeInputValue = computed(() =>
    props.modelValue === undefined ? "" : String(props.modelValue),
  );

  // 将目标ref的值设置为nativeInputValue
  const setNativeInputValue = () => {
    const input = aimRef.value;
    if (!input || input.value === nativeInputValue.value) return;
    input.value = nativeInputValue.value;
  };

  const [recordCursor, setCursor] = useCursor(input);

  // 在输入改变时触发事件
  const handleInput = async (event: Event) => {
    recordCursor();

    let { value } = event.target as HTMLInputElement | HTMLTextAreaElement;

    // 对输入的值进行格式化
    if (props.formatter) {
      value = props.parser ? props.parser(value) : value;
      value = props.formatter(value);
    }

    // 只有在中文输入完后才触发
    if (isComposing.value) return;

    // 发送变更事件
    emit("update:modelValue", value);
    emit("input", value);

    // nativeInputValue需要视图变更完毕才会改变，因此需要nextTick
    await nextTick();
    setNativeInputValue();
    setCursor();
  };

  const handleChange = (event: Event) => {
    emit(
      "change",
      (event.target as HTMLInputElement | HTMLTextAreaElement).value,
    );
  };

  // compositionstart和compositionend可以知道中文输入什么时候开始和结束
  const handleCompositionStart = () => {
    isComposing.value = true;
  };

  const handleCompositionEnd = (event: CompositionEvent) => {
    if (isComposing.value) {
      isComposing.value = false;
      handleInput(event);
    }
  };

  // 如果在输入过程中父组件的状态发生改变，DOM重新渲染，会导致 compositionend 不会触发，因此必须通过watch进行监测
  watch(nativeInputValue, () => setNativeInputValue());

  return {
    isComposing,
    nativeInputValue,
    setNativeInputValue,
    handleInput,
    handleChange,
    handleCompositionStart,
    handleCompositionEnd,
  };
};

export type InputText = ReturnType<typeof useInputText>;
