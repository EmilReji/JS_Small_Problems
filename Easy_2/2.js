
function logInBox(str) {
  var width = str.length + 2;
  var spaces = '';
  var lines = '';

  for(var i = 0; i < width; i++) {
    spaces += ' ';
    lines += '-';
  }

  var topAndBottom = '+' + lines + '+';
  var middle = '|' + spaces + '|'
  var text = '| ' + str + ' |';
  
  console.log(topAndBottom);
  console.log(middle);
  console.log(text);
  console.log(middle);
  console.log(topAndBottom);
}

logInBox('To boldly go where no one has gone before.');

logInBox('');
