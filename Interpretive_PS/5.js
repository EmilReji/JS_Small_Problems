// function keywordArrGenerator(keywordArr, plainTextLength){
//   var result = [];
//   var initialLength = keywordArr.length;
//   var i;

//   for(i = 0; i < plainTextLength; i++){
//     result.push(keywordArr[i%initialLength]);
//   }

//   return result;
// }

function encryptChr(plainTextChr, keywordChr){
  var newIdx;
  var cipherTextChr;
  var LETTERS = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var isUpperCase = (LETTERS.indexOf(plainTextChr) === -1) ? true : false;
  
  keywordChr = keywordChr.toLowerCase();
  plainTextChr = plainTextChr.toLowerCase();

  newIdx = (LETTERS.indexOf(plainTextChr) + LETTERS.indexOf(keywordChr)) % 26;
  cipherTextChr = LETTERS[newIdx];
  if (isUpperCase) cipherTextChr = cipherTextChr.toUpperCase();

  return cipherTextChr;
}

function encryptStr(plainText, keyword){
  var plainTextArr = plainText.split('');
  var keywordArr = keyword.split('');
  var keywordChr;
  var letterIdx = 0;

  return plainTextArr.map(function(currChr){
    if (currChr.toLowerCase() >= 'a' && currChr.toLowerCase() <= 'z'){
      keywordChr = keywordArr[letterIdx % keywordArr.length];
      currChr = encryptChr(currChr, keywordChr);
      letterIdx += 1;
    }
    return currChr;
  }).join('');
}

console.log(encryptStr("apple", 'meat')); // 'mtpeq'
console.log(encryptStr("xyzab", 'z')); // 'wxyza'
console.log(encryptStr("Pineapples", 'meat')); // 'Bmnxmtpeqw'
console.log(encryptStr("Pineapples don't go on pizzas!", 'meat')); // 'Bmnxmtpeqw dhz'x gh ar pbldal!'
console.log(encryptStr("", 'meat')); // ' '
console.log(encryptStr("apples", 'mEAt')); // 'mtpeq'
console.log(encryptStr("Pineapples", 'mEAt')); // 'Bmnxmtpeqw'
console.log(encryptStr("Pineapples don't go on pizzas!", 'mEAt')); // 'Bmnxmtpeqw dhz'x gh ar pbldal!'

console.log(encryptStr("Pineapples don't go on pizzas!", 'cab')); // Riogaqrlfu dpp't hq oo riabat!
console.log(encryptStr("Dog", 'Rabbit')); // Uoh