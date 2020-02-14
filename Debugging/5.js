function rangeTwo(start, end) {
  var range = [];
  var element;
  for (element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

function range(end) {
  return rangeTwo(0, end);
}


// Examples

console.log(rangeTwo(10, 20));
console.log(range(5));

/* 
The issue here is that having two functions named range, even if they have different
argument #/type, means that the 2nd one overwrites the 1st one
That means when the 2nd one calls range recursviely, it actually calls itself
Since there is no base case, it gets stuck in an endless loop
The fix is to rename the 1st function so its different
*/