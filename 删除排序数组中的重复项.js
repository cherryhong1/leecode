var removeDuplicates = function (nums) {
  let num = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[num] != nums[i]) {
      nums[++num] = nums[i]
    }
  }
  return nums.length === 0 ? 0 : num+1
}
const nums = [0,0,1,1,1,2,2,3,3,3,4]
console.log(removeDuplicates(nums))
