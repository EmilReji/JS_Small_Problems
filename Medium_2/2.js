/*
PEDAC:
Understanding the problem:
- Input: 3 side lengths; all numbers; can be integers or floating points
- Output: one of the 4 string options: 
'equilateral', 'isosceles', 'scalene', 'invalid'
- Need to validate if valid triangle or not first
- If sum of 2 shortest sides is less than or equal to longest side, then invalid
- If sum of 2 shortest sides is greater than longest side, then valid
- Then need to use 3 sides to determine if equilateral, isosceles, or scalene
Examples and test cases: given
DS:
- array may be useful to hold all 3 sides and run various methods for quick checsk
Algorithm:
- plas 3 values into an array and sort it; need to pass in block with a-b to sort by numeric value
- take largest (2nd index) and compare to sum of 0th and 1st indexes to determien if invalid or not
- if invalid, return invalid right away
- if valid, then iterate over array and keep track of a varaible called numUniq
- increment this number every time a unique value is found
- if value is 1, return equilateral, if 2, return isosceles, and if 3, return scalene

- used UniqArr instead since using numUniq will only work if used with another
actual array varaible as well; might as well just use array and use its length for determinations
*/

function triangle(one, two, three){
  var sides = [one, two, three].sort((a, b) => a - b);
  var i;
  var uniqArr = [];

  if (sides[2] >= sides[0] + sides[1] || sides[0] <= 0) return "invalid";

  for(i = 0; i < sides.length; i++) {
    if (uniqArr.indexOf(sides[i]) === -1) uniqArr.push(sides[i]);
  }

  if (uniqArr.length === 1) return 'equilateral';
  if (uniqArr.length === 2) return 'isosceles';
  if (uniqArr.length === 3) return 'scalene';
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"