/*
PEDAC:
Understanding the problem:
- Input: array of unsorted values
- Output: array of sorted values
- Starts with 0th and 1st values; if left is greater than right, swap
- use temp variable for swapping; if left less than or equal to right, skip
- Go to 1st and 2nd and repeat; move down array until you've done this for
all elements
- At that point (1 entire iteration later), the largest value has bubbled
up to the last index
- Now can repeat another iteration with comparisons
- However this time, can go up to 2nd to last index
- Repeat process until array.length iterations have been done or
an iteration has been done with no swaps (use a noSwap flag)
- Note that since we are swapping values, we are mutating argument array
which is what the problem wants
Examples/Test Cases: Given
- Based on examples, all elements will be of the same type
- If number, then sort by numeric value?
- If string, then sort by what? ASCII character order? Does case matter?
- Do we need to consider other primitives? how about objects and arrays?
- For now, just use basic comparison operators and thier default function
with whatever element is passed in; later can add more functionality
DS:
- Given an array and need to use same array and return it after mutation
Algorithm:
Create a variable called startIdx and set to 0
Create another variable called endIdx and set to arr.length - 1
Create another variable called noSwap and set to true
Create another variable called temp
Run a loop for arr.length times; 0 to arr.length - 1
- Run another loop from startidx (inclusive) to endIdx (exclusive)
  - Compare arr[startIdx] to arr[startIdx + 1]; swap if 2nd is greater than 1st
  - If swap occurs, set noSwap to false
- Decrement endIdx
- Check if noSwap true; if so, break from function
Return arr from function
*/



function bubbleSort(arr){
  var iterations = 0;
  var iterationsOfIterations = 0;
  var swaps = 0;
  var endIdx = arr.length - 1;
  var noSwap;
  var temp;
  var i;
  var j;

  for(i = 0; i < arr.length; i++) {
    noSwap = true;
    for(j = 0; j < endIdx; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
        swaps += 1;
      }
      iterationsOfIterations += 1;
    }

    iterations += 1;

    endIdx -= 1;

    if (noSwap) break;
  }
  console.log(`Iterations: ${iterations}   Swaps: ${swaps}    Iterations Of Iterations: ${iterationsOfIterations}`);
  return arr;
}



/*
Need to reset flag noSwap to true before next inner loop runs
Otherwise, if the array only needs 1 swap and then its good, problem is that 
the noSwap will be set to false and will remain that way and inner loop will keep running

Don't need to actually return array; can just do default return of undefined aka nothing

Solution used infinite while loop for outer loop
Then breaks from it when swapped variable is true (oppsite of our noSwap which we only break from if false)
Because of this, means even after done sorting, needs to check another inner loop iteration and ensure no swaps left

The solution's inner loop iterates from 2nd value in array to last value from array; swap comparions is done between
current index and current index - 1
Inner loop doesn't consider that after each pass, later indexes don't need to be checked (know its in order)

*/


var array = [5, 4, 3, 2, 1];
bubbleSort(array);
console.log(array);    // [1, 2, 3, 4, 5]

// var array = [5, 3];
// bubbleSort(array);
// console.log(array);    // [3, 5]

// var array = [6, 2, 7, 1, 4];
// bubbleSort(array);
// console.log(array);    // [1, 2, 4, 6, 7]

// var array = [25, 6, 13, 2, 7, 1, 4];
// bubbleSort(array);
// console.log(array);    // [1, 2, 4, 6, 7, 13, 25]


// var array = [2, 1, 4, 6, 7, 13, 25];
// bubbleSort(array);
// console.log(array);    // [1, 2, 4, 6, 7, 13, 25]

// var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
// bubbleSort(array);
// console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]


// var array = 'A|aB|bC|cD|dE|eF|fG|gH|hI|iJ|jK|kL|lM|mN|nO|oP|pQ|qR|rS|sT|tU|uV|vW|wX|xY|yZ|z'.replace(/\|/g, '').split('').reverse();
// bubbleSort(array);
// console.log(array);    // ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// var array = 'A|aB|bC|cD|dE|eF|fG|gH|hI|iJ|jK|kL|lM|mN|nO|oP|pQ|qR|rS|sT|tU|uV|vW|wX|xY|yZ|z'.replace(/\|/g, '').split('');
// bubbleSort(array);
// console.log(array);    // ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// var array = 'A|aB|bC|cD|dE|eF|fG|gH|hI|iJ|jK|kL|lM|mN|nO|oP|pQ|qR|rS|sT|tU|uV|vW|wX|xY|yZ|z'.replace(/\|/g, '').split('').sort();
// bubbleSort(array);
// console.log(array);    // ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
