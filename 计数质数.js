var countPrimes = function (n) {
  const result = new Array(n).fill(true)
  let count=0
  for(let i=2;i<n;i++){
    debugger
      if(result[i]) ++count
     for(let j=i*2;j<n;j=j+i){
         if(j%i===0){
             result[j]=false
         }
     }
  }
  return count
};

console.log(countPrimes(10));
