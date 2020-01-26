
function stringy(num) {
  var str = '';

  for(var i = 0; i < num; i++) {
    str += ((i % 2 === 0) ? 1 : 0)
  }

  return str;
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
