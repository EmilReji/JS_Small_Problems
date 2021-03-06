function valence(element) {
  switch (element) {
    case 'H': return 1;
    case 'C': return 4;
    case 'N': return 5;
    case 'O': return 6;
    // omitting the rest
  }
}

function valenceOfMolecule() {
  var sum = 0;
  var i = 0; 

  for(i = 0; i < arguments.length; i++){
    var match   = /([a-zA-Z]+)([0-9]*)/.exec(arguments[i]);
    var element = match[1];
    var number  = parseInt(match[2]) || 1;

    sum += number * valence(element);
  }

  return sum;
}

/*
arugments isn't an actual array and therefore can't use forEach
must use normal for loop
*/

// Example

console.log('Number of valence electrons');
console.log('---------------------------');
console.log('Water:     ' + String(valenceOfMolecule('H2', 'O')));
console.log('Propane:   ' + String(valenceOfMolecule('C3', 'H8')));
console.log('Vitamin C: ' + String(valenceOfMolecule('C6', 'H8', 'O6')));
console.log('Caffeine:  ' + String(valenceOfMolecule('C8', 'H10', 'N4', 'O2')));

// Expected output:
// Number of valence electrons
// ---------------------------
// Water:     8
// Propane:   20
// Vitamin C: 68
// Caffeine:  74