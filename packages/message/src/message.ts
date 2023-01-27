import type { Component, ExtractPropTypes, VNode } from "vue";
import { definePropType } from "@etu-design/utils";

export const messageTypes = ["success", "info", "warning", "error"] as const;
export type messageType = (typeof messageTypes)[number];

export const messageDefaults = {
  id: "",
  message: "",
  type: "info",
  offset: 16,
  duration: 3000,
  showClose: false,
  zIndex: 0,
} as const;

export const messageProps = {
  id: {
    type: String,
    default: "",
  },
  message: {
    type: definePropType<string | VNode | (() => VNode)>([
      String,
      Object,
      Function,
    ]),
    default: "",
  },
  type: {
    type: String,
    values: messageTypes,
    default: "info",
  },
  offset: {
    type: Number,
    default: 16,
  },
  onClose: {
    type: Function,
    required: false,
  },
  icon: {
    type: definePropType<string | Component>([String, Object, Function]),
    default: "",
  },
  duration: {
    type: Number,
    default: 3000,
  },
  showClose: {
    type: Boolean,
    default: false,
  },
  zIndex: {
    type: Number,
    default: 0,
  },
} as const;

export const messageEmits = {
  destroy: () => true,
};

type Mutable<T> = { -readonly [P in keyof T]: T[P] };

export type MessageProps = ExtractPropTypes<typeof messageProps>;
export type MessageParams = MessageOptions | MessageOptions["message"];
export type MessageParamsNormalized = Omit<MessageProps, "id"> & {
  appendTo: HTMLElement;
};
export type MessageOptions = Partial<Mutable<Omit<MessageProps, "id">>>;
export interface MessageHandler {
  close: () => void;
}
export type MessageFn = {
  (options?: MessageParams): MessageHandler;
  closeAll(type?: messageType): void;
};
export type MessageTypedFn = (
  options?: MessageOptions["message"] | Partial<MessageOptions>,
) => MessageHandler;

export interface Message extends MessageFn {
  success: MessageTypedFn;
  warning: MessageTypedFn;
  info: MessageTypedFn;
  error: MessageTypedFn;
}
