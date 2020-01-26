/*
Suffix Method
st: 1, 21, ... , 101, 121
nd: 2, 22, ... , 102, 122
rd: 3, 23, ... , 103, 123
th: 4 - 20,24 - 30, ... , 100, 104 - 120, 124 - 130

Anything ending in 1 but not ending in 11 ends up st
Anything ending in 2 but not ending in 12 ends up nd
Anything ending in 3 but not ending in 13 ends up rd
Everything else ends up th

Century
If year/100 === parseInt(year/100), means its an year ending in 00
In that case, the century is year / 100
Otherwise, century is parseInt(year/100) + 1
*/

function addSuffix(cent) {
  let suffix = '';
  let lastOne = String(cent)[String(cent).length - 1];
  let lastTwo = String(cent)[String(cent).length - 2] + lastOne;  

  if (lastOne === '1' && lastTwo !== '11') {
    suffix = 'st';
  } else if (lastOne === '2' && lastTwo !== '12') {
    suffix = 'nd';
  } else if (lastOne === '3' && lastTwo !== '13') {
    suffix = 'rd';
  } else {
    suffix = 'th'
  }

  return String(cent) + suffix;
}

function century(year) {
  let cent = '';

  if (year/100 === parseInt(year/100)) {
    cent = year/100;
  } else {
    cent = parseInt(year/100) + 1;
  }

  return addSuffix(cent);
}

century(2000) === "20th"
century(2001) === "21st"
century(1965) === "20th"
century(256) === "3rd"
century(5) === "1st"
century(10103) === "102nd"
century(1052) === "11th"
century(1127) === "12th"
century(11201) === "113th"
