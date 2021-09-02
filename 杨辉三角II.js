/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let list = [
    [1]
  ]
  for (let i = 1; i < rowIndex+1; i++) {
    let pre = list[i-1] //上一个数
    const arr = new Array(i + 1)
    arr[0] = 1
    arr[arr.length - 1] = 1
    for (let j = 1; j < arr.length - 1; j++) {
      arr[j] = pre[j-1]+pre[j]
    }
    list.push(arr)
  }
  return list[rowIndex]
};

console.log(getRow(5))