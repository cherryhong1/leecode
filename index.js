/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  return [...new Set(nums)]
};
const nums = [1,1,2]
console.log(removeDuplicates(nums))