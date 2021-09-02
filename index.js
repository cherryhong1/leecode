/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  s = s.trim()
  let num = parseFloat(s)
  if (isNaN(num)) {
    return 0
  } else if (s < -Math.pow(2, 31)) {
    return -2147483648
  } else if (s > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1
  } else {
    return num
  }
};
const s = "41931241934193419341934193419341934193"
console.log(myAtoi(s))