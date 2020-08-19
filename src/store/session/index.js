export { decodeBase64, encodeBase64 } from '../../base64'
import { log } from '../../log'

export const session = {
  get(key, isBase64) {
    let res = null
    try {
      if (!decodeBase64) {
        decodeBase64 = _fdj.decodeBase64
      }
    } catch (error) {
      var decodeBase64 = _fdj.decodeBase64
    }
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
      if (!encodeBase64) {
        encodeBase64 = _fdj.encodeBase64
      }
    } catch (error) {
      var encodeBase64 = _fdj.encodeBase64
    }
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
