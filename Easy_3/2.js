function addSuffix(num) {
  num = String(num);
  var result = num;

  if (Number(num) % 10 === 1 && num.slice(num.length - 2) !== '11') {
    result += 'st';
  } else if (Number(num) % 10 === 2 && num.slice(num.length - 2) !== '12') {
    result += 'nd';
  } else if (Number(num) % 10 === 3 && num.slice(num.length - 2) !== '13') {
    result += 'rd';
  } else {
    result += 'th';
  }

  return result;
}

var arr = []
var i;
var last;

for(i = 0; i < 6; i++) {
  if (i === 5) {
    last = Number(prompt(`Enter the last  number: `));
    if (arr.includes(last)) {
      console.log(`The number ${last} appears in  ${arr}.`);
    } else {
      console.log(`The number ${last} does not appear in  ${arr}.`);
    }
  } else {
    arr.push(Number(prompt(`Enter the ${addSuffix(i + 1)} number: `)));
  }
}
