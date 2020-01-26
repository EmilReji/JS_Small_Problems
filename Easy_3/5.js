function isPalindrome1(str) {
  return str === str.split('').reverse().join('');
}

function isPalindrome(str) {
  var i;

  for(i = 0; i <= str.length/2; i++) {
    if (str[i] !== str[str.length - i - 1]) return false;
  } 

  return true;
}

function isAlphaNumeric(str) {
  return (str >= 'a' && str <= 'z') ||
         (str >= '0' && str <= '9')
}

function isRealPalindrome(str) {
  var i;
  var chr;
  var realStr = '';

  for(i = 0; i < str.length; i++) {
    chr = str[i].toLowerCase();
    if (!isAlphaNumeric(chr)) continue;
    realStr += chr;
  }

  return isPalindrome(realStr);
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
