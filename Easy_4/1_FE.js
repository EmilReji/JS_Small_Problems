function dms(num){
  var leftover;
  var deg = String(num).split('.')[0];
  var min;
  var sec;
  var temp;

  leftover = String(num).split('.')[1];

  if (Math.abs(deg) > 360) deg = String(Number(deg) % 360);
  if (deg < 0) deg = String(360 + Number(deg));

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

console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"