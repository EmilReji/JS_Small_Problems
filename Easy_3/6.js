function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function isPalindromicNumber(num) {
  var str = String(num, 10);
  console.log(str);
  return isPalindrome(str);
}

/*
isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
*/

console.log(isPalindromicNumber(05));
console.log(isPalindromicNumber(050));
console.log(isPalindromicNumber(0500));
console.log(isPalindromicNumber(05000));

// if zero is before number, then when that number is converted to a String, converts to octal value; if 5 is in ones place, then 5 * 8^0 is returned; if 5 is in the tens place, then 5 * 8^1 is returned; if 5 is in the hundreds place, then 5 * 8^2 is returned
