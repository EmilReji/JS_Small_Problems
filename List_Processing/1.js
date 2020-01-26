function sum(num) {
  var arr = String(num).split('');
  return arr.reduce((total, currVal) => total += Number(currVal), 0);
}

// reduce needs 2nd argument of 0 as a number; reason is that without it, defaults to 1st element in original array which is a string representation of a number; adding a number to that means string concatenation occurs and final result we get is string representation of original num

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
