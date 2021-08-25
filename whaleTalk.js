let input = 'a whale of a deal!';
const vowels = ['a','e','i','o','u'];
let resultArray = [];
for(let i=0; i<input.length; i++){
  // console.log(i);
  for(let j=0; j<vowels.length; j++){
    if(input[i]===vowels[j]){
      resultArray.push(input[i]);
      if(vowels[j] === 'e' || vowels[j] === 'u'){
        resultArray.push(input[i]);
      }
      break;
    }
  }
}
console.log(resultArray.join('').toUpperCase());