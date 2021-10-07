// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if(!shift || shift === 0 || shift < -25 || shift > 25)
  return false;
  let result = "";
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  //console.log(alpha);
  try{ 
  if(!input || typeof(input) !== "string") throw 'Not a valid input';
  let code = input.toLowerCase();
  for(let i = 0; i < code.length; i++){
    let inputChar = code[i]
    let alphaIndex = alpha.indexOf(inputChar); //search returns a number
    //console.log("search index", alphaIndex)
    if (alphaIndex === -1){
      result += inputChar;
      continue;
    }
    if(encode === true) {
      alphaIndex += shift //shifts 3 places to the right
    }else {
      alphaIndex -= shift //if decode is needed shift 3 places to left
    }
    if (alphaIndex < 0){
      alphaIndex += alpha.length
    }
    if(alphaIndex >= alpha.length) alphaIndex -= alpha.length

//console.log("shifted index", alphaIndex);
result += alpha[alphaIndex]
    // for(let j = 0; j < alpha.length; j++){
    // if(code[i] === alpha[j]){
    //   return shift
    }
    return result;
  }catch (err) {
    console.log(err)
  }
};
    
return {
    caesar,
  };
})();

console.log(caesarModule.caesar("a A . ?", 3,))

module.exports = { caesar: caesarModule.caesar };

//---Function--- Ceasar function("message", number, boolean)
//if positive number shift to the right - else shift left
//.toLowercase () for capital letters
// const alphabetInput = [abcdefghijklmnopqrstuvwxyz];
//use for loop to iterate through alphabet



