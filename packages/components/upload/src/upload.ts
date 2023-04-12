import { ajaxUpload } from "./ajax";
import { definePropType } from "@etu-design/utils";
import type { ExtractPropTypes } from "vue";

export const uploadListTypes = ["text", "picture", "picture-card"] as const;

type Awaitable<T> = Promise<T> | T;

export type UploadStatus = "ready" | "uploading" | "success" | "fail";
export interface UploadProgressEvent extends ProgressEvent {
  percent: number;
}

export interface UploadRequestOptions {
  action: string;
  method: string;
  data: Record<string, string | Blob | [string | Blob, string]>;
  filename: string;
  file: File;
  headers: Headers | Record<string, string | number | null | undefined>;
  onError: (evt: UploadAjaxError) => void;
  onProgress: (evt: UploadProgressEvent) => void;
  onSuccess: (response: any) => void;
  withCredentials: boolean;
}
export interface UploadFile {
  name: string;
  percentage?: number;
  status: UploadStatus;
  size?: number;
  response?: unknown;
  uid: number;
  url?: string;
  raw?: UploadRawFile;
}
export type UploadUserFile = Omit<UploadFile, "status" | "uid"> &
  Partial<Pick<UploadFile, "status" | "uid">>;

export type UploadFiles = UploadFile[];
export interface UploadRawFile extends File {
  uid: number;
}
export interface UploadHooks {
  beforeUpload: (
    rawFile: UploadRawFile,
  ) => Awaitable<void | undefined | null | boolean | File | Blob>;
  beforeRemove: (
    uploadFile: UploadFile,
    uploadFiles: UploadFiles,
  ) => Awaitable<boolean>;
  onRemove: (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
  onChange: (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
  onPreview: (uploadFile: UploadFile) => void;
  onSuccess: (
    response: any,
    uploadFile: UploadFile,
    uploadFiles: UploadFiles,
  ) => void;
  onProgress: (
    evt: UploadProgressEvent,
    uploadFile: UploadFile,
    uploadFiles: UploadFiles,
  ) => void;
  onError: (
    error: Error,
    uploadFile: UploadFile,
    uploadFiles: UploadFiles,
  ) => void;
  onExceed: (files: File[], uploadFiles: UploadUserFile[]) => void;
}

export class UploadAjaxError extends Error {
  name = "UploadAjaxError";
  status: number;
  method: string;
  url: string;

  constructor(message: string, status: number, method: string, url: string) {
    super(message);
    this.status = status;
    this.method = method;
    this.url = url;
  }
}

export interface UploadProgressEvent extends ProgressEvent {
  percent: number;
}

export interface UploadRequestOptions {
  action: string;
  method: string;
  data: Record<string, string | Blob | [string | Blob, string]>;
  filename: string;
  file: File;
  headers: Headers | Record<string, string | number | null | undefined>;
  onError: (evt: UploadAjaxError) => void;
  onProgress: (evt: UploadProgressEvent) => void;
  onSuccess: (response: any) => void;
  withCredentials: boolean;
}

export type UploadRequestHandler = (
  options: UploadRequestOptions,
) => XMLHttpRequest | Promise<unknown>;

export const uploadBaseProps = {
  action: {
    type: String,
    default: "#",
  },
  headers: {
    type: definePropType<Headers | Record<string, any>>(Object),
  },
  method: {
    type: String,
    default: "post",
  },
  data: {
    type: Object,
    default: () => {},
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: "file",
  },
  drag: {
    type: Boolean,
    default: false,
  },
  withCredentials: Boolean,
  showFileList: {
    type: Boolean,
    default: true,
  },
  accept: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "select",
  },
  fileList: {
    type: definePropType<UploadUserFile[]>(Array),
    default: () => [],
  },
  autoUpload: {
    type: Boolean,
    default: true,
  },
  listType: {
    type: String,
    values: uploadListTypes,
    default: "text",
  },
  httpRequest: {
    type: definePropType<UploadRequestHandler>(Function),
    default: ajaxUpload,
  },
  disabled: Boolean,
  limit: Number,
} as const;

export const uploadProps = {
  ...uploadBaseProps,
  beforeUpload: {
    type: definePropType<UploadHooks["beforeUpload"]>(Function),
    default: () => {},
  },
  beforeRemove: {
    type: definePropType<UploadHooks["beforeRemove"]>(Function),
  },
  onRemove: {
    type: definePropType<UploadHooks["onRemove"]>(Function),
    default: () => {},
  },
  onChange: {
    type: definePropType<UploadHooks["onChange"]>(Function),
    default: () => {},
  },
  onPreview: {
    type: definePropType<UploadHooks["onPreview"]>(Function),
    default: () => {},
  },
  onSuccess: {
    type: definePropType<UploadHooks["onSuccess"]>(Function),
    default: () => {},
  },
  onProgress: {
    type: definePropType<UploadHooks["onProgress"]>(Function),
    default: () => {},
  },
  onError: {
    type: definePropType<UploadHooks["onError"]>(Function),
    default: () => {},
  },
  onExceed: {
    type: definePropType<UploadHooks["onExceed"]>(Function),
    default: () => {},
  },
} as const;

export type UploadProps = ExtractPropTypes<typeof uploadProps>;
