function swapCase(str){
  return str.split('').map(function(chr){
    if (chr.match(/[A-Z]/)) {
      return chr.toLowerCase();
    } else if (chr.match(/[a-z]/)) {
      return chr.toUpperCase();
    } else {
      return chr;
    }
  }).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
