// --------problem-3

// function checkDigitsInName(name) {
//   if (typeof name !== "string") {
//     return "Invalid Input";
//   }
//   let splitString = name.split("");
//   //   console.log(splitString);
//   for (let i = 0; i < splitString.length; i++) {
//     // console.log(i);
//     for (let j = 0; j < 10; j++) {
//       //   console.log("amiajjjj======", j);
//       if (j == splitString[i]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// let em = checkDigitsInName("Rajutre96565");
// console.log(em);
// ---ok

// ------problem--4
// --------simpole
// ----ok
const r = [3, 5, 7, 11, 6];
let j = 0;
for (let i of r) {
  j += i;
}
const avarej = j / r.length;
console.log("dsfsfs", j);
console.log(avarej);
