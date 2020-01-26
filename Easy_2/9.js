/*
Create empty result string
Create prevNonLetterChar string set to empty string
Iterate over input string
If current character is a alphabetic character, add to result; also reset prevNonLetterChar to empty string
If current character is a non alphabetic character and prevNonLetterChar is an empty string, then add a space to the result; change prevNonLetterChar to current character
If current character is non alphabetic character and prev character is not an empty string, then continue

Return result 
*/

function cleanUp2(str) {
  let result = '';
  let prevNonLetterChar = '';

  for(let i = 0; i < str.length; i++) {
    let chr = str[i]    
    //console.log(`chr: "${chr}" prevNonLetterChar: "${prevNonLetterChar}"  result: "${result}"`);
    if ((chr >= 'a' && chr <= 'z') || (chr >= 'A' && chr <= 'Z')) {
      result += chr;
      prevNonLetterChar = '';
    } else if(prevNonLetterChar === '') {
      result += ' ';
      prevNonLetterChar = chr;
    }
    //console.log(`chr: "${chr}" prevNonLetterChar: "${prevNonLetterChar}"  result: "${result}"`);
    //console.log();
  }

  return result;
}

function cleanUp(str) {
  let result = '';
  let addSpace = true;

  for(let i = 0; i < str.length; i++) {
    let chr = str[i]
    if ((chr >= 'a' && chr <= 'z') || (chr >= 'A' && chr <= 'Z')) {
      result += chr;
      addSpace = true;
    } else if(addSpace) { 
      result += ' ';
      addSpace = false;
    } 
  }

  return result;
}


console.log(`"${cleanUp("---what's my +*& line?")}"`);    // " what s my line "
