var memberDirectory = {
  'Jane Doe': '323-8293',
  'Margaret Asbury': '989-1111',
  'Callum Beech': '533-9090',
  'Juanita Eastman': '424-1919',
};

function isValidName(name) {
  return (/^[A-Za-z]+ [A-Za-z]+$/).test(name);
}

/*
Can't use \w for alphabets only; it includes digits and underscore
Use explict alphabetic characters
*/

function isValidPhone(phone) {
  return (/^\d{3}-\d{4}$/).test(phone);
}

function validMemberInfo(name, phone) {
  return isValidName(name) && isValidPhone(phone);
}

function addMember(name, phone) {
  if (validMemberInfo(name, phone)) {
    memberDirectory[name] = phone;
  } else {
    console.log('Invalid member information.');
  }
}

addMember('Laura Carlisle', '444-2223');
addMember('Rachel Garcia', '232-1191');
addMember('Earl 5mith', '331-9191');

console.log(memberDirectory);