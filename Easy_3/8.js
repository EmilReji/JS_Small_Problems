function swap(str) {
  return str.split(' ').map(function (word){
    if (word.length <= 1) return word;
    return word.slice(word.length - 1) + word.slice(1, word.length - 1) + word.slice(0, 1);
  }).join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
