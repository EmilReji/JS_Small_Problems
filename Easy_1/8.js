/**/

function isLeapYear(year) {
  if (year % 400 === 0 && year >= 1752) {
    return true;
  } else if (year % 100 === 0 && year >= 1752) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}


