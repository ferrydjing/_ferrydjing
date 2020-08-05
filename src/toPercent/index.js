import calc from 'js-calculation'
import { toCutDecimals } from '../toCutDecimals'

export const toPercent = (point) => {
  if (typeof point === 'string' && !Number(point)) return point
  if (point === 0) return 0
  let str = toCutDecimals(calc(`${point} 100 *`))
  str += '%'
  return str
}
