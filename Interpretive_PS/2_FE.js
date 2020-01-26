/*
Understanding the problem:
input: an odd integer aka n
output: prints a four pointed diamond made of n by n stars (*)
is number negative? assume positive and odd

Examples and Test Cases:
provided

DS:
strings with arrays to help split strings into characters

Algorithm:
Create a loop that runs from 1 (inclusive) to n (inclusive to ensure middle row is outputted) and increments by 2
- set stars variable to index
- set spaces variable to (n - stars)/2
- call helper method; pass in stars and spaces 
Create another loop that works like previous loop but backwards; decrement from n (exclusive) to 1 (inclusive); similar body 

String constructor function:
takes number of stars and spaces
returns a string with spaces on either side of stars

Hollow Diamond (currently solid):

*/

function createLine(stars, spaces){
  var result = '';
  var i;

  for(i = 0; i < spaces; i++) { result += ' '}
  for(i = 0; i < stars; i++) { result += '*'}
  for(i = 0; i < spaces; i++) { result += ' '}

  return result;
}

function diamond(n){
  var i;

  for(i = 1; i <= n; i += 2){
    console.log(createLine(i, (n - i)/2));  
  }  

  for(i = n - 2; i >= 1; i -= 2){
    console.log(createLine(i, (n - i)/2));
  }
}

diamond(1);

diamond(3);

diamond(9);
