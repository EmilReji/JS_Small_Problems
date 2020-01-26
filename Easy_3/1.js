
function getRand(){
  var max = 200;
  var min = 20;

  var num = min + Math.floor((Math.random() * (max - min + 1))); 

  return num;
}

for (let i = 0; i < 1000; i++) {
  let num = getRand();
  let result = 20 <= num && num <= 200;
  if (!result) {
    console.log(`20 <= ${num} && ${num} <= 200 : ${result}`);
  }
}
