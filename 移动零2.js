var moveZeroes = function(nums) {
  for(var i = 0;i< nums.length;i++){
    if(nums[i] === 0){
      nums.splice(i,1)
      nums.push(0)
      i--
    }
  }

  return nums
};
const nums = [0,0,1,19,0,2,3,1]
console.log(moveZeroes(nums))