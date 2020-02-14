/*
Issue was that array literal can't take forEach; however if stored in a variable, then works fine
Maybe because as a literal, every time forEach loop run, array is recreated
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals
*/
var ladder = ''
var arr = ['head', 'heal', 'teal', 'tell', 'tall', 'tail']

arr.forEach(function(word) {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail

/*
Real fix is just adding semicolons after each line

*/
