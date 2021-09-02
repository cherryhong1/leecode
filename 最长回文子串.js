/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let word = ''
  let left = 0
  let right = 0
  let flag = false
  for (let i = 1; i < s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (s[i] === s[j]) {
        left = i
        right = j
        flag = true
        break
      }
      if (flag) {
        break
      }
    }
  }
  console.log(left, right)
  if (right) {
    word = s.substring(left, right + 1)
  } else {
    word = s[0]
  }
  return word
};
let s = "aacabdkacaa"
// "aca"
console.log(longestPalindrome(s))