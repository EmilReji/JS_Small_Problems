/*
create new variables longer and shorter
assign values using 2 ternary operators
then concatenate short long short and return
*/

function shortLongShort(one, two) {
  short = one.length > two.length ? two : one;
  long = one.length > two.length ? one : two;

  return short + long + short
}
console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
