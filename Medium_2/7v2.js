/*
PEDAC:
Understanding the problem:
- Input: unsorted array
- Output: sorted array
- Bubblesort starts by comparing the first two values and swapping them if the one on the right is greater than the
one on the left. This comparison and swap is done on every pair for the entire array. Thus one pass finishes. At this
point the number at the end of the array is the largest in the entire array and sorted. This entire pass is then repeated
from start to the 2nd to last item. This is repeated until array.length passes are done or no swap done in previous pass.
Then sorted array is returned
- Sorting is done in place meaning array will be mutated
- Can swap by using a temp variable
Algorithm:
- Create a noSwap variable which is true
- Create a variable endIdx equal to arr.length - 1
- Run an infinite loop
  - FORGOT THIS: set noSwap to true again; otherwise remains false and loop never ends
  - Run a for loop from 1 to endIdx
    - On each iteration compare current val and val right before it; 
    - Swap if needed; update noSwap if swap occurs
  - Decrement endIdx
  - Check if noSwap is true; if so, break from loop
- Return original array
*/

function swap(arr, oneIdx, twoIdx){
  var temp = arr[oneIdx];
  arr[oneIdx] = arr[twoIdx];
  arr[twoIdx] = temp;
}

function bubbleSort(arr){
  var endIdx = arr.length - 1;
  var i;
  var noSwap

  while(true){
    noSwap = true;
    for(i = 1; i <= endIdx; i++){
      if (arr[i] < arr[i - 1]){
        swap(arr, i, i - 1);
        noSwap = false;
      }
    }

    endIdx -= 1;
    if (noSwap) break;
  }
}


var array = [5, 4, 3, 2, 1];
bubbleSort(array);
console.log(array);    // [1, 2, 3, 4, 5]

var array = [5, 3];
bubbleSort(array);
console.log(array);    // [3, 5]

var array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7]

var array = [25, 6, 13, 2, 7, 1, 4];
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7, 13, 25]


var array = [2, 1, 4, 6, 7, 13, 25];
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7, 13, 25]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]


var array = 'A|aB|bC|cD|dE|eF|fG|gH|hI|iJ|jK|kL|lM|mN|nO|oP|pQ|qR|rS|sT|tU|uV|vW|wX|xY|yZ|z'.replace(/\|/g, '').split('').reverse();
bubbleSort(array);
console.log(array);    // ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var array = 'A|aB|bC|cD|dE|eF|fG|gH|hI|iJ|jK|kL|lM|mN|nO|oP|pQ|qR|rS|sT|tU|uV|vW|wX|xY|yZ|z'.replace(/\|/g, '').split('');
bubbleSort(array);
console.log(array);    // ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var array = 'A|aB|bC|cD|dE|eF|fG|gH|hI|iJ|jK|kL|lM|mN|nO|oP|pQ|qR|rS|sT|tU|uV|vW|wX|xY|yZ|z'.replace(/\|/g, '').split('').sort();
bubbleSort(array);
console.log(array);    // ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
