/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {

 for (let i = 0; i < matrix.length; i++) {
   const ele = matrix[i];
   for (let j = i; j < ele.length; j++) {
    //  matrix[i][j] = matrix[j][i]
    [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]

   }
 }
 for (let k = 0; k < matrix.length; k++) {
   matrix[k].reverse()
 }
  return matrix
};
const matrix =
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
console.log(rotate(matrix))

// [
//   [7,4,1],
//   [8.5,3],
//   [9,8,7]
// ]

// [
//   [1,4,7]
//   [2,5,8]
//   [3,6,9]
// ]