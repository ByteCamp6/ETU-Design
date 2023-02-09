import "vue";
import "../../utils/types.js";
import { useVmodel } from "../../hooks/use-vmodel/index.js";
import "../../hooks/use-z-index/index.js";
const revokeObjectURL = (file) => {
  var _a;
  if ((_a = file.url) == null ? void 0 : _a.startsWith("blob:")) {
    URL.revokeObjectURL(file.url);
  }
};
let fileId = 1;
const genFileId = () => Date.now() + fileId++;
const useUpload = (props, uploadRef) => {
  const uploadFiles = useVmodel(
    props,
    "fileList"
  );
  const getFile = (rawFile) => uploadFiles.value.find((file) => file.uid === rawFile.uid);
  const abort = (file) => {
    var _a;
    (_a = uploadRef.value) == null ? void 0 : _a.abort(file);
  };
  const clearFiles = (states = ["ready", "uploading", "success", "fail"]) => {
    uploadFiles.value = uploadFiles.value.filter(
      (row) => !states.includes(row.status)
    );
  };
  const handleError = (err, rawFile) => {
    const file = getFile(rawFile);
    if (!file)
      return;
    console.error(err);
    file.status = "fail";
    uploadFiles.value.splice(uploadFiles.value.indexOf(file), 1);
    props.onError(err, file, uploadFiles.value);
    props.onChange(file, uploadFiles.value);
  };
  const handleProgress = (evt, rawFile) => {
    const file = getFile(rawFile);
    if (!file)
      return;
    props.onProgress(evt, file, uploadFiles.value);
    file.status = "uploading";
    file.percentage = Math.round(evt.percent);
  };
  const handleSuccess = (response, rawFile) => {
    const file = getFile(rawFile);
    if (!file)
      return;
    file.status = "success";
    file.response = response;
    props.onSuccess(response, file, uploadFiles.value);
    props.onChange(file, uploadFiles.value);
  };
  const handleStart = (file) => {
    if (file.uid === null || file.uid === void 0)
      file.uid = genFileId();
    const uploadFile = {
      name: file.name,
      percentage: 0,
      status: "ready",
      size: file.size,
      raw: file,
      uid: file.uid
    };
    if (props.listType === "picture-card" || props.listType === "picture") {
      try {
        uploadFile.url = URL.createObjectURL(file);
      } catch (err) {
        props.onError(err, uploadFile, uploadFiles.value);
      }
    }
    uploadFiles.value = [...uploadFiles.value, uploadFile];
    props.onChange(uploadFile, uploadFiles.value);
  };
  const handleRemove = async (file) => {
    const uploadFile = file instanceof File ? getFile(file) : file;
    if (!uploadFile)
      throw Error("找不到要删除的文件");
    const doRemove = (file2) => {
      abort(file2);
      const fileList = uploadFiles.value;
      fileList.splice(fileList.indexOf(file2), 1);
      props.onRemove(file2, fileList);
      revokeObjectURL(file2);
    };
    if (props.beforeRemove) {
      const before = await props.beforeRemove(uploadFile, uploadFiles.value);
      if (before !== false)
        doRemove(uploadFile);
    } else {
      doRemove(uploadFile);
    }
  };
  function submit() {
    uploadFiles.value.filter(({ status }) => status === "ready").forEach(({ raw }) => {
      var _a;
      return raw && ((_a = uploadRef.value) == null ? void 0 : _a.upload(raw));
    });
  }
  return {
    abort,
    submit,
    clearFiles,
    uploadFiles,
    handleStart,
    handleError,
    handleRemove,
    handleSuccess,
    handleProgress
  };
};
export {
  genFileId,
  useUpload
};
