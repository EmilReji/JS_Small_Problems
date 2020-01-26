function buyFruit(arr) {
  var i;
  var result = [];

  arr.forEach(function (subArr) {
    for(i = 0; i < subArr[1]; i++) {
      result.push(subArr[0]);
    }
  });

  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
console.log(["apple", "apple", "apple", "orange", "banana", "banana"]);
