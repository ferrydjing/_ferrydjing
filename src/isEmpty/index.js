import { typeCheck } from '../typeCheck'
export const isEmpty = (obj) => {
  if (typeCheck(obj) === 'array' && obj.length === 0) {
    return true
  } else if (typeCheck(obj) === 'object' && JSON.stringify(obj) === '{}') {
    return true
  } else if (typeCheck(obj) === 'string' && obj === '') {
    return true
  } else {
    return false
  }
}
