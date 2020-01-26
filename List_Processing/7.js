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


function palindromes(str) {
  return substrings(str).filter(function(subStr){
    return (subStr === subStr.split('').reverse().join('')) && (subStr.length > 1);
  });   
}

console.log(palindromes('abcd'));       
console.log([]);
console.log(palindromes('madam'));      
console.log([ "madam", "ada" ]);

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
console.log([ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]);

console.log(palindromes('knitting cassettes'));
// returns
console.log([ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ])
