function isIncluded1(arr, val) {
  return arr.some(e => e > val);
}

function isIncluded(arr, val) {
  return arr.some(function (e) {
    console.log(e);
    return (e > val);
  });
}

console.log(isIncluded([1, 2, 3, 4, 5], 3)); // since 5 > 4 should return true
console.log(isIncluded([1, 2, 3, 4, 5], 6)); // since 6 is greater than all values, should return false
