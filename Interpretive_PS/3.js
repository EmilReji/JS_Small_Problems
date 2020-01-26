/*
Understanding the problem:
Input: string
Output: boolean
start with a set of blocks with 2 letters per block.
Can use values from both blocks; just can't use the same index in each block
The input's case shouldn't be considered
Assuming that input only contains letters

Test cases: given

DS:
need to store blocks in some way
hash seems like best option; can store each block in both ways like so 'B': 'O', 'O': 'B'
This way when we see a character in string, can find its corresponding block value and checkc if that also exists in same string. If so can return false right away.

Algorithm:
Convert the string to uppercase; split into an array of characters
Then iterate over it and check if current letter or current letter's corresponding value is in string; if so return false
If iteraiton finishes without issues, return true by default
*/

const MAPPING = {
'B':'O',
'X':'K',
'D':'Q',
'C':'P',
'N':'A',
'G':'T',
'R':'E',
'F':'S',
'J':'W',
'H':'U',
'V':'I',
'L':'Y',
'Z':'M',
'O':'B',
'K':'X',
'Q':'D',
'P':'C',
'A':'N',
'T':'G',
'E':'R',
'S':'F',
'W':'J',
'U':'H',
'I':'V',
'Y':'L',
'M':'Z',  
}

function isBlockWord(str) {
  var chrs = str.toUpperCase().split('');
  var i;
  var opposingIdx;
  var containsDups;

  for (i = 0; i < chrs.length; i++) {
    containsDups = chrs.lastIndexOf(chrs[i]) !== i 
    opposingIdx = chrs.indexOf(MAPPING[chrs[i]]);
    if (opposingIdx !== -1 || containsDups) return false;
  }

  return true;
}


console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false
