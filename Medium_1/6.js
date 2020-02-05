/*
PEDAC:
Understanding the Problem:
- Fibonacci Numbers Recursive
- Input: a number representing the nth fibonacci number
- Output: the corresponding fibonacci number
- Needs to be recursive: call itself, have a base case, and result of recursion
should be used in each step (aka call itself)
- Every number is the sum of previous 2 numbers
- Fib nums: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
- Indexes:  1, 2, 3, 4, 5, 6,  7,  8,  9, 10, 11,  12 
- How to handle non-positive integer or non-integers? have guard clause
Examples and test cases: given
DS:
- Shouldn't need anything; just need a couple variables that store numbers
Algorithm:
Create a guard clause that returns early if nthFibNum is not a positive number
Create a base case that checks if nthFibNum is 1 or 2; return 1
Then add final recursive case
Return recursive call to nthFibNum - 1 plus recursive call to nthFibNum - 2
*/

function fibonacci(nthFibNum){
  if (!(typeof nthFibNum === 'number' && nthFibNum > 0)) return null;
  if (nthFibNum <= 2) return 1;
  return fibonacci(nthFibNum - 1) + fibonacci(nthFibNum - 2);
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