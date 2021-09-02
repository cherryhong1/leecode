/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
   let str = strs[0]
   let s = ''
     for (let i = 0; i < str.length; i++) {
      if(strs.every(item =>item[i] === str[i])) {
        s+= str[i]
      }else{
        break
      }     
     }
   return s
};

const strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs))