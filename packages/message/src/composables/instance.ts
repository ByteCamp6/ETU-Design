import { shallowReactive } from "vue";
import type { ComponentInternalInstance, VNode } from "vue";
import type { MessageHandler, MessageProps } from "../message";

export type MessageContext = {
  id: string;
  vnode: VNode;
  handler: MessageHandler;
  vm: ComponentInternalInstance;
  props: MessageProps;
};

// instances中保存了所有的Message实例，shallowReactive创建的对象只能监听到首层对象的变化
export const instances: MessageContext[] = shallowReactive([]);

// 通过id获取实例，current为当前实例，prev为前一个实例
export const getInstance = (id: string) => {
  const idx = instances.findIndex((instance) => instance.id === id);
  const current = instances[idx];
  let prev: MessageContext | undefined;
  if (idx > 0) {
    prev = instances[idx - 1];
  }
  return { current, prev };
};

// 通过id获取上一个实例的偏移量
export const getLastOffset = (id: string): number => {
  const { prev } = getInstance(id);
  if (!prev) return 0;
  return prev.vm.exposed!.bottom.value;
};
