/*

*/

function transpose(matrix){
  var matrixColLen = matrix.length;
  var matrixRowLen = matrix[0].length;
  var i;
  var result = [];

  for(i = 0; i < matrixColLen; i++){
    matrixRowLen = matrix[i].length;
    for(j = 0; j < matrixRowLen; j++){
      if (!result[j]) result.push([]);
      result[j][i] = matrix[i][j]
    }
  }

  return result;
}

var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];
console.log(transpose(matrix));
console.log(transpose(transpose(matrix)));
console.log(matrix);

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]