var rotate = function (nums, k) {
  if(k === 0||nums.length === 1) return nums
  if (nums.length > k) {
   const nums1 =  nums.slice(-k)
  nums.splice(nums.length-k) 
  nums = nums1.concat(nums)
  console.log(nums)
  //  nums.splice(nums.length - k)
  //   for(let i = nums1.length-1;i>=0;i--){
  //     nums.unshift(nums1[i])
  //   }
  }else if(nums.length < k){
    rotate(nums,k%nums.length)
  }
    
  return nums
};
const nums = [1,2,3,4], k = 5
// [3,1,2]  [4,1,2,3]

// [2,3,1] [3,4,1,2]
// [1,2,3] [2,3,4,1]
// [3,1,2] [1,2,3,4]
//         [4,1,2,4]
console.log(rotate(nums, k))