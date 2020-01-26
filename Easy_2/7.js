function swapHalves(num) {
  let str = String(num);
  let swapped = '';

  for (let i = str.length/2; i < str.length; i++) {
    swapped += str[i];
  }

  for (let i = 0; i < str.length/2; i++) {
    swapped += str[i];
  }
  
  return parseInt(swapped);
}

function twice(num) {
  if (String(num).length % 2 !== 0) return num * 2;
  // all numbers at this point are even length
  if (num === swapHalves(num)) return num;

  return num * 2;
}

