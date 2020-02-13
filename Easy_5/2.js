/*
Input: string
Output: new string
Need to double every consonant and keep everthing else as a single in result str
Use helper method to check if current character is consonant
Based on that, add one or two copies to result string; use similar logic to before
*/

function isConsonant(chr){
  chr = chr.toLowerCase()
  var isLetter = chr >= 'a' && chr <= 'z';
  var isNotVowel = (['a','e','i','o','u'].indexOf(chr) === -1)
  return isLetter && isNotVowel;
}

function doubleConsonants(str){
  var result = "";
  var i;

  for(i = 0; i < str.length; i++){
    if (isConsonant(str[i])){
      result += (str[i] + str[i]);
    } else {
      result += str[i];
    }
  }

  return result;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""