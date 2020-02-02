/*
- Run a loop from 1 to n; assigned value of false to those indexes in array
- Run another loop from 1 to n; currentDivisor = that num
  - Within that, run another loop over the array from 1 to n
    - Check if current index is evenly divisible by currentDivisor
    - If so, toggle that boolean element to opposite
    - if not, then do nothing and continue
- Once loop in loop is done, run another for loop on the array (1 to n)
  - if current value is true, add that index to result array
- Return result array
*/

function lightsOn(switches) {
  var switchArr = []
  var i;
  var currDiv;
  var result = [];

  for(i = 0; i < switches; i++) {
    switchArr[i] = false;
  }

  for(currDiv = 1; currDiv <= switches; currDiv++) {
    switchArr.forEach(function(isOn, idx){
      if ((idx + 1) % currDiv === 0) switchArr[idx] = !isOn;
    });
  }

  for(i = 0; i < switchArr.length; i++) {
    if (switchArr[i]) result.push(i + 1);
  }

  return result;
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]