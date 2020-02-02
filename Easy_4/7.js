function multiplyList(one, two){
  return one.map(function(currVal, idx){
    return currVal * two[idx];
  });
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));
// [27, 50, 77]