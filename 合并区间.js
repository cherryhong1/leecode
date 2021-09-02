/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals= intervals.sort((a,b)=>a[0]-b[0])


 for(const i=0;i<intervals.length-1;i++){
  let a2 = intervals[i][1]
  let b1 = intervals[i+1][0]
  let b2 = intervals[i+1][1]
  if(a2>=b1){
    intervals[i][1] = a2>b2?a2:b2
    intervals.splice(i+1,1)
    i--
  }
 }
 return intervals
}