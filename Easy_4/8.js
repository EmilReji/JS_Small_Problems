function digitList(num){
  return String(num).split('').map(num => parseInt(num, 10));
}

// function digitList(num){
//   var result = [];

//   while (num > 0){
//     result.unshift(num % 10);
//     num -= num % 10;
//     num /= 10;
//   }

//   return result;
// }

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]