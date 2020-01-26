function wordSizes(str) {
  var result = {};

  str.split(' ').forEach(function(word){
    if (result[word.length]) {
      result[word.length] += 1;
    } else if ((!result[word.length]) && word.length !== 0){
      result[word.length] = 1;
    }
  });

  return result;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
