/**
 * 防抖函数
 */
export const deBounce = (fn, delay) => {
  let timer = null
  return function () {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this)
    }, delay)
  }
}