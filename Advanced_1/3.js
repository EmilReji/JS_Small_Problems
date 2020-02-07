
/*
PEDAC:
Understanding the problem:
- Input: array of M elements; each element is a sub-array containing N values
- Output: a new array that maps to the old array after it is transposed
- Shouldn't mutate original array
- Transposing involves swapping the rows with columns or vice versa
- 1st row aka 1st sub array ends up being the 1st column aka 1st element in each sub array
- Need to consider different number of rows and columns; means we can't use same number for swap
- First need to generate result array with number of sub arrays equal to the length of the 
first sub array in input matrix
- Then run outer loop (which is for column idx in new row) based on input matrix's length
- Then run inner loop (which is for row idx in result) based on input matrix's sub array's length

Examples/TestCase: given
- Is it possible for different subarrays to have different number of elements?; aka variable N
- Based on test cases, no
*/

function generateMatrix(numSubArrs){
  var i;
  var result = [];

  for(i = 0; i < numSubArrs; i++){
    result.push([]);
  }

  return result;
}


function transpose(matrix){
  var i;
  var j;
  var resultSubArrs = matrix[0].length;
  var resultSubArrSize = matrix.length;
  var result = generateMatrix(resultSubArrs);

  for(i = 0; i < resultSubArrs; i++){ 
    // after each iteration, should have create a column in result from row in matrix
    for(j = 0; j < resultSubArrSize; j++){ 
      // after each iteration, should have added a value 
      result[i].push(matrix[j][i]);
    }
  }

  return result;
}


// var matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6]
// ];

// var newMatrix = transpose(matrix);

// console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]


console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]