export const toCutDecimals = (num, len = 2) => {
  num += ''
  if (num.indexOf('.') !== -1) {
    let arr = num.split('.')
    if (arr[1].length < len) {
      return arr.join('.') * 1
    } else {
      arr[1] = arr[1].substr(0, len)
      while (arr[1].length) {
        if (arr[1][arr.length - 1] === '0') {
          arr[1] = arr[1].substr(0, arr[1].length - 1)
        } else {
          break
        }
      }
      if (arr[1].length > 0) {
        return arr.join('.') * 1
      } else {
        return arr[0] * 1
      }
    }
  } else {
    return num * 1
  }
}
