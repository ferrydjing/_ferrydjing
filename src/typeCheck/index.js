export const typeCheck = (obj, type) => {
  const map = {
    '[object String]': 'string',
    '[object Number]': 'number',
    '[object Boolean]': 'boolean',
    '[object Symbol]': 'symbol',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Function]': 'function',
    '[object Date]': 'date',
    '[object Array]': 'array',
    '[object RegExp]': 'regexp',
    '[object Error]': 'error',
    '[object HTMLDocument]': 'document',
    '[object global]': 'window',
    '[object Object]': 'object'
  }
  const tsc = Object.prototype.toString.call
  const res = map[Object.prototype.toString.call(obj)] || 'undefined'
  if (type && map[Object.prototype.toString.call(obj)] === 'string') {
    if (res === type.toLowerCase()) {
      return true
    } else {
      return false
    }
  }
  return res
}
