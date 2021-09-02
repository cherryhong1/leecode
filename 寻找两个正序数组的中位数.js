/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
  let arr = []
  arr = nums1.concat(nums2)
  console.log(arr)
  let resonNum = 0
 const concatArr =  arr.sort((a,b)=>{
      a>b
  })
  const length = concatArr.length
  const halfLength = length/2
  if(length === 0){
      resonNum  = 0.0000
  }else if(length ===1) {
       resonNum  = concatArr[0]
  }
  else if(halfLength ===0) {
      resonNum = (concatArr[halfLength]+concatArr[halfLength-1])/2
  }else{
      resonNum = concatArr[length/2]
  }
   return resonNum
};