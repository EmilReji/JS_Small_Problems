function reverseNumber(num){
  return Number(String(num).split('').reverse().join(''));
}

function findPow(num){
  var pow = 1;

  while(num > Math.pow(10, pow)){
    pow += 1;
  }

  return pow - 1;
}

function reverseNumber(num){
  var reversed = 0;
  var power = findPow(num);
  var newNumPow = 0;

  while(power >= 0){
    reversed += ((num % 10) * Math.pow(10, power));
    num -= (num % 10);
    num = Math.trunc(num / 10);
    power -= 1;
    newNumPow += 1;
  }
  return reversed;
}
console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1