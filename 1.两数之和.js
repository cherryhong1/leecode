/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  if(nums.length<2 || nums.length>10^4){
    return false
  }

  getIndex(0)
};
function getIndex(index){
  for (let i = index+1; i < nums.length; i++) {
    if(nums[i]+nums[index] === target){
      return [index,i]
    }else{
      index ++
      getIndex(index)
    }
    
  }
}
// @lc code=end

