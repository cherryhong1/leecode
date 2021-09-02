/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let len = nums.length
  let j = 0
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      len --
      nums.splice(i, 1)
      nums.push(0)
      i--
    }
  }
  return nums
};
const nums = [0, 0, 1]
console.log(moveZeroes(nums))