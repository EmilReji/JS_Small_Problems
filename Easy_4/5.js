/*
Additions:
Handle more than two arrays
Handle different length arrays (3rd test case)
*/

function findMaxLengthSubArr(args){
  var i;
  var maxLength = 0;

  for(i = 0; i < args.length; i++){
    if (args[i].length > maxLength) {
      maxLength = args[i].length;
    }
  }
  return maxLength;
}

function interleave(){
  var i;
  var j;
  var longest = findMaxLengthSubArr(arguments);
  var result = [];

  for(i = 0; i < longest; i++){
    for(j = 0; j < arguments.length; j++){
      if (arguments[j][i] !== undefined){
        result.push(arguments[j][i]);
      }
    }
  }

  return result;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c'])); // [1, "a", 2, "b", 3, "c"]
console.log(interleave([1, 2, 3], ['a', 'b', 'c'], [4, 5, 6])); // [1, "a", 4,  2, "b", 5, 3, "c", 6]
console.log(interleave([1, 2], ['a', 'b', 'c'], [4, 5, 6, 7])); // [1, "a", 4,  2, "b", 5, "c", 6, 7]