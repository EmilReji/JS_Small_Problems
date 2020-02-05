/*
- Fibonacci Numbers (Memoization)

Further Exploration:
The current solution defines the memo object in the global scope. 
Can you use an IIFE (Immediately-Invoked Function Expression) to 
make memo private instead? If the concept of an IIFE is new to you, 
you may want to wait until after it is covered in course JS225 
before doing this Further Exploration exercise.
*/

// var results = [0, 1, 1]

// function fibonacci(nthFibNum){
//   if (!(typeof nthFibNum === 'number' && nthFibNum >= 0)) return null;
//   if (results[nthFibNum]) return results[nthFibNum];

//   var first = results[nthFibNum - 1] || fibonacci(nthFibNum - 1);
//   results[nthFibNum - 1] = first;

//   var second = results[nthFibNum - 2] || fibonacci(nthFibNum - 2);
//   results[nthFibNum - 2] = second;

//   return first + second;
// }


/*
Refactored to not use global
*/


function fibonacci(nthFibNum, results = [0, 1, 1]){
  if (!(typeof nthFibNum === 'number' && nthFibNum >= 0)) return null;
  if (results[nthFibNum]) return results[nthFibNum];

  var first = results[nthFibNum - 1] || fibonacci(nthFibNum - 1, results);
  results[nthFibNum - 1] = first;

  var second = results[nthFibNum - 2] || fibonacci(nthFibNum - 2, results);
  results[nthFibNum - 2] = second;

  return first + second;
}

console.log(fibonacci('test'));  // null
console.log(fibonacci(0));       // 0
console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050