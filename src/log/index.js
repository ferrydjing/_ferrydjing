export const log = (...msg) => {
  try {
    if (process && process.env && process.env.NODE_ENV !== 'production') {
      console.log(...msg)
    }
  } catch (error) {
    console.log(...msg)
  }
}
