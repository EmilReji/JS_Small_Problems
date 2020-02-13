

function reverseSentence(sent){
  return sent.split(' ').reverse().join(' ');
}
reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"