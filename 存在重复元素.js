var containsDuplicate = function(nums) {
  const len = nums.length
  const len2 = new Set(nums).size
  console.log(len,len2)
  return len !==len2
};
const nums =[1,1,1,3,3,4,3,2,4,2]
console.log(containsDuplicate(nums))