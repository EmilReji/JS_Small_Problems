/*
PEDAC:
Understanding the problem:
- Input: sorted array (same type) and a search value
- Output: index in array where searchVal is; -1 if none found
- Binary search finds the middle value of the array, does a comparison to search value
to determine which half to search, and repeats process with that half until either
a value is found at the "middle" or index crossover occurs meaning none exists
Example/Test Cases: Given
DS: array given
Algorithm
- Create a variable called startIdx = 0 and endIdx = arr.length - 1
- Create a variable called middleIdx; parseInt(arr.length/2, 10); 9/2 = 4  10/2 = 5
- Run an infinite loop
  - Check if searchVal is equal to middleIdx's element; if so, return index
  - If searchVal is less than middle element, then update endIdx to middleIdx
  - Also update middle to parseInt(arr.slice(startIdx, middleIdx + 1))
  - if endIdx is less than middleIdx, return -1
  - 1st half will be a slice from 0 to middle + 1 exclusive
  - If searchVal is greater than middle element, then update startIdx to middle val
  - Also update middle to parseInt(arr.slice(middleIdx + 1, endIdx))
  - if startIdx is greater than middleIdx, return -1
  - 2nd half will be a slice from middle + 1 inclusive to end of array

Changes:
using (arr.length - 1)/2 for middleIdx
*/

// function binarySearch(arr, searchVal){
//   // console.log(arr);
//   var startIdx = 0;
//   var endIdx = arr.length - 1;
//   var middleIdx = parseInt((arr.length - 1)/2, 10);
//   var i = 0;
//   // console.log(startIdx, middleIdx, endIdx);
//   // console.log(arr.slice(startIdx, endIdx + 1));
//   while(true){
//     if (searchVal === arr[middleIdx]){
//       return middleIdx;
//     } else if(searchVal < arr[middleIdx]){
//       endIdx = middleIdx - 1;
//       middleIdx = parseInt((startIdx + endIdx)/2, 10);
//       if (endIdx <= middleIdx) return -1;
//     } else {
//       startIdx = middleIdx + 1;
//       middleIdx = parseInt((endIdx + startIdx)/2, 10);
//       if (startIdx >= middleIdx) return -1;
//     }
//     // console.log(startIdx, middleIdx, endIdx);
//     // console.log(arr.slice(startIdx, endIdx + 1));

//   }
// }

function binarySearch(array, searchItem) {
  var high = array.length - 1;
  var low = 0;
  var mid;

  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    console.log(low, mid, high);
    console.log(array);
    if (array[mid] === searchItem) {
      return mid;
    } else if (array[mid] < searchItem) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

function temp(array){
  var high = array.length - 1;
  var low = 0;
  var mid = low + Math.floor((high - low) / 2);
  console.log(low, mid, high);
}

temp([1, 2, 3, 4, 5]); // 0 2 4
temp([1, 2, 3, 4, 5, 6]); // 0 2 5 
temp([1, 2, 3, 4, 5, 6, 7]); // 0 3 6
temp([1, 2, 3, 4, 5, 6, 7, 8]); // 0 3 7

function temp(array){
  var high = array.length - 1;
  var low = 0;
  var mid = low + Math.floor((high - low) / 2);
  console.log(low, mid, high);
}

// var yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
// console.log(binarySearch(yellowPages, 'Zooper'));                   // 9
// console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

// var yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
// console.log(binarySearch(yellowPages, 'Zooper'));                   // 8
// console.log(binarySearch(yellowPages, 'Apple Store'));                // 0


// console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
// console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102, 109], 77));    // -1
// console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
// console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102, 109], 89));    // 7
// console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1
// console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102, 109], 5));    // 1

// console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
// console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6
// console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Alice'));  // 0
// console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Sue'));  // 5
// console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Bonnie'));  // 1