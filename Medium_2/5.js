/*
PEDAC:
Understanding the problem:
- input: integer  output: integer or error message
- A featured number is an (odd number) that is a (multiple of 7) with (all digits occuring once)
- Need to find next featured number greater than integer
- Is it positive numbers only? 0? Negative? assume all greater than 0 inputs
Examples/Test Cases: Given
DS:
- String or array of characters can be used on number to figure out if all digits unique or not
- Rest can be done with just number and loops
Algorithm:
- Given current number, increment by 1
- Then run a loop starting with that number and ending when number hits 9876543201
  - Check if currNum % 7 === 0 and currNum % 2 === 1 and uniqueDigits(currNum) is true
  - If true, return currNum
- If iteration finishes, return "error"

uniqueDigits:
- Convert the input num into a string and iterate over it
- Check current index and lastIndexOf; if different at any point, return false
- If iteration finishes, return true
*/

function uniqueDigits(num){
  var str = String(num);
  var i;

  for(i = 0; i < str.length; i++){
    if (i !== str.lastIndexOf(str[i])) return false;
  }

  return true;
}

// function featured(num){
//   num += 1;

//   for(; num <= 9876543201; num++) {
//     if (num % 7 === 0 && num % 2 === 1 && uniqueDigits(num)) return num;
//   }

//   return "Error"
// }

// Optimize by finding Odd Multiple of 7 and incrementing by 14 rather than checking every num
function nextOddMultiple7(num){
  num += 1;
  while (true){
    if (num % 7 === 0 && num % 2 === 1) return num;
    num += 1;
  }
}

function featured(num){
  num = nextOddMultiple7(num);

  for(; num <= 9876543201; num += 14) {
    if (uniqueDigits(num)) return num;
  }

  return "Error"
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543201));    // "Error"