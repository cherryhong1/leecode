/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === val) {
  //     nums.splice(i, 1)
  //     i--
  //   }
  // }
  // return nums.length
  let fast = 0
  let slow = 0
  while(fast< nums.length){
    if(nums[fast] === val){
      fast++
    }else{
      nums[slow++] = nums[fast++]
    }
  }
  return slow
};
const nums = [0,1,2,2,3,0,4,2], val = 3
console.log(removeElement(nums, val))