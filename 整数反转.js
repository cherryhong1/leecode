/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function (x) {
//   if (x === 0) return x
//   if (x < 0) {
//     let arr = []
//     const y = (-x).toString()
//     for (let i = 0; i < y.length; i++) {
//      arr.unshift(y[i])
//     }
//     let num = -Number(arr.join('')) < -Math.pow(2,31) ? 0 : -Number(arr.join(''))
//     return num
//   } else {
//     let z = x.toString()
//     let arr2 = []
//     for (let j = 0; j < z.length; j++) {
//       arr2.unshift(z[j])
//     }
//     console.log(Number(arr2.join('')) > (Math.pow(2,31)-1))
//     let nums2 = Number(arr2.join('')) > (Math.pow(2,31)-1)? 0:Number(arr2.join(''))
//     return nums2
//   }
// };
var reverse = function(x) {
  let res= 0
  let underZone = x< 0 ?true:false
  x = Math.abs(x)
  while(x !== 0) {
    res = x%10 + res*10
    x= Math.floor(x/10)
  }
  res = underZone?-res:res
  res = res>Math.pow(2,31) -1 ||res< -Math.pow(2,31) || res === 0 ? 0 : res
  return res
}
const x = -12330577
console.log(reverse(x))