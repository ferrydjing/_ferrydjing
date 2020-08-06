import { log } from '../log'
import { session } from './session'

export const store = {
  get: (key) => {
    let res = null
    try {
      if (localStorage.getItem(key)) {
        res = JSON.parse(localStorage.getItem(key))
      }
    } catch (error) {
      log(error)
    }
    return res
  },
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
      return true
    } catch (error) {
      log(error)
      return false
    }
  },
  session
}
