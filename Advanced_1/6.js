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
/*
PEDAC:
Understanding the problem:
- Mergesort 
- input: an unsorted array; all elements are of the same type
- output: a new sorted array
- Need to split the array into nested sub arrays recursively
- Then the sub arrays need to be merged back together in sorted order using
previously created merge method
- Option 1
- Take 1st half of array, put into own array, and pass into recursive method
- Do same with 2nd half
- Take return value of both and put into an array
- Have a base case that applies when 1 element passed in; return it right away

- Option 2:
- Iterate over array and put each individual element in as an array
- An array of sub-arrays; each sub array has 1 element
- Then iterate over array again and put each pair of array's in another sub array
- Repeat for every 4, 8, and so on until you hit a number greater than or equal to 
original array.length

- 
recursive method
*/
function createNested(arr){
  if (arr.length <= 1) return arr;
  var firstHalf = createNested(arr.slice(0, arr.length/2));
  var secondHalf = createNested(arr.slice(arr.length/2));
  return [firstHalf, secondHalf];
}

function mergeSort(arr){
  if (arr.length <= 1) return arr;
  var firstHalf = mergeSort(arr.slice(0, arr.length/2));
  var secondHalf = mergeSort(arr.slice(arr.length/2));
  return merge(firstHalf, secondHalf);
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]