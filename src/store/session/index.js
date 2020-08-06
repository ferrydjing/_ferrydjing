import { log } from '../../log'

export const session = {
  get(key) {
    let res = null
    try {
      if (sessionStorage.getItem(key)) {
        res = JSON.parse(sessionStorage.getItem(key))
      }
    } catch (error) {
      log(error)
    }
    return res
  },
  set(key, value) {
    try {
      sessionStorage.setItem(key, JSON.stringify(value))
      return true
    } catch (error) {
      log(error)
      return false
    }
  }
}
