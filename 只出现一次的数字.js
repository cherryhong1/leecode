// var singleNumber = function(nums) {
//   let len = nums.length
//   for(let i = len;i>=0;i--){
//     let nums2 = nums.splice(i-1,1)
//    if(nums.indexOf(nums2[0]) === -1){
//     return nums2[0]
//    }
//    nums.push(nums2[0])
   
//   }
//   return -1
// };
var singleNumber = function(nums) {
  let len = nums.length
  for(let i = 0;i<len;i++){
    if(nums.slice(0,i).concat(nums.slice(i+1)).indexOf(nums[i]) === -1) {
      return nums[i]
    }
   
  }
  return -1
};

const nums = [2,2,1,4,5,6,3,1,3,4,5]
console.log(singleNumber(nums))