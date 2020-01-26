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


isPalindrome('madam');               // true
isPalindrome('maddam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true
