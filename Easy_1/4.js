
var rlSync = require('/home/pi/Documents/JS210/Lesson_1/preparations_exercises/node_modules/readline-sync')

var bill = parseFloat(rlSync.question("What is the bill? "));
var tipPercent = parseFloat(rlSync.question("What is the tip percentage?  "));

var tip = bill * (tipPercent/100);
var total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);
