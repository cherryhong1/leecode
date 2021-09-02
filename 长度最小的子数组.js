/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
//  var minSubArrayLen = function(target, nums) {
//   let quick = 0,slow = 0
//   let sum = 0
//   let min = 0
//   let len = nums.length
//   while(quick<len){
//     sum += nums[quick]
//     if(sum>=target){
//       while(sum-nums[slow]>=target){
//         sum = sum-nums[slow]
//         slow++
//       }
//       min = min ===0?quick-slow+1:Math.min(min,quick-slow+1)
//     }
//     quick++
//   }
//   return min
// };
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
  let slow = fast = 0
  let sum= 0
  let min = 0
  while(fast<nums.length){
    sum += nums[fast]
    if(sum>=target){ 
      while(sum-nums[slow]>= target){
        sum = sum-nums[slow]
        slow++
      }
      min = min===0?fast-slow+1:Math.min(fast-slow+1,min)
    }
    fast++
  }
  return min
};
const target = 15, nums = [1,2,3,4,5,6]
console.log(minSubArrayLen(target, nums))