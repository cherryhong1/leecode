/**
 * @param {number[]} nums
 * @return {number}
 */
 var arrayPairSum = function(nums) {
   let result = 0
  nums.sort((a,b)=>{
      return a-b
  })
  for (let i = 0; i < nums.length; i++) {
    if(i%2 === 0){
      result += nums[i]
    }
  }
  return result
};
const nums = [6,2,6,5,1,2]
console.log(arrayPairSum(nums))