/*
PEDAC:
Understanding the problem:
- Input: number; assume positive integer
- Output: number
- Need to apply rotation logic the same number of times as the number's length
- Rotation means taking that digit and moving to end of number and moving numbers
to the right of it to the left one; numbers to the left of it remain fixed
- It seems that if a zero is part of a number and it gets rotated, it remains part
of final number
- However if zero is not rotated and ends up a leading zero (before number in front
  of it got rotated), then leading zero gets dropped due to conversion
Examples/Test Cases:
- Given
- What happens if 0 inputted? 0 outputted
DS:
- Could use array of characters or could use string
- String methods like slice should be enough
Algo:
Main Method:
Converts the number to a string; stores in variable str
Stores length of str in variable len
Runs a loop len times
- Calls rotation method by passing in str and current index
- Return value overwrites str value
Once looping done, return Number(str)

Rotation method:
Takes in string to rotate and index to rotate (based on 0 index from start)
Returns str.slice(0, rotateIdx) + str.slice(rotateIdx + 1) + str[rotateIdx];
*/

function rotateStr(str, rotateIdx){
  return str.slice(0, rotateIdx) + str.slice(rotateIdx + 1) + str[rotateIdx];
}

function maxRotation(num){
  var str = String(num);
  var len = str.length;
  var idx;

  for(idx = 0; idx < len; idx++) {
    str = rotateStr(str, idx);
  }

  return Number(str);
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
console.log(maxRotation(0));               // 0