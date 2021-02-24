//setting password characters
const lowerCases = "abcdefghijklmnopqrstuvwxyz";
const upperCases = lowerCases.toUpperCase();
const specialCharacters = `!@#$%^&*()_+-=`;
const numerics = "0123456789";

const getRandom = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const getRandomCharacter = (options) => {
  let char = "";
  do {
    const choice = getRandom(4);
    if (options.hasLower && choice == 0) {
      // lower case
      char = lowerCases.charAt(getRandom(lowerCases.length));
    } else if (options.hasUpper && choice == 1) {
      // upper case
      char = upperCases.charAt(getRandom(upperCases.length));
    } else if (options.hasSpecial && choice == 2) {
      // special case
      char = specialCharacters.charAt(getRandom(specialCharacters.length));
    } else if (options.hasNumeric && choice == 3) {
      // numeric case
      char = numerics.charAt(getRandom(numerics.length));
    }
  } while (char.length === 0);
  return char;
};
// password function
const generatePassword = () => {
  const length = prompt("How long should the password be?");

  if (length < 8 || length > 128 || length === "") {
    alert(
      "Invalid length: Length must be greater than 7 or less than 129 characters."
    );
    return "";
  }
  // password options confirms to user
  const hasLower = confirm("Should it contain lower case characters?");
  const hasUpper = confirm("Should it contain upper case characters?");
  const hasSpecial = confirm("Should it contain special characters?");
  const hasNumeric = confirm("Should it contain numeric characters?");
  const options = { length, hasLower, hasUpper, hasSpecial, hasNumeric };

  //setting a check to make sure that one of the above options was selected
  const validationCheck = hasLower || hasUpper || hasSpecial || hasNumeric;
  if (!validationCheck) {
    alert(
      "Password must include at least one of the following character types: lowercase, uppercase, special characters, numerics"
    );
    return "";
  }
  // blank password begins
  let output = "";

  for (let i = 0; i < length; ++i) {
    let char = getRandomCharacter(options);
    output += char;
  }
  //returns the final password combination after adding characters until desired amount
  return output;
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
