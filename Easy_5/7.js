

function swapName(str){
  var names = str.split(' ');
  var first = names.slice(0, names.length - 1).join(' ');
  var last = names[names.length - 1];

  return last + ', ' + first;
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Joe Bob Roberts'));    // "Roberts, Joe Bob"