/*
Greater than or equal to 0, multiple by 1
Less than 0, return as is 
*/
function negative(num){
  if (num >= 0) num *= -1;
  return num;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0