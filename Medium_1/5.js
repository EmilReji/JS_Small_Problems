/*
PEDAC:
Understanding the problem:
- Input: string
- Output: string with numbers (in word format) replaced 
with string digits
- Only need to consider numbers 'zero' to 'nine'
- Word can include letters and punctuation sepearte by spaces
- However the punctuation should remain in transalation
- Need way to do matching that keeps puncutation without throwing
of results
Examples and test cases:
- Empty string; result is same
- String with no numbers; result is same
- String with numbers
- String with numbers and puncutation right next to it
DS:
- use an array with index representing number and element representing
correponding name
- could use hash; but no real benefit since we need to check entire
DS fully to find value and account for puncutation
Algorithm:
Create a constant containing numbers
Split the string into an array of words on spaces
Resulting array will have each word including puncutation
Loop over this
- For given word, then iterate over NUMBERS
  - Check if word contains current number
  - If true at any point, based on starting index of that number in
  word and length of number, create a new string so that the number
  is replaced with digit as a string and non-numeric part of word such
  as punctuation; then end inner loop
- If iteration finishes without any 

- Edge case: forgot to handle uppercase versions
*/

// function wordToDigit(str) {
//   var NUMBERS = ['zero', 'one', 'two', 'three', 'four', 
//                  'five', 'six', 'seven', 'eight', 'nine'];
//   var i;
//   var startIdx;
//   var numLen;

//   return str.split(' ').map(function(word){
//     for(i = 0; i < NUMBERS.length; i++) {
//       startIdx = word.toLowerCase().indexOf(NUMBERS[i]);
//       numLen = NUMBERS[i].length;

//       if (startIdx !== -1) {
//         word = word.slice(0, startIdx) + String(i) + word.slice(startIdx + numLen);
//         break;
//       }

//     }

//     return word;  
//   }).join(' ');
// }

/*
Alternative solution:
create an array of numbers like before
then iterate over this array; for each number, do a global replace with index of that number
*/

function wordToDigit(str) {
  var NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var i;

  for(i = 0; i < NUMBERS.length; i++) {
    str = str.replace(new RegExp('\\b' + NUMBERS[i] + '\\b', 'gi'), i);
  }

  return str;
}

console.log(wordToDigit(''));
// ""
console.log(wordToDigit('Please call me'));
// "Please call me"
console.log(wordToDigit('Please call me at five five five one two three four'));
// "Please call me at 5 5 5 1 2 3 4"
console.log(wordToDigit('Please call me at five. five ,five one two three ,four. Thanks.'));
// "Please call me at 5. 5 ,5 1 2 3 ,4. Thanks."

console.log(wordToDigit('Please call me at FIVE. five ,five one two three ,Four. Thanks.'));
// "Please call me at 5. 5 ,5 1 2 3 ,4. Thanks."

console.log(wordToDigit('The weight is done.'));      // "The w8 is d1."