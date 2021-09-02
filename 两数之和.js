/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   let len = nums.length
//   for (let i = 0; i < len - 1; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }
// };
var twoSum = function (nums, target) {
  let len = nums.length
  let map = new Map()
  nums.map((item,index)=>{
    console.log(item,index)
    map.set(item,index)
  })
  for(var i =0;i<len;i++){
    if(map.has(target-nums[i]) && map.get(target-nums[i])!==i){
      console.log(map.get(target-nums[i]))
      return [i,map.get(target-nums[i])]
    }
  }
};
const nums = [2, 7, 11, 15],
  target = 18
console.log(twoSum(nums, target))

