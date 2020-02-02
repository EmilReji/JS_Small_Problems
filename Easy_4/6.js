function showMultiplicativeAverage(arr){
  var avg = arr.reduce(function(prod, currNum){
    return prod *= currNum;
  }, 1) / arr.length;
  
  return String(avg.toFixed(3));
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"