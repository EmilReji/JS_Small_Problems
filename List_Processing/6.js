function substringsAtStart(str) {
  return str.split('').map(function(chr, idx){
    return str.slice(0, idx + 1);
  });
}

function substrings(str) {
  var result = [];

  str.split('').forEach(function(chr, idx){
    substringsAtStart(str.slice(idx)).forEach(subStr => result.push(subStr));
  });

  return result;
}

console.log(substrings('abcde'));

// returns
console.log([ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]);
