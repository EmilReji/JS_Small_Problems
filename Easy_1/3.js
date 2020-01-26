const FEETPERMETERSQ = 10.7639;

var rlSync = require('/home/pi/Documents/JS210/Lesson_1/preparations_exercises/node_modules/readline-sync')

var areaFeet;
var areaWidth;

while (true) {
  var format = rlSync.question("Please choose your format: meters(m) or feet (f): ")

  if (format.toLowerCase().startsWith('m')) {
    var length = rlSync.question("Enter the length of the room in meters: ");
    var width = rlSync.question("Enter the width of the room in meters: ");
    areaMeters = parseFloat(length * width);
    areaFeet = areaMeters * FEETPERMETERSQ;
    break;
  } else if (format.toLowerCase().startsWith('f')) {
    var length = rlSync.question("Enter the length of the room in feet: ");
    var width = rlSync.question("Enter the width of the room in feet: ");
    areaFeet = parseFloat(length * width);
    areaMeters = areaFeet/FEETPERMETERSQ;
    break;
  } else {
    console.log("Your entry was invalid.")  
  }
}

console.log(`The area of the room is ${areaMeters.toFixed(2)} square meters (${areaFeet.toFixed(2)} square feet).`);
