import { log } from '../../log'
// 编码
const utf8_to_b64 = (str) => {
  return window.btoa(unescape(encodeURIComponent(str)))
}

// 解码
const b64_to_utf8 = (str) => {
  return decodeURIComponent(escape(window.atob(str)))
}

const encodeBase64 = (obj) => {
  return utf8_to_b64(JSON.stringify(obj))
}

const decodeBase64 = (str) => {
  return JSON.parse(b64_to_utf8(str))
}

export const session = {
  get(key, isBase64) {
    let res = null
    try {
      if (sessionStorage.getItem(key)) {
        if (isBase64) {
          res = decodeBase64(sessionStorage.getItem(key))
        } else {
          res = JSON.parse(sessionStorage.getItem(key))
        }
      }
    } catch (error) {
      log(error)
    }
    return res
  },
  set(key, value, isBase64) {
    try {
      if (isBase64) {
        sessionStorage.setItem(key, encodeBase64(value))
      } else {
        sessionStorage.setItem(key, JSON.stringify(value))
      }
      return true
    } catch (error) {
      log(error)
      return false
    }
  }
}
