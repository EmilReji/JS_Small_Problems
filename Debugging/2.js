var RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

function isReserved(name) {
  var flag = false;
  RESERVED_KEYWORDS.forEach(function (reserved) {
    if (name === reserved) {
      flag = true;
    }
  });

  return flag;
}

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true

/*
Issue caused by using forEach which doesn't allow early returns
Thus the return true is never actually run and the method always returns false
Alternatives are to use for loop instead or use a flag like above

Missed fact taht return inside forEach's block would only return for that block 
and not for entire method itself

*/