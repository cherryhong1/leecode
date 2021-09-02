/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
  s.trim()
 let arr = s.split(/\ +/)
  arr.reverse()
  const reArr = arr.join(' ').trim()
  console.log(reArr)
  return reArr
};
s = "  Bob    Loves  Alice   "
console.log(reverseWords(s))