/**/

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

function isLeapYear(year) {
  var status = false;
  if (year % 4 === 0) {
    status = true;
  }
  if (year % 100 === 0) {
    status = false;
  }
  if (year % 400 === 0) {
    status = true
  }

  return status;
}

isLeapYear(2016)=== true
isLeapYear(2015)=== false
isLeapYear(2100)=== false
isLeapYear(2400)=== true
isLeapYear(240000)=== true
isLeapYear(240001)=== false
isLeapYear(2000)=== true
isLeapYear(1900)=== false
isLeapYear(1752)=== true
isLeapYear(1700)=== false
isLeapYear(1)=== false
isLeapYear(100)=== false
isLeapYear(400)=== true

