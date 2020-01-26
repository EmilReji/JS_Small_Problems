function getGrade(one, two, three) {
  let avg = (one + two + three)/3;
  let grade = 'F';

  if (avg >= 90) {
    grade = 'A';
  } else if (avg >= 80) {
    grade = 'B';
  } else if (avg >= 70) {
    grade = 'C';
  } else if (avg >= 60) {
    grade = 'D';
  } 

  return grade;
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
