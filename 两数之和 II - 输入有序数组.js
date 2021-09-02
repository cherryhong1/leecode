var twoSum = function (numbers, target) {
  // let map = new Map()
  // numbers.map((item,index)=>{
  //   map.set(item,index)
  // })
  // for (let i = 0; i < numbers.length; i++) {
  //   let rightNum = target - numbers[i]
  //   if(map.has(rightNum)&&map.get(rightNum) !== i) {
  //     return [i+1,map.get(rightNum)+1]
  //   }

  // }
  let l = 0
  let r = numbers.length - 1
  while (numbers[l] + numbers[r] !== target) {
    if (numbers[l] + numbers[r] > target) {
      r--
      console.log(r)
    } else {
      l++
    }
  }
  return [l+1,r+1]
};
const numbers = [2, 7, 11, 15],
  target = 18
console.log(twoSum(numbers, target))