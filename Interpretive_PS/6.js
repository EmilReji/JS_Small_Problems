var STAR = '*'
var SPACE = ' ';

function upper(n){
  var i;
  var startSpaces;
  var middleSpaces;

  for(i = 1; i <= ((n - 1)/2); i++){
    startSpaces = SPACE.repeat(i - 1);
    middleSpaces = SPACE.repeat(((n - 1)/2) - i);
    console.log(startSpaces + STAR + middleSpaces + STAR + middleSpaces + STAR);
  }
}

function lower(n){
  var i;
  var startSpaces;
  var middleSpaces;

  for(i = 1; i <= ((n - 1)/2); i++){
    startSpaces = SPACE.repeat(((n - 3)/2) - (i - 1));
    middleSpaces = SPACE.repeat(i - 1);
    console.log(startSpaces + STAR + middleSpaces + STAR + middleSpaces + STAR);
  }
}

function middle(n){
  console.log(STAR.repeat(n));
}

function star(n){
  upper(n);
  middle(n);
  lower(n);
}

star(7);
console.log('Next');
star(9);
console.log('Next');
star(25);