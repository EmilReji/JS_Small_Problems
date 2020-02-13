/*
Input: string
Output: new string
Algorithm:
Create an empty new string to hold result string
Run a loop over the given string
For each existing character, add two of it to the result string
Once loop done, return result string
*/

function repeater(str){
  var result = "";
  var i;

  for(i = 0; i < str.length; i++){
    result += (str[i] + str[i]);
  }

  return result;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""