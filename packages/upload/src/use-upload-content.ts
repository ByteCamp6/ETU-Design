import type {
  UploadFile,
  UploadHooks,
  UploadRawFile,
  UploadRequestOptions,
} from "./upload";
import { shallowRef } from "vue";
import { genFileId } from "./use-upload";
import type { UploadContentProps } from "./upload-content";
import { useDisabled } from "@etu-design/hooks";

export const useUploadContent = (props: UploadContentProps) => {
  const requests = shallowRef<
    Record<string, XMLHttpRequest | Promise<unknown>>
  >({});
  const inputRef = shallowRef<HTMLInputElement>();

  const disabled = useDisabled();

  /**
   * @description 调用原生input组件，从而获取文件
   */
  const handleClick = () => {
    if (!disabled.value) {
      inputRef.value!.value = "";
      inputRef.value!.click();
    }
  };

  /**
   * @description 获取选中的文件
   */
  const handleChange = (e: Event) => {
    const files = (e.target as HTMLInputElement).files;
    if (!files) return;
    uploadFiles(Array.from(files));
  };

  /**
   * @description 获取得到的文件列表，如果为空则返回，先检验是否超过限制，超过限制则执行onExceed回调，
   * 如果不是多选选第一个，给每个文件分配id，执行handleStart钩子，并且按autoUpload是否自动上传
   */
  const uploadFiles = (files: File[]) => {
    if (files.length === 0) return;

    const { autoUpload, limit, fileList, multiple, onStart, onExceed } = props;

    if (limit && fileList.length + files.length > limit) {
      onExceed(files, fileList);
      return;
    }

    // 如果不是多选选第一个
    if (!multiple) {
      files = files.slice(0, 1);
    }

    for (const file of files) {
      const rawFile = file as UploadRawFile;
      rawFile.uid = genFileId();
      onStart(rawFile);
      if (autoUpload) upload(rawFile);
    }
  };

  /**
   * @description 执行beforeUpload钩子，判断钩子的返回值是Blob还是File，如果是Blob将其转化为File
   */
  const upload = async (rawFile: UploadRawFile) => {
    inputRef.value!.value = "";

    if (!props.beforeUpload) {
      return doUpload(rawFile);
    }

    let hookResult: Exclude<
      ReturnType<UploadHooks["beforeUpload"]>,
      Promise<any>
    >;
    try {
      hookResult = await props.beforeUpload(rawFile);
    } catch {
      hookResult = false;
    }

    if (hookResult === false) {
      props.onRemove(rawFile);
      return;
    }

    let file: File = rawFile;
    if (hookResult instanceof Blob) {
      if (hookResult instanceof File) {
        file = hookResult;
      } else {
        file = new File([hookResult], rawFile.name, {
          type: rawFile.type,
        });
      }
    }

    // 新的hookResult没有uid，需要为其分配
    doUpload(
      Object.assign(file, {
        uid: rawFile.uid,
      }),
    );
  };

  /**
   * @description 上传文件，requests是一个对象，通过uid存放了所有当前正在上传的请求，
   * 如果没有传入httpRequest则用的是默认的ajax请求，请求成功或失败后将从requests中删除
   */
  const doUpload = (rawFile: UploadRawFile) => {
    const {
      headers,
      data,
      method,
      withCredentials,
      name: filename,
      action,
      onProgress,
      onSuccess,
      onError,
      httpRequest,
    } = props;

    const { uid } = rawFile;
    const options: UploadRequestOptions = {
      headers: headers || {},
      withCredentials,
      file: rawFile,
      data,
      method,
      filename,
      action,
      // 执行handleProgress
      onProgress: (evt) => {
        onProgress(evt, rawFile);
      },
      // 执行handleSuccess
      onSuccess: (res) => {
        onSuccess(res, rawFile);
        delete requests.value[uid];
      },
      // 执行handleError
      onError: (err) => {
        onError(err, rawFile);
        delete requests.value[uid];
      },
    };
    const request = httpRequest(options);
    requests.value[uid] = request;
    // 如果为用户自定义的axios等Promise请求，则成功后执行handleSuccess，失败执行handleError
    if (request instanceof Promise) {
      request.then(options.onSuccess, options.onError);
    }
  };

  /**
   * @description 停止file文件的传输，没有file就停止所有传输
   */
  const abort = (file?: UploadFile) => {
    Object.keys(requests.value).forEach((uid) => {
      if (String(file?.uid) === uid) {
        const req = requests.value[uid];
        if (req instanceof XMLHttpRequest) req.abort();
        delete requests.value[uid];
      }
    });
  };

  return {
    inputRef,
    disabled,
    handleClick,
    handleChange,
    uploadFiles,
    upload,
    abort,
  };
};
