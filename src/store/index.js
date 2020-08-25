import { log } from '../log'
import { session } from './session'
export { decodeBase64, encodeBase64 } from '../base64'

export const store = {
  get: (key, isBase64) => {
    let res = null
    try {
      if (localStorage.getItem(key)) {
        if (isBase64) {
          res = decodeBase64(localStorage.getItem(key))
        } else {
          res = JSON.parse(localStorage.getItem(key))
        }
      }
    } catch (error) {
      log(error)
    }
    return res
  },
  set: (key, value, isBase64) => {
    try {
      if (isBase64) {
        localStorage.setItem(key, encodeBase64(value))
      } else {
        localStorage.setItem(key, JSON.stringify(value))
      }
      return true
    } catch (error) {
      log(error)
      return false
    }
  },
  session
}
