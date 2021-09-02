/**
 * @param {number} numRows
 * @return {number[][]}
 */
//  var generate = function(numRows) {
//   if(numRows>30||numRows <1) return 
//   let result = [[1]]
//   for (let i = 1; i < numRows ; i++) {
//     let arr = [1]
//     let prev = result[i-1]
//     for (let j = 0; j < prev.length-1; j++) {
//       arr.push(prev[j] + prev[j+1] )
//     }
//     arr.push(1)
//     result.push(arr)
//   }
//   return result
// };

var generate = function(numRows) {
  const list = [[1]];
  for(let i = 1; i < numRows; i++) {
      const arr = new Array(i+1);
      arr[0] = 1;
      arr[arr.length-1] = 1;
      for(let j = 1; j < arr.length - 1; j++) {
        arr[j] = list[i-1][j-1] + list[i-1][j];
      }
      list.push(arr);
  }

  return list;
};
var generate = function(numRows) {
  let arr = [[1]]
  return arr
};
console.log(generate(8))