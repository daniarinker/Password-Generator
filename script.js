//password characters
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = lowerCase.toUpperCase();
const specialCharacters = `!@#$%^&*()_+-=`;

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const generatePassword = () => {
  const length = prompt("How long should the password be?");
  const hasLower = confirm("Should it contain lower case characters?");
  const hasUpper = confirm("Should it contain upper case characters?");
  const hasSpecial = confirm("Should it contain special characters?");
  const hasNumeric = confirm("Should it contain numeric characters?");

  for(let i = 0; i < length; ++i) {
    
  }

  return JSON.stringify({ length, hasLower, hasUpper, hasSpecial, hasNumeric });
};

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
/////////////////////////////////////////////////////////////////////
