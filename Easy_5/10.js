function reverseWords(sent){
  return sent.split(' ').map(function(word){
    if (word.length >= 5) word = word.split('').reverse().join('');
    return word;
  }).join(' ');
}


console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"