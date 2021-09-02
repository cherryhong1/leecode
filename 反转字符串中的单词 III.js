/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let arr = s.split(" ")
  let result = ''
  arr.forEach(ele => {
    let eleArr = ele.split('')
    eleArr.reverse()
    result += eleArr.join("")+" "
  });
  result = result.trim()
  return result
};
const  s = "Let's take LeetCode contest"
console.log(reverseWords(s))