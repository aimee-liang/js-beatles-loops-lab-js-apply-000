// add solution here
function theBeatlesPlay(array1, array2){
  let whatIsPlayed = [];
  for (let i = 0; i < array1.length; i++){
  whatIsPlayed.push(`${array1[i]} plays ${array2[i]}`);
  }
  return whatIsPlayed;
}

function johnLennonFacts(array){
  let finalFacts = [];
  let i = 1;
  while (i <= array.length){
    finalFacts.push(`${array}!!!`);
    i++;
  }
  return finalFacts;
} 

function iLoveTheBeatles(num){
  let result = [];
  do {
    result.push("I love the Beatles!")
    num++;
  }
  while (num < 15);
  return result
} 