// function caesarEncrypt(plaintext, shiftVal){
//   var lowerCaseMin = 'a'.codePointAt();
//   var lowerCaseMax = 'z'.codePointAt();
//   var upperCaseMin = 'A'.codePointAt();
//   var upperCaseMax = 'Z'.codePointAt();
//   var currCharVal;
//   var isLowerCase;
//   var isUpperCase;
//   var currMin;

//   return plaintext.split('').map(function (chr){
//     currCharVal = chr.codePointAt();
//     isLowerCase = (currCharVal >= lowerCaseMin && currCharVal <= lowerCaseMax);
//     isUpperCase = (currCharVal >= upperCaseMin && currCharVal <= upperCaseMax);
//     if (isLowerCase){
//       currMin = lowerCaseMin;
//     } else if (isUpperCase) {
//       currMin = upperCaseMin;
//     }
  
//     if (isLowerCase || isUpperCase) {
//       currCharVal += shiftVal;
//       if (currCharVal < currMin || currCharVal > currMin + 25) {
//         currCharVal = ((currCharVal - currMin) % 26) + currMin;
//       }
//     }
    
//     chr = String.fromCharCode(currCharVal);

//     return chr;
//   }).join('');
// }

/*
- Create a constant holding letters a to z lowerCase
- Create a varaible isUpperCase
- Once again map over array of characters
  - For current character, update isUpperCase variable accordingly
  - Then convert it to lowercase and check index of it in array
  - If -1, then do nothing
  - If valid num, then means is letter
  - Take that index, add shift, and % 26 to get new index
  - Pull out that letter. if toUpperCase is true, then upcase; then return from map
- Return array joined string again
*/

function caesarEncrypt(plaintext, shiftVal){
  var LETTERS = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var isUpperCase;
  var newIdx;

  return plaintext.split('').map(function(chr){
    if (chr >= 'A' && chr <= 'Z') { 
      isUpperCase = true;
    } else if (chr >= 'a' && chr <= 'z') { 
      isUpperCase = false;
    } else {
      return chr;
    }

    chr = chr.toLowerCase();
    newIdx = (LETTERS.indexOf(chr) + shiftVal) % 26
    chr = LETTERS[newIdx];
    if (isUpperCase) chr = chr.toUpperCase();

    return chr;
  }).join('');
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 51));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"