function strIsPalindrome(str){
  return str.split('').reverse().join('') === str;
}

function dateIsPalindrome(date){
  var dayOfMonth = String(date.getDate()).padStart(2, '0');
  var monthOfYear = String(date.getMonth() + 1).padStart(2, '0');
  var year = String(date.getFullYear())
  var str = `${dayOfMonth}${monthOfYear}${year}`;

  return strIsPalindrome(str);
}

let date = new Date();
console.log(date); // Sun Feb 02 2020 09:12:09 GMT-0500 (Eastern Standard Time)
console.log(dateIsPalindrome(date)); // true

date.setMonth(4);
console.log(date); // Sat May 02 2020 09:12:09 GMT-0400 (Eastern Daylight Time)
console.log(dateIsPalindrome(date)); // false

date.setFullYear(3030);
date.setMonth(2);
date.setDate(3);
console.log(date); // Wed Mar 03 3030 09:13:52 GMT-0500 (Eastern Standard Time)
console.log(dateIsPalindrome(date)); // true

console.log(strIsPalindrome('02022020')); // true
console.log(strIsPalindrome('02052020')); // false
console.log(strIsPalindrome('03033030')); // true