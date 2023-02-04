import type {
  UploadProps,
  UploadFile,
  UploadFiles,
  UploadRawFile,
  UploadStatus,
} from "./upload";
import { useVmodel } from "@etu-design/hooks";
import type { Ref } from "vue";
import type {
  UploadContentInstance,
  UploadContentProps,
} from "./upload-content";

const revokeObjectURL = (file: UploadFile) => {
  if (file.url?.startsWith("blob:")) {
    URL.revokeObjectURL(file.url);
  }
};

let fileId = 1;
export const genFileId = () => Date.now() + fileId++;

/**
 * @param props 传入的Upload参数
 * @param uploadRef upload-content的Ref
 */
export const useUpload = (
  props: UploadProps,
  uploadRef: Ref<UploadContentInstance | null>,
) => {
  // 上传的文件列表
  const uploadFiles = useVmodel(
    props as Omit<UploadProps, "fileList"> & { fileList: UploadFiles },
    "fileList",
  );

  // 通过uid获取对应的文件
  const getFile = (rawFile: UploadRawFile) =>
    uploadFiles.value.find((file) => file.uid === rawFile.uid);

  // 用来触发upload-content组件的abort
  const abort = (file: UploadFile) => {
    uploadRef.value?.abort(file);
  };

  // 清除所有对应的states的文件
  const clearFiles = (
    /** @default ['ready', 'uploading', 'success', 'fail'] */
    states: UploadStatus[] = ["ready", "uploading", "success", "fail"],
  ) => {
    uploadFiles.value = uploadFiles.value.filter(
      (row) => !states.includes(row.status),
    );
  };

  /**
   * @description 判断是否是由于文件引发的错误，是的话标记状态为fail，将文件从上传文件列表中删除，触发用户的onError和onChange回调
   */
  const handleError: UploadContentProps["onError"] = (err, rawFile) => {
    const file = getFile(rawFile);
    if (!file) return;

    console.error(err);
    file.status = "fail";
    uploadFiles.value.splice(uploadFiles.value.indexOf(file), 1);
    props.onError(err, file, uploadFiles.value);
    props.onChange(file, uploadFiles.value);
  };

  /**
   * @description 判断是否是由于文件引发，是的话标记状态为uploading，设置文件上传进度百分比，触发用户的onProgress回调
   */
  const handleProgress: UploadContentProps["onProgress"] = (evt, rawFile) => {
    const file = getFile(rawFile);
    if (!file) return;

    props.onProgress(evt, file, uploadFiles.value);
    file.status = "uploading";
    file.percentage = Math.round(evt.percent);
  };

  /**
   * @description 判断是否是由于文件引发，是的话标记状态为success，将文件的响应值设置为返回的响应值，触发用户的onSuccess和onChange回调
   */
  const handleSuccess: UploadContentProps["onSuccess"] = (
    response,
    rawFile,
  ) => {
    const file = getFile(rawFile);
    if (!file) return;

    file.status = "success";
    file.response = response;
    props.onSuccess(response, file, uploadFiles.value);
    props.onChange(file, uploadFiles.value);
  };

  /**
   * @description 给文件赋一个uid作为标识，放入uploadFiles数组中，并且触发onChange回调
   */
  const handleStart: UploadContentProps["onStart"] = (file) => {
    if (file.uid === null || file.uid === undefined) file.uid = genFileId();
    const uploadFile: UploadFile = {
      name: file.name,
      percentage: 0,
      status: "ready",
      size: file.size,
      raw: file,
      uid: file.uid,
    };
    if (props.listType === "picture-card" || props.listType === "picture") {
      try {
        uploadFile.url = URL.createObjectURL(file);
      } catch (err: unknown) {
        props.onError(err as Error, uploadFile, uploadFiles.value);
      }
    }
    uploadFiles.value = [...uploadFiles.value, uploadFile];
    props.onChange(uploadFile, uploadFiles.value);
  };

  /**
   * @description 如果存在文件，并且通过beforeRemove的检测，则中止上传操作，并从fileList中删除，触发onRemove回调
   */
  const handleRemove: UploadContentProps["onRemove"] = async (
    file,
  ): Promise<void> => {
    const uploadFile = file instanceof File ? getFile(file) : file;
    if (!uploadFile) throw Error("找不到要删除的文件");

    const doRemove = (file: UploadFile) => {
      abort(file);
      const fileList = uploadFiles.value;
      fileList.splice(fileList.indexOf(file), 1);
      props.onRemove(file, fileList);
      revokeObjectURL(file);
    };

    if (props.beforeRemove) {
      const before = await props.beforeRemove(uploadFile, uploadFiles.value);
      if (before !== false) doRemove(uploadFile);
    } else {
      doRemove(uploadFile);
    }
  };

  /**
   * @description 手动上传文件
   */
  function submit() {
    uploadFiles.value
      .filter(({ status }) => status === "ready")
      .forEach(({ raw }) => raw && uploadRef.value?.upload(raw));
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
    handleProgress,
  };
};
