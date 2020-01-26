


function findFibonacciIndexByLength(num){
  if (num <= 1) return 1;

  var one = 1;
  var two = 1;  
  var three = one + two;
  var idx = 3;

  while(String(three).length !== num) {
    one = two;
    two = three;
    three = one + two;
    idx += 1;
  }

  return idx;
}

