

function countOccurrences(arr){
  var occurrences = {};

  arr.forEach(function(currVal){
    if (!occurrences[currVal]) {
      occurrences[currVal] = 1;
    } else {
      occurrences[currVal] += 1;
    }
  });

  return occurrences;
}

var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
'motorcycle', 'motorcycle', 'car', 'truck'];

console.log(countOccurrences(vehicles));

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2