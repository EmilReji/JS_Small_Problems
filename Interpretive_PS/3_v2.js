/*
Understanding the problem:
Input: string with letters only of either case
Output: boolean
Have a set of spelling blocks where each block has 2 letters
If a letter in a block is used in the string, if the string has the other letter from the same block in it, return false
If no overlap of same block, return true


Examples and test cases:
Given

DS:
Instead of using a hash, going to use an array to hold my spelling blocks
Each element will have two capital letters; will need to run toUpperCase on my string

Algo:
create the array to hold the spelling blocks
convert the string to upper case; then split it into an array of chars
iterate over this array
- take current val and iterate over spelling blocsk
  - on each itereation, check if that element contains current char
  - if not go to next one
  - if so, stop iteration since its been found
  - if iteration reaches end with no find, return false to indicate this
- if not found, return false
- if found, remove that specific block from the spelling blocks array; set that value in array to empty str (including matching characters sicne this means we can't use it); then go to next iteration
  - This part needs to be moved to internal loop since we only know index there
If iteration done, default return true
*/

function isBlockWord(str) {
  var spBlocks = ['BO','XK','DQ','CP','NA','GT','RE','FS','JW','HU','VI','LY','ZM'];
  var chrs = str.toUpperCase().split(''); 
  var i;
  var j;
  var searchStatus;

  for(i = 0; i < chrs.length; i++) {
    searchStatus = false;

    for(j = 0; j < spBlocks.length; j++) {
      if (spBlocks[j].indexOf(chrs[i]) !== -1) { 
        searchStatus = true;
      }
      if (searchStatus){
        spBlocks[j] = '';
        break;
      }
    }

    if (!searchStatus) return false; 
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
//console.log(isBlockWord('jert'));       // false
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false
