"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const upload = require("./upload.js");
function getError(action, option, xhr) {
  let msg;
  if (xhr.response) {
    msg = `${xhr.response.error || xhr.response}`;
  } else if (xhr.responseText) {
    msg = `${xhr.responseText}`;
  } else {
    msg = `fail to ${option.method} ${action} ${xhr.status}`;
  }
  return new upload.UploadAjaxError(msg, xhr.status, option.method, action);
}
function getBody(xhr) {
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
const ajaxUpload = (option) => {
  if (typeof XMLHttpRequest === "undefined")
    throw new Error("XMLHttpRequest is undefined");
  const xhr = new XMLHttpRequest();
  const action = option.action;
  if (xhr.upload) {
    xhr.upload.addEventListener("progress", (evt) => {
      const progressEvt = evt;
      progressEvt.percent = evt.total > 0 ? (evt.loaded / evt.total) * 100 : 0;
      option.onProgress(progressEvt);
    });
  }
  const formData = new FormData();
  if (option.data) {
    for (const key of Object.keys(option.data)) {
      const value = option.data[key];
      if (Array.isArray(value)) formData.append(key, ...value);
      else formData.append(key, value);
    }
  }
  formData.append(option.filename, option.file, option.file.name);
  xhr.addEventListener("error", () => {
    option.onError(getError(action, option, xhr));
  });
  xhr.addEventListener("load", () => {
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(action, option, xhr));
    }
    option.onSuccess(getBody(xhr));
  });
  xhr.open(option.method, action, true);
  if (option.withCredentials && "withCredentials" in xhr) {
    xhr.withCredentials = true;
  }
  const headers = option.headers || {};
  if (headers instanceof Headers) {
    headers.forEach((value, key) => xhr.setRequestHeader(key, value));
  } else {
    for (const key of Object.keys(headers)) {
      const value = headers[key];
      if (value === void 0 || value === null) continue;
      xhr.setRequestHeader(key, String(value));
    }
  }
  xhr.send(formData);
  return xhr;
};
exports.ajaxUpload = ajaxUpload;
