import type UploadContent from "./upload-content.vue";
import { UploadAjaxError, uploadBaseProps } from "./upload";
import type {
  UploadFile,
  UploadHooks,
  UploadProgressEvent,
  UploadRawFile,
} from "./upload";
import { definePropType } from "@etu-design/utils";
import type { ExtractPropTypes } from "vue";

export const uploadContentProps = {
  ...uploadBaseProps,

  beforeUpload: {
    type: definePropType<UploadHooks["beforeUpload"]>(Function),
    default: () => {},
  },
  onRemove: {
    type: definePropType<
      (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile) => void
    >(Function),
    default: () => {},
  },
  onStart: {
    type: definePropType<(rawFile: UploadRawFile) => void>(Function),
    default: () => {},
  },
  onSuccess: {
    type: definePropType<(response: any, rawFile: UploadRawFile) => unknown>(
      Function,
    ),
    default: () => {},
  },
  onProgress: {
    type: definePropType<
      (evt: UploadProgressEvent, rawFile: UploadRawFile) => void
    >(Function),
    default: () => {},
  },
  onError: {
    type: definePropType<
      (err: UploadAjaxError, rawFile: UploadRawFile) => void
    >(Function),
    default: () => {},
  },
  onExceed: {
    type: definePropType<UploadHooks["onExceed"]>(Function),
    default: () => {},
  },
} as const;

export type UploadContentProps = ExtractPropTypes<typeof uploadContentProps>;

export type UploadContentInstance = InstanceType<typeof UploadContent>;
