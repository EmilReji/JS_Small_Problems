/*
PEDAC:
Understanding the problem:
- Fibonacci Numbers Procedural
- Same idea as previous problem but can't use recursion
- Will likely have a loop
- Have similar guard class to handle nthFibNum inputs that aren't positive integers
- will need to setup variables before loop to hold values from start of fib seq
Examples/Test Cases: given
DS: only need variables with numbers
Algorithm:
Have guard close for nthFibNum inputs that aren't positive integers
Create a variable to hold 1st and 2nd fib numbers
Have another guard class that returns 1 if nthFibNum <= 2
Then run a loop nthFibNum - 2 times
- Store the sum of one and two in a variable called temp
- Overwrite one with the value of two
- Overwrite two with the value of temp
Once loop ends, return two
*/

function fibonacci(nthFibNum){
  if (!(typeof nthFibNum === 'number' && nthFibNum > 0)) return null;
  var one = 1;
  var two = one;
  var temp;
  var i;

  if (nthFibNum <= 2) return one;

  for(i = 2; i < nthFibNum; i++){
    temp = one + two;
    one = two;
    two = temp;
  }

  return two;
}


console.log(fibonacci('test'));  // null
console.log(fibonacci(0));       // null
console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050