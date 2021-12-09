/**
 * @param {string} s
 * @return {number}
 */
// var romanToInt = function (s) {
//   let sum = 0;
//   for (var i = 0; i < s.length; i++) {
//     const cur = s[i];
//     switch (cur) {
//       case "V":
//         sum += 5;
//         break;
//       case "L":
//         sum += 50;
//         break;
//       case "D":
//         sum += 500;
//         break;
//       case "M":
//         sum += 1000;
//         break;
//       default:
//         break;
//     }
//     if (cur === "I" && i + 1 < s.length && s.slice(i, i + 2) === "IV") {
//       sum += 4;
//       i = i + 1;
//     } else if (cur === "I" && i + 1 < s.length && s.slice(i, i + 2) === "IX") {
//       sum += 9;
//       i = i + 1;
//     } else if (cur === "I") {
//       sum += 1;
//     }
//     if (cur === "X" && i + 1 < s.length && s.slice(i, i + 2) === "XL") {
//        i = i + 1;
//       sum += 40;
//     } else if (cur === "X" && i + 1 < s.length && s.slice(i, i + 2) === "XC") {
//        i = i + 1;
//       sum += 90;
//     } else if (cur === "X") {
//       sum += 10;
//     }
//     // debugger
//     if (cur === "C" && i + 1 < s.length && s.slice(i, i + 2) === "CD") {
//       sum += 400;
//        i = i + 1;
//     } else if (cur === "C" && i + 1 < s.length && s.slice(i, i + 2) === "CM") {
//       console.log(s.slice(i, i + 2))
//       console.log(s)
//       sum += 900;
//  i = i + 1;
//       console.log(s)
//     } else if (cur === "C") {
//       sum += 100;
//     }
//   }
//   return sum;
// };

var romanToInt = function (s) {
  const obj = {
    I: 1,
    IV: 4,
    IX: 9,
    V: 5,
    XL: 40,
    L: 50,
    XC: 90,
    CD: 400,
    C: 500,
    CM: 900,
    M: 1000,
  };
  const sum = 0;
  for (var i = 0; i < s.length; i++) {
    if (obj[s[i + 1]] > obj[s[i]]) {
      sum += obj[s[i + 1]] - obj[s[i]];
      i++;
      continue;
    }
    sum += obj[s[i]];
  }
};
const s = "MCMXCIV";
console.log(romanToInt(s));