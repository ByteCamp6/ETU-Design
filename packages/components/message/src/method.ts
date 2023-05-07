import { createVNode, render } from "vue";
import type { MessageContext } from "./composables/instance";
import { useZIndex } from "@etu-design/hooks";
import { isFunction, isString, isVNode } from "@etu-design/utils";

import MessageConstructor from "./message.vue";
import type {
  Message,
  MessageFn,
  MessageHandler,
  MessageParams,
  MessageParamsNormalized,
  messageType,
} from "./message";
import { instances } from "./composables/instance";
import { messageDefaults, messageTypes } from "./message";

let seed = 1;

/**
 * @description normalizeOptions 处理用户传递的对象配置,和默认的参数进行合并
 */
const normalizeOptions = (params: MessageParams) => {
  const options =
    !params || isString(params) || isVNode(params) || isFunction(params)
      ? { message: params }
      : params;

  return {
    ...messageDefaults,
    ...options,
    appendTo: document.body,
  } as MessageParamsNormalized;
};

/**
 * @description 首先是取 递增的 zIndex值， 处理多个Message之间的层叠问题。 并且取出用户的关闭回调，最终定义了props 对象
 * 其内部还增加了 onClose 以及 onDestroy 方法，这两个函数在组件内的 动画离开钩子前后都会被触发
 * 这里要再说明下 render(null, container)的作用， 它在onClose 被执行后，紧接着组件内的动画钩子会执行 onDestroy 函数
 * render 渲染器函数接收两个参数，第一个参数为新的VNode节点，第二个参数是Container容器节点， 它会拿新的VNode节点和 Container容器节点内
 * 的VNode节点进行新旧比对，更新Container它内部的VNode节点
 * onDestroy 最终做的事情就是将容器内的 所有Message实例 清空，即页面上的HTML节点进行移除， 那么这里的这两个函数的作用就是：
 * 执行用户的关闭回调
 * 执行实例的删除以及组件隐藏
 * 移除页面上的DOM 释放内存
 */
const createMessage = ({
  appendTo,
  ...options
}: MessageParamsNormalized): MessageContext => {
  // 取出全局下的zIndex  每次创建实例都会 自增一次 保证层级不重复
  const { nextZIndex } = useZIndex();
  // 每个id都不会重复
  const id = `message_${seed++}`;
  // 获取用户的onClose的回调函数
  const userOnClose = options.onClose;
  // 容器  包裹 message组件
  const container = document.createElement("div");

  const props = {
    ...options,
    zIndex: nextZIndex() + options.zIndex,
    id,
    //先执行关闭回调 再执行 message的关闭和实例的移除，这里的onClose是Props里的
    //这里的instance 再还没被执行之前是未定义的， 等它被实际调用时 会去拿下面的instance
    onClose: () => {
      userOnClose?.();
      closeMessage(instance);
    },
    // 这里的onDestroy是emit事件里的
    //vue组件内的transition after-leave钩子会通过emit触发这个函数 将容器的DOM置空
    onDestroy: () => {
      render(null, container);
    },
  };
  // 创建Message组件isVNode
  const vnode = createVNode(
    MessageConstructor,
    props,
    isFunction(props.message) || isVNode(props.message)
      ? {
          default: isFunction(props.message)
            ? props.message
            : () => props.message,
        }
      : null,
  );
  // 把组件挂载到container上后再挂到document.body上
  render(vnode, container);

  appendTo.appendChild(container.firstElementChild!);

  const vm = vnode.component!;

  const handler: MessageHandler = {
    // 这里使用handler而不是直接调用onClose函数，设置该值，以便我们可以拥有out组件的完整生命周期，从而不会跳过所有关闭步骤。
    close: () => {
      vm.exposed!.visible.value = false;
    },
  };

  const instance: MessageContext = {
    id,
    vnode,
    vm,
    handler,
    props: (vnode.component as any).props,
  };

  return instance;
};

/**
 * @description closeMessage 用于移除组件的实例，并且关闭对应组件在页面的显示
 */
const closeMessage = (instance: MessageContext) => {
  const idx = instances.indexOf(instance);
  if (idx === -1) return;

  instances.splice(idx, 1);
  const { handler } = instance;
  handler.close();
};

/**
 * @description message函数对应的就是 我们代码中 EtuMessage函数 的调用
 */
const message: Partial<Message> & MessageFn = (options = {}) => {
  const normalized = normalizeOptions(options);
  const instance = createMessage(normalized);
  instances.push(instance);
  return instance.handler;
};

/**
 * @description 这里就是通过循环依次通过message函数的调用，给message添加对应Type 类型的属性,按照以下方式调用
 * EtuMessage.success('我成功了')
 * EtuMessage.warning('我警告了')
 * EtuMessage.info('我信息了')
 */
messageTypes.forEach((type) => {
  message[type] = (options = {}) => {
    const normalized = normalizeOptions(options);
    return message({ ...normalized, type });
  };
});

/**
 * @description 如果有规定type就关闭所有相关的type的message，没有规定就关闭所有message
 */
export function closeAll(type?: messageType): void {
  instances.forEach((instance) => {
    if (!type || type === instance.props.type) {
      instance.handler.close();
    }
  });
}

message.closeAll = closeAll;

export default message as Message;
