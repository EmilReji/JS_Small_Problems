/*
Implement an iterative binary search:
- Set low to 0 and high to array's last index
- Run a loop that runs while low is less than or equal to high
  - Set middle to low + Math.floor((high + low)/2)
  - Then compares middle array value to search value; return index if true
  - If search value is greater than array middle value, search right half
    - Set low = middle  + 1
  - If search value is less than array middle value, search left half
    - Set high = middle - 1
If loop ends, return -1
*/

function binarySearch(arr, val){
  var low = 0;
  var high = arr.length - 1;
  
  while(low <= high){
    middle = low + Math.floor((high - low)/2); // Math.floor((high + low)/2)
    if (val === arr[middle]) return middle;
    if (val > arr[middle]){
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }

  return -1;
}

var yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Zooper'));                   // 9
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

var yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Zooper'));                   // 8
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102, 109], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102, 109], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102, 109], 5));    // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Alice'));  // 0
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Sue'));  // 5
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Bonnie'));  // 1