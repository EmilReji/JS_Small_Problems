/*
PEDAC:
Understanding the problem:
- Input: integer (test cases imply it will be positive)
- Output: integer
- Need to find square of total sum of values from 1 to num
- Then need to find squares of all values from 1 to num and find sum
- Then need to subtract 2nd value from 1st value ad return
Examples and Test Cases: Given
DS: 
- an array to find sum/squares can be helpful; especially to map
- however should be able to use just loops and normal numbers
Algorithm:
Create 2 variables squareSums and sumSquares; both set to 0
Run a loop from 1 to num
  - Add the currNum to squareSums
  - Add Math.pow(currNum, 2) to sumSquares
One loop done, update squareSums to Math.pow(squareSums, 2)
Return squareSums - sumSquares
*/

function sumSquareDifference(num){
  var squareSums = 0;
  var sumSquares = 0;
  var i;

  for(i = 1; i <= num; i++) {
    squareSums += i;
    sumSquares += Math.pow(i, 2);
  }

  squareSums = Math.pow(squareSums, 2);

  return squareSums - sumSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150