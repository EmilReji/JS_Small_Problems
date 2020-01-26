
function asciiValue(str) {
  var sum = 0;

  for (var i = 0; i < str.length; i++) {
    sum += str[i].charCodeAt(0);
  }

  return sum;
}
