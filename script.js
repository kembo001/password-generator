// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharsAllowed
var numbersAllowed
var lowercaseAllowed
var uppercaseAllowed
var numberOfCharacters
var randomSpecial
var randomNumbers
var randomlowerCase
var characterSet 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var submit = document.getElementById(generate)
generate.addEventListener ("click", () => {
numberOfCharacters = window.prompt ("How many characters do you want in your password? (8-50)");
 specialCharsAllowed = window.confirm ("Do you want special characters in your password?");
 numbersAllowed = window.confirm ("Do you want numbers in your password?");
 lowercaseAllowed = window.confirm ("Do you want lowercase letters in your password?");
 uppercaseAllowed = window.confirm ("Do you want uppercase letters in your password?");


numberOfCharacters = parseInt(numberOfCharacters);

})
// var result = document.querySelector
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

function generatePassword() {
  characterSet = [numberOfCharacters + randomSpecial + randomlowerCase + randomUpperCase]
  var result = "";
  for ( var i = 0; i < numberOfCharacters; i++ ) {
}
  if (specialCharsAllowed === true){
  var randomSpecial = ["#","$","%","&","(",")","*","+","-","=","?","@"];
  randomSpecial = Math.floor(Math.random() * specialCharacters.length)
  }
if (numbersAllowed===true){
}
  lowercaseAllowed = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  randomlowerCase = Math.floor(Math.random() * lowerCase.length);

  uppercaseAllowed = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  randomUpperCase = Math.floor(Math.random() * uppercaseAllowed.length);  
  
  { password = characterSet
 }
 return result;
}







