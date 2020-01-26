function staggeredCase(str) {
  var alphaIdx = 0;

  return str.split('').map(function (chr){
    if (chr.match(/[^a-z]/i)){
      return chr;
    } else if (alphaIdx % 2 === 0) {
      alphaIdx += 1;
      return chr.toUpperCase();
    } else {
      alphaIdx += 1;
      return chr.toLowerCase();
    }
  }).join(''); 
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"
