/*
PEDAC:
Understanding the problem:
- Input: given an open ended argument called template
- Output: A string
- The template needs to contain adjective, noun, verb, and adverb words
- Also needs to to know what type of word each is
- Could use an object with keys being adjective, noun, verb, and adverb
- Values are an array of words
- Assuming we don't want to repeat same word, could just shift or pop 
word from array; that way we get the one we need without risking reuse
- How long should return value be? Is it dynamically generated based on
number of values in template?
- Return format template 1: 
The ADJECTIVE brown NOUN ADVERB VERB 
the ADJECTIVE yellow NOUN, who ADVERB VERB 
his NOUN and looks around.
- Return format template 2: 
The NOUN VERB the NOUN's NOUN.
- Old problem format: https://launchschool.com/exercises/85e333ca
Do you VERB your ADJECTIVE NOUN ADVERB? 

- Got it backwards; template passed in represents the actual structure while
the adjective, noun, verb, and adverb word choices are hardcoded in function
Algorithm:
- Pass in a string with common words as is and varying words as ADJECTIVE, NOUN, ADVERB, and VERB
- In function, create a hash object with those varyin words mapped to array of options
- Then when template is passed in, run replace method on that string for ADJECTIVE and replace with
and option from the array (create helper method to get random); repeat until nothing left to replace
- Do same for other 3 varying word types
- Return string
*/

function removeRandVal(arr){
  var idx = Math.floor(Math.random() * Math.floor(arr.length));
  var val = arr[idx];
  var i;

  for(i = idx; i < arr.length - 1; i++){
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;

  return val;
}

function replaceAllMatches(str, matchType, optionsArr){
  var prevStr;
  var chosenVal;

  while(true){
    prevStr = str;
    chosenVal = removeRandVal(optionsArr);
    str = str.replace(matchType, chosenVal);
    if (str === prevStr) {
      optionsArr.push(chosenVal);
      return str;
    }
  }
}

function madlibs(template) {
  var options = { "ADJECTIVE": ["quick", "lazy", "sleepy", "noisy", "hungry"], 
                  "NOUN": ["fox", "dog", "head", "leg", "tail", "cat"],
                  "VERB": ["jumps", "lifts", "bites", "licks", "pats"],
                  "ADVERB": ["easily", "lazily", "noisily", "excitedly"]
                };

  var regex;
  
  Object.keys(options).forEach(function(key){
    regex =  new RegExp('\\b' + key + '\\b');
    template = replaceAllMatches(template, regex, options[key]);
  });

  return template;
}

// These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------

var template1 = `The ADJECTIVE brown NOUN ADVERB VERB 
the ADJECTIVE yellow NOUN, who ADVERB VERB 
his NOUN and looks around.`;

console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

console.log(madlibs(template1));
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

var template2 = `The NOUN VERB the NOUN's NOUN.`

console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".

console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".