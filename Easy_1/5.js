function sum(num) {
  var result = 0;

  for(var i = 1; i <= num; i++) {
    result += i;
  } 

  return result;
}

function product(num) {
  var result = 1;

  for(var i = 1; i <= num; i++) {
    result *= i;
  } 

  return result;
}


var rlSync = require('/home/pi/Documents/JS210/Lesson_1/preparations_exercises/node_modules/readline-sync');

var num = parseInt(rlSync.question("Please enter an integer greater than 0: "));

while (true) {
  var choice = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product.');

  if (choice === 's') {
    console.log(`The sum of the integers between 1 and ${num} is ${sum(num)}.`);
    break;
  } else if (choice === 'p') {
    console.log(`The product of the integers between 1 and ${num} is ${product(num)}.`);
    break;
  } else {
    console.log("Your choice was invalid.");
  }
}
