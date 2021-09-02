/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
   let len = prices.length
   let result = 0
  for(let i = 0;i<len-1;i++){
    result += Math.max((prices[i+1]-prices[i]),0)
  }
  return result
};
const prices = [7,6,4,3,1]

console.log(maxProfit(prices))