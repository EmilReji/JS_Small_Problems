function sumOfSums1(arr) {
  return arr.reduce(function(total, num, idx){
    return total += (num * (arr.length - idx))
  }, 0);
}

function sumOfSums(arr) {
  return arr.reduce(function (sum, num, idx){
    return sum += arr.slice(0, idx + 1).reduce((total, num) => total += num);
  });
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
