/*
PEDAC:
Understanding the problem:
- Input: array of 3 elements; each element is a sub-array containing 3 values
- Output: a new array that maps to the old array after it is transposed
- Shouldn't mutate original array
- Transposing involes swapping the rows with columns or vice versa
- 1st row aka 1st sub array ends up being the 1st column aka 1st element in each sub array
Examples/TestCase: given; only need the one
DS: array of arrays
Algorithm:
- Create a new array of arrays called result; 3 empty arrays are the elements
- Then run a loop 3 times
  - Each iteration should pull 1st column value from input array; ex. 1st column is 0th index in each subarray
  - Within this run another loop 3 times
    - Use this loop's index to identify each subarray; we have index we need from outer loops index
    - Given current value, copy it to appropriate result's sub array (use outer index)
- T 
*/

function transpose(matrix){
  var result = [[], [], []];
  var matrixSubArrElementIdx;
  var matrixSubArrIdx;
  var resultSubArrIdx;

  for(matrixSubArrElementIdx = 0; matrixSubArrElementIdx < 3; matrixSubArrElementIdx++){
    resultSubArrIdx = matrixSubArrElementIdx;
    for(matrixSubArrIdx = 0; matrixSubArrIdx < 3; matrixSubArrIdx++){
      result[resultSubArrIdx].push(matrix[matrixSubArrIdx][matrixSubArrElementIdx]);
    }
  }

  return result;
}


var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

var newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]