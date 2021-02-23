var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let passwordLength = parseInt(
    prompt("How many characters would you like your password to be?")
  );

  //if statement whether or not it is empty password length
  //alert if null/empty needs to be a number or whatever the variable is -- isNaN

  if (passwordLength == "") {
    alert("Password length cannot be left blank.");
  }
  //  alert if its less than eight. needs to be 8+ characters min
  if (passwordLength >= 8) {
    alert("Password length must be longer than 8 characters.");
  }
  // alert for more than 128 characters
  if (passwordLength <= 128) {
    alert("Password length cannot be longer than 128 characters.");
  }
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789";
  const specialCharacters = "!@#$%^&*`(``)`-,=";

  var hasLower = confirm("Click okay to confirm lowercase characters");
  var hasUpper = confirm("Click okay to confirm uppercase characters");
  var hasSpecial = confirm("Click okay to confirm special characters");
  var hasNumeric = confirm("Click okay to confirm numeric characters");

  //next conditional statements. must alert people to select at least one character type.

  //then create an object to store user input
  //
  var passwordOption = {
    passwordLength: passwordLength,
  };
  // times three more times matching variables created above.

  //then return password option which is the one that stores everything.
  return passwordOption;
}
