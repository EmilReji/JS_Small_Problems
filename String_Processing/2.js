const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function removeVowels(arr){
  return arr.map(function(str){
    return str.split('').filter(function(chr){
      return VOWELS.indexOf(chr.toLowerCase()) === -1;
    }).join('');
  });
}

function removeVowels(arr){
  var regex = /[aeiou]/ig;
  return arr.map(str => str.replace(regex, ''));   
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
