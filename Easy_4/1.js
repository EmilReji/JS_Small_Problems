/*
Input: num (may or may not be integer)
Output: string representation of num with degrees°minutes'seconds"
Convert num into a string
Split on .
1st value is minutes
if 2nd value doesn't exist, means minutes and seconds are set to 0
if 2nd value does exist, then pull it out and convert it to a leftover number
take that lefover number * 60 / Math.pow(10, lefover number length)
take that result and split on .
like before, 1st value is minutes
2nd value if it doesn't exist means seconds is 0
2nd value if it does exist means seconds is 2nd value * 60 / Math.pow(10, lefover number length)
create result string and return
*/

function dms(num){
  var leftover;
  var deg = String(num).split('.')[0];
  var min;
  var sec;
  var temp;

  leftover = String(num).split('.')[1];
  if (!leftover) return `${deg}°00'00"`;

  temp = Number(leftover) * 60 / Math.pow(10, leftover.length)
  min = String(temp).split('.')[0].padStart(2, '0');
  leftover = String(temp).split('.')[1];

  if (!leftover) return `${deg}°${min}'00"`;

  temp = Number(leftover) * 60 / Math.pow(10, leftover.length)
  sec = String(temp).split('.')[0].padStart(2, '0');
  
  return `${deg}°${min}'${sec}"`;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"