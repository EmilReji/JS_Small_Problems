function centerOf(str){
  var middle = '';
  if (str.length === 0) return middle;

  if (str.length % 2 === 0){
    middle = str[str.length/2 - 1] + str[str.length/2];
  } else {
    middle = str[Math.trunc(str.length/2)];
  }

  return middle;
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
console.log(centerOf(''));                 // ""