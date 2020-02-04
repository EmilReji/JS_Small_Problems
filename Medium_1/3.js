/*
Will need to rotate the same amount of times as the length of the num as a string
Each time, the portion of the number being rotated gets smaller
First iteration applies to the whole number
2nd iteration applies to everything except 1st digit and so on
Last iteration only applies to last digit; no change; can skip this last one

Algorithm:
convert the num to string
run a loop for string.length times
- pull out a slice starting from currIdx to end of string; that is number
- currIdx is also the rotateVal
- pass both into rotateRightmostDigits to get new string back; update string with it
once loop done, return new string as a number
*/

function rotateRightmostDigits(number, rotateVal){
  var str = String(number);
  var idxToRotate = str.length - rotateVal;
  var resultStr = str.slice(0, idxToRotate).concat(str.slice(idxToRotate + 1), str[idxToRotate]);
  return Number(resultStr);
}

// function maxRotation(num){
//   var str = String(num);
//   var i;
//   var fixed;
//   var rotated;
//   var length = str.length;

//   for(i = 0; i < length; i++) {
//     console.log("Iteration:");
//     fixed = str.slice(0, i);
//     rotated = rotateRightmostDigits(str.slice(i), length - i);
//     str = (fixed + rotated).padStart(3, '0');
//     str = str.padStart('0', length);
//     console.log(str);
//   }

//   return Number(str);
// }

function maxRotation(number) {
  var i;

  for (i = String(number).length; i > 1; i -= 1) {
    number = rotateRightmostDigits(number, i);
  }

  return number;
}

// console.log(maxRotation(735291));          // 321579
// console.log(maxRotation(3));               // 3
// console.log(maxRotation(35));              // 53
// console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
