/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  s = s.toLowerCase()
  let left =  0
  let right = s.length-1
  let reg = /[a-z0-9]/
  while(left<right){
    while(!reg.test(s[left])){
      left++
    }
    while(!reg.test(s[right])){
      right--
    }
    if(s[left++] !== s[right--]){
      return false
    }
  }
  return true
};
const s="A man, a plan, a canal: Panam"
console.log(isPalindrome(s))