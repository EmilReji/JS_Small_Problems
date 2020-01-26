var age = Number(prompt('What is your age?'));
var retireAge = Number(prompt('At what age would you like to retire?'));
var currYear = new Date().getFullYear();
var yearsWork = retireAge - age;
var retireYear = currYear + yearsWork;

console.log(`It's ${currYear}. You will retire in ${retireYear}.`);
console.log(`You have only ${yearsWork} years of work to go!`);
