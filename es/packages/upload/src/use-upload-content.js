import { shallowRef } from "vue";
import { genFileId } from "./use-upload.js";
import { useDisabled } from "../../hooks/use-common-props/index.js";
import "../../utils/types.js";
import "../../hooks/use-z-index/index.js";
const useUploadContent = (props) => {
  const requests = shallowRef({});
  const inputRef = shallowRef();
  const disabled = useDisabled();
  const handleClick = () => {
    if (!disabled.value) {
      inputRef.value.value = "";
      inputRef.value.click();
    }
  };
  const handleChange = (e) => {
    const files = e.target.files;
    if (!files)
      return;
    uploadFiles(Array.from(files));
  };
  const uploadFiles = (files) => {
    if (files.length === 0)
      return;
    const { autoUpload, limit, fileList, multiple, onStart, onExceed } = props;
    if (limit && fileList.length + files.length > limit) {
      onExceed(files, fileList);
      return;
    }
    if (!multiple) {
      files = files.slice(0, 1);
    }
    for (const file of files) {
      const rawFile = file;
      rawFile.uid = genFileId();
      onStart(rawFile);
      if (autoUpload)
        upload(rawFile);
    }
  };
  const upload = async (rawFile) => {
    inputRef.value.value = "";
    if (!props.beforeUpload) {
      return doUpload(rawFile);
    }
    let hookResult;
    try {
      hookResult = await props.beforeUpload(rawFile);
    } catch {
      hookResult = false;
    }
    if (hookResult === false) {
      props.onRemove(rawFile);
      return;
    }
    let file = rawFile;
    if (hookResult instanceof Blob) {
      if (hookResult instanceof File) {
        file = hookResult;
      } else {
        file = new File([hookResult], rawFile.name, {
          type: rawFile.type
        });
      }
    }
    doUpload(
      Object.assign(file, {
        uid: rawFile.uid
      })
    );
  };
  const doUpload = (rawFile) => {
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
      httpRequest
    } = props;
    const { uid } = rawFile;
    const options = {
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
      }
    };
    const request = httpRequest(options);
    requests.value[uid] = request;
    if (request instanceof Promise) {
      request.then(options.onSuccess, options.onError);
    }
  };
  const abort = (file) => {
    Object.keys(requests.value).forEach((uid) => {
      if (String(file == null ? void 0 : file.uid) === uid) {
        const req = requests.value[uid];
        if (req instanceof XMLHttpRequest)
          req.abort();
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
    abort
  };
};
export {
  useUploadContent
};
