/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let s = ""
  if (n === 1) return "1"
  let sl = countAndSay(n - 1)
  let count = 1
  let item= sl[0]
  for (let i = 1; i < sl.length; i++) {
    if (sl[i] === item) {
      count++
    } else {
      s += `${count}${item}`
      count = 1
      item = sl[i]
    }

  }
  return s+`${count}${item}`
};
const n = 4
console.log(countAndSay(n))