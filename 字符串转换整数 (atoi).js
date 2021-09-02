/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  s = s.trim()
  s=s.replace(/e/,'s')
  let num = parseFloat(s)
  console.log(num)
  if (isNaN(num)) {
    return 0
  } else if (num <-2147483648) {
    return -2147483648
  } else if (num >2147483647) {
    return 2147483647
  } else {
    return num
  }
};
const s = "   -115579378e25"
console.log(myAtoi(s))