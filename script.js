// selectors 
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
// global variables
var specialCharsAllowed
var numbersAllowed
var lowercaseAllowed
var uppercaseAllowed
var numberOfCharacters
var randomSpecial = ["#","$","%","&","(",")","*","+","-","=","?","@"];
var randomUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var randomlowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var characterSet;
// functions


function generatePassword() {
  characterSet = [];
  if (specialCharsAllowed === true){
    characterSet = characterSet.concat(randomSpecial)
  };

  if(lowercaseAllowed === true) {
    characterSet = characterSet.concat(randomlowerCase)
  };
  
  if(uppercaseAllowed === true) {
    characterSet = characterSet.concat(randomUpperCase)
  };

  if(numbersAllowed === true) {
    characterSet = characterSet.concat(randomNumbers)
  }

  // console.log(randomSpecial)

  var randomizedPass = ""

  for(i=0; i<numberOfCharacters; i++){
    var randomIndex = Math.floor(Math.random() * characterSet.length)
    var randomCharacter = characterSet[randomIndex]
    randomizedPass += randomCharacter
  }

  // console.log(randomIndex)
  // console.log(randomizedPass)

  return randomizedPass
}

function writePassword() {
  var password = generatePassword();
  if(numberOfCharacters < 8 || numberOfCharacters > 50){
    alert("Please pick a number in between 8-50")
    return generatePassword()
  } else {
    passwordText.value = password;
  }


}

// var submit = document.getElementById(generate)
generateBtn.addEventListener ("click", () => {
  numberOfCharacters = window.prompt ("How many characters do you want in your password? (8-50)");
  specialCharsAllowed = window.confirm ("Do you want special characters in your password?");
  numbersAllowed = window.confirm ("Do you want numbers in your password?");
  lowercaseAllowed = window.confirm ("Do you want lowercase letters in your password?");
  uppercaseAllowed = window.confirm ("Do you want uppercase letters in your password?");

  numberOfCharacters = parseInt(numberOfCharacters);
  writePassword()
})
// execute code








// Assignment Code

// Write password to the #password input

// var result = document.querySelector
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword)

// function generatePassword() {
//   characterSet = [numberOfCharacters + randomSpecial + randomlowerCase + randomUpperCase]
//   var result = "";
//   for ( var i = 0; i < numberOfCharacters; i++ ) {
// }
//   if (specialCharsAllowed === true){
//   randomSpecial = Math.floor(Math.random() * specialCharacters.length)
//   }
// if (numbersAllowed===true){
// }
//   lowercaseAllowed = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//   randomlowerCase = Math.floor(Math.random() * lowerCase.length);

//   uppercaseAllowed = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//   randomUpperCase = Math.floor(Math.random() * uppercaseAllowed.length);  
  
//   { password = characterSet
//  }
//  return result;
// }







