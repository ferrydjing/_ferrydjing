export const log = (...msg) => {
  if (process && process.env && process.env.NODE_ENV !== 'production') {
    console.log(...msg)
  }
}
