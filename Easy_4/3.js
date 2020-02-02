/*
Need to split given array into two halves
Each half froms sub-array within an array of 2 elements (sub array)
When even number of values, both sub arrays will be equal in length
When odd number of values, 1st sub array will be 1 longer than 2nd sub array
*/

function halvsies(arr){
  var result = [[], []];
  var i;

  for(i = 0; i < arr.length; i++){
    if ((i + 1) <= Math.round(arr.length/2)) {
      result[0].push(arr[i]);
    } else {
      result[1].push(arr[i]);
    }
  }

  return result;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]