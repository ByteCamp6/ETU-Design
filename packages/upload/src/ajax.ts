import type {
  UploadProgressEvent,
  UploadRequestHandler,
  UploadRequestOptions,
} from "./upload";

import { UploadAjaxError } from "./upload";

function getError(
  action: string,
  option: UploadRequestOptions,
  xhr: XMLHttpRequest,
) {
  let msg: string;
  if (xhr.response) {
    msg = `${xhr.response.error || xhr.response}`;
  } else if (xhr.responseText) {
    msg = `${xhr.responseText}`;
  } else {
    msg = `fail to ${option.method} ${action} ${xhr.status}`;
  }

  return new UploadAjaxError(msg, xhr.status, option.method, action);
}

function getBody(xhr: XMLHttpRequest): XMLHttpRequestResponseType {
  const text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }

  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

export const ajaxUpload: UploadRequestHandler = (option) => {
  if (typeof XMLHttpRequest === "undefined")
    throw new Error("XMLHttpRequest is undefined");

  const xhr = new XMLHttpRequest();
  const action = option.action;

  // xhr.upload.onprogress 上传事件，监控上传进度
  if (xhr.upload) {
    xhr.upload.addEventListener("progress", (evt) => {
      const progressEvt = evt as UploadProgressEvent;
      progressEvt.percent = evt.total > 0 ? (evt.loaded / evt.total) * 100 : 0;
      option.onProgress(progressEvt);
    });
  }

  const formData = new FormData();

  // 上传时附带的额外参数
  if (option.data) {
    for (const key of Object.keys(option.data)) {
      const value = option.data[key];
      if (Array.isArray(value)) formData.append(key, ...value);
      else formData.append(key, value);
    }
  }
  formData.append(option.filename, option.file, option.file.name);

  // 侦测error事件，触发用户的onError回调
  xhr.addEventListener("error", () => {
    option.onError(getError(action, option, xhr));
  });

  // 侦测load事件，触发用户的onSuccess回调
  xhr.addEventListener("load", () => {
    // 返回的状态为2xx
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(action, option, xhr));
    }
    option.onSuccess(getBody(xhr));
  });

  // xhr.open接受 3个参数：要发送的请求的类型（“get”、"post"等）、请求的URL和表示是否异步发送请求的布尔值
  xhr.open(option.method, action, true);

  // 设置cookies
  if (option.withCredentials && "withCredentials" in xhr) {
    xhr.withCredentials = true;
  }

  //设置请求头
  const headers = option.headers || {};
  if (headers instanceof Headers) {
    headers.forEach((value, key) => xhr.setRequestHeader(key, value));
  } else {
    for (const key of Object.keys(headers)) {
      const value = headers[key];
      if (value === undefined || value === null) continue;
      xhr.setRequestHeader(key, String(value));
    }
  }

  // 用于发送HTTP请求,传入formData
  xhr.send(formData);
  return xhr;
};
