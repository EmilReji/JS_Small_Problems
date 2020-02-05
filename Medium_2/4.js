/*
PEDAC:
Understanding the problem:
- Input: an integer greater than 1752
- Output: another integer representing # of friday the 13th
Examples/Test Cases: given
DS: 
- just need date object and loop with various variables; 
- no array of obj needed
Algorithm:
- Create a count variable and set to 0
- Create a date object using year passed in, month of jan, and day of 13th
- Then run a loop for 12 times
  - Check the day of the week of the date object
  - Increment count if that returns friday
  - Then increment date object's month by 1
-  Return count variable
*/

function fridayThe13ths(year){
  var count = 0;
  var date = new Date(`January 13, ${year}`);
  var i;
  var dayOfWeek;

  for(i = 0; i < 12; i++) {
    dayOfWeek = date.getDay();
    if (dayOfWeek === 5) count += 1;
    date.setMonth(i + 1);
  }

  return count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2