/*
create empty result string
create temp string that is empty
iterate over the string
if temp string is empty, replace temp string with current char
also add current char to result string
if temp string is not empty, then continue next iteration
return result sting
*/
function crunch(str) {
  var result = '';
  var previous = '';

  for (var i = 0; i < str.length; i++) {
    if (previous === str[i]) {
      continue;
    } else {
      result += str[i];
      previous = str[i];
    }
  }

  return result;
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
