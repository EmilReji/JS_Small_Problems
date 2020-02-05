/*
PEDAC:
Understanding the problem:
- Input: string with 1 or more characters
- Output: object with lowercase, uppercase, and neither
- Each key value pair's value has a floating point number up to 2 digits
- Represents % of characters in string that match
Examples/Test Cases: Given
DS:
- Need an object to store results in
- Need to split string input into an array of characters
Algorithm:
- Split the string into an array of characters
- Create a variable called increment amount
- This should be 100/array.length; round to 2 digits; will
increment values in object by this for each match
- Then iterate over the array of characters; could use reduce
and pass in the object literal where all 3 are startin at 0.00
- Then on each iteration, update reduce object using if, else if 
based on what current character is
- Return return value of reduce (which is object)

don't want to use incrementBy since it causes rounding issues
rather just increment normal count
then later convert count to percentage
*/

function letterPercentages(str){
  var arr = str.split('');

  var obj = arr.reduce(function(obj, currChr){
    if (currChr >= 'A' && currChr <= 'Z'){
      obj['uppercase'] += 1;
    } else if (currChr >= 'a' && currChr <= 'z'){
      obj['lowercase'] += 1;
    } else {
      obj['neither'] += 1;
    }

    return obj;
  }, { lowercase: 0, uppercase: 0, neither: 0 });

  Object.keys(obj).forEach(function(currKey){
    obj[currKey] = (obj[currKey]/arr.length * 100).toFixed(2);
  });

  return obj;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }