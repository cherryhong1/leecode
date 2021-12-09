var romanToInt = function (s) {
  const obj = {
    I: 1,
    V: 5,
    X:10,
    L: 50,
    C: 100,
    D:500,
    M: 1000,
  };
  let sum = 0;
  for (var i = 0; i < s.length; i++) {
    if (obj[s[i + 1]] > obj[s[i]]) {
      sum += obj[s[i + 1]] - obj[s[i]];
      i++;
      continue;
    }
    sum += obj[s[i]];
  }
  return sum;
};
const s = "DCXXI";
console.log(romanToInt(s));