/*
Union means the resulting set contains only unique values
If there is the same value in two arrays, final result should only have 1 copy
What if there is duplication in just one of the two array's; ex. [1, 2, 3, 3, 3, 4]
Assume that it should be removed as well
Does order matter? Example seems to imply yes; but that may just be because
intial array's happen to be in order; for inital solution ignore

Create a result array that is empty
Iterate over 1st array. For each element check its indexOf in result array.
If that is -1, means taht elemetn should be added to result
Once 1st array done. Do same with 2nd array.
return result
*/

function union(one, two){
  var result = [];

  one.forEach(function(e){
    if (result.indexOf(e) === -1) result.push(e);
  });

  two.forEach(function(e){
    if (result.indexOf(e) === -1) result.push(e);
  });
  
  return result;
}

// works with any number of arrays; based on solution
function union(){
  var result = [];
  var i;

  for(i = 0; i < arguments.length; i++){
    arguments[i].forEach(function(e){
      if (result.indexOf(e) === -1) result.push(e);
    });
  }

  return result;
}

console.log(union()); // []
console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9])
console.log(union([1, 3, 5, 5, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9])
console.log(union([1, 3, 5, 5, 5], [3, 6, 9], [3, 6, 6, 6, 9]));    // [1, 3, 5, 6, 9])