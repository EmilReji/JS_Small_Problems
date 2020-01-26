function runningTotal1(arr) {
  var result = []; 
  var i;
  var sum = 0;

  for(i = 0; i < arr.length; i++) {
    sum += arr[i]
    result.push(sum);
  }

  return result;
}

function runningTotal(arr) {
  var sum = 0;

  return arr.map(function(e) {
    return sum += e;
  });
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []
