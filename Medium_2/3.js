/*
PEDAC:
Understanding the problem:
- Input: 3 numbers (test cases imply integers but may be floating pts)
- Output: 1 of 4 strings: 'right', 'acute', 'obtuse', 'invalid'
- First need to ensure 3 angles are for a valid triangle
- Check that all angles greater than 0
- Also check that sum of 3 angles is 180
- Like previous problem, can sort and find 0th index
- Then Based on the 3 angles, return type of triangle
- If one is 90 degrees, return right; maybe use some method on array
- If all are less than 90, return acute; maybe use each method on array
- If one is greater than 90, return obtuse; maybe use some method on array
Examples and Test Cases: Given
DS: use array to hold 3 sides
Algorithm:
- Create array of angles and sort using block containing a - b for numeric sort
- Check angles[0] is greater than 0 and check that sum of array is 180
- If false, return "invalid"; otherwise continue
- Run some on array and check of 90 degree angle; if true returned, return "right"
- Check angles[2] and ensure it is under 90; if so all are uner 90; return "acute"
- Otherwise, return "obtuse"
*/

function triangle(one, two, three){
  var angles = [one, two, three].sort((a, b) => (a - b));
  var sum = angles.reduce((sum, angle) => (sum + angle));

  if (angles[0] <= 0 || sum !== 180) {
    return "invalid";
  }

  if (angles.some(angle => (angle === 90))) return "right";
  if (angles[2] < 90) return "acute";
  return "obtuse";
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
console.log(triangle(150, 150, 150));       // "invalid"