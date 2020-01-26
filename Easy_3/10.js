function wordLength(word) {
  var i;
  var length = 0;

  for(i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() >= 'a' && word[i].toLowerCase() <= 'z') {
      length += 1;
    }
  } 

  return length;
}

function wordSizes(str) {
  var result = {};
  var len;

  str.split(' ').forEach(function(word){
    len = wordLength(word);
  
    if (result[len]) {
      result[len] += 1;
    } else if ((!result[len]) && len !== 0){
      result[len] = 1;
    }
  });

  return result;
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}
