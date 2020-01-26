function multiplyAllPairs(arr1, arr2){
  var result = [];

  arr1.forEach(function(arr1Val){
    arr2.forEach(function(arr2Val){
      result.push(arr1Val * arr2Val);
    });
  });  

  return result.sort(function(num1, num2){ // could just return a-b instead of if
    if (num1 < num2) {
      return -1;
    } else if (num1 > num2) {
      return 1;
    } else {
      return 0;
    }
  });
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));
console.log([2, 4, 4, 6, 8, 8, 12, 16]);
