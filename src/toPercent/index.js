export const toPercent = (point) => {
  if (typeof point === 'string' && !Number(point)) return point
  if (point === 0) return 0
  let str = Number(point * 100).toFixed(2)
  str += '%'
  return str
}
