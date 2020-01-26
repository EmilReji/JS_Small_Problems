let rlSync = require('/home/pi/Documents/JS210/Lesson_1/preparations_exercises/node_modules/readline-sync');

let noun = rlSync.question('Enter a noun: ');
let verb = rlSync.question('Enter a verb: ');
let adjective = rlSync.question('Enter a adjective: ');
let adverb = rlSync.question('Enter a adverb: ');

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
