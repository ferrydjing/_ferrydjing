// 编码
const utf8_to_b64 = (str) => {
  return window.btoa(unescape(encodeURIComponent(str)))
}

// 解码
const b64_to_utf8 = (str) => {
  return decodeURIComponent(escape(window.atob(str)))
}

export const encodeBase64 = (obj) => {
  return utf8_to_b64(JSON.stringify(obj))
}

export const decodeBase64 = (str) => {
  return JSON.parse(b64_to_utf8(str))
}
