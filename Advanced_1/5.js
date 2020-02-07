/*
PEDAC:
Understanding the problem:
- Input: 2 arrays that are each sorted (so can assume same values)
- Output: 1 sorted array containing all elements of both
- Need to build final array one element at a time; can't use sort method
- Can start with 1st value in each element (smallest in each)
- Then take smaller of the 2 out of its array and add to result array
- Then repeat process until both arrays have no values
- If either array is empty at any point, can simply take the other one and
entirely add to the result array
Test Cases and Examples: Given
DS: array
Algorithm:
- Create a result array that is empty
- Create a variable for oneIdx and twoIdx and set both to 0
- Run a loop for the combined length of the 2 input arrays
  - Check if either input array is empty
  - If so, take the non-empty one concat it to end of result and return
  - Use oneIdx and twoIdx to compare the values in each input array
  - Add the smaller one to result and increment corresponding index
- Return result array

Missed:
Need to use shift method to remove minimum value from input array if
we are checking length of array when doing checks
Also need to store result's length for for loops termination clause use
if one.length + two.length checked each time, that value is dynamic due to
those array's being shifted

Not supposed to mutate; use slice()
Or don't use shift or slice; rather compare indexes
*/


function merge(one, two){
  one = one.slice();
  two = two.slice();
  var result = [];
  var oneIdx = 0;
  var twoIdx = 0;
  var resultLength = one.length + two.length;
  var i;

  for(i = 0; i < resultLength; i++){
    if (one.length === 0) return result.concat(two);
    if (two.length === 0) return result.concat(one);

    if(one[oneIdx] <= two[twoIdx]){
      result.push(one.shift());
      oneIdx += 1;
    } else {
      result.push(two.shift());
      twoIdx += 1;
    }
  }

  return result;
}

// non-mutating method that doesn't use slice
function merge(one, two){
  var result = [];
  var oneIdx = 0;
  var twoIdx = 0;
  var resultLength = one.length + two.length;
  var i;

  for(i = 0; i < resultLength; i++){
    if (oneIdx === one.length) return result.concat(two.slice(twoIdx));
    if (twoIdx === two.length) return result.concat(one.slice(oneIdx));

    if(one[oneIdx] <= two[twoIdx]){
      result.push(one[oneIdx]);
      oneIdx += 1;
    } else {
      result.push(two[twoIdx]);
      twoIdx += 1;
    }
  }

  return result;
}
var one = [1, 5, 9]
var two = [2, 6, 8]
console.log(one);
console.log(two);

console.log(merge(one, two));      // [1, 2, 5, 6, 8, 9]

console.log(one);
console.log(two);
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]