/* 
rotateVal means that number (counting from right side) 
will ned up on rightmost side of new number
so rotating rotateVal of 1 does nothing

convert number to a string
split into an array of characters
construct a new array by removing array[array.length - rotateVal] and adding to end
join this new array and convert to a number and return
*/

// uses array
function rotateRightmostDigits(number, rotateVal){
  var arr = String(number).split('');
  var idxToRotate = arr.length - rotateVal;
  var resultArr = arr.slice(0, idxToRotate).concat(arr.slice(idxToRotate + 1), arr[idxToRotate]);
  return Number(resultArr.join(''));
}

// uses only strings
function rotateRightmostDigits(number, rotateVal){
  var str = String(number);
  var idxToRotate = str.length - rotateVal;
  var resultStr = str.slice(0, idxToRotate).concat(str.slice(idxToRotate + 1), str[idxToRotate]);
  return Number(resultStr);
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917