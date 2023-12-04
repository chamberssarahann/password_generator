// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";
const upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericStr = "0123456789";
const specialStr = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

const userOptions = [];

function generatePassword() {
  let finalPassword = [];

// Gathers user selections via window prompts. Includes validations to ensure selections meet requirements.

  const passwordLength = parseInt(
    window.prompt(
      "Please choose a password length between 8 and 128 characters"
    )
  );
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert(
      "Invalid selection.\nPlease choose a password length between 8 and 128 characters"
    );
    generatePassword();
  } else {
    let isLower = confirm(
      "Would you like to include lowercase letters?\nPress 'Ok' for yes, and 'Cancel' for no"
    ); // return true or false
    let isUpper = confirm(
      "Would you like to include uppercase letters?\nPress 'Ok' for yes, and 'Cancel' for no"
    ); // return true or false
    let isNumber = confirm(
      "Would you like to include numbers?\nPress 'Ok' for yes, and 'Cancel' for no"
    ); // return true or false
    let isSpecial = confirm(
      "And finally, would you like to include special characters?\nPress 'Ok' for yes, and 'Cancel' for no"
    ); // return true or false
    if (!isSpecial && !isNumber && !isUpper && !isLower) {
      generatePassword();
    } else {

// Pushes all user selections into a variable
      
      if (isLower) {
        userOptions.push(...lowerCaseStr)
      }
      if (isUpper) {
        userOptions.push(...upperCaseStr)
      }
      if (isNumber) {
        userOptions.push(...numericStr)
      }
      if (isSpecial) {
        userOptions.push(...specialStr)
      }
      console.log(userOptions)

// Creates random password from selections

for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * userOptions.length)// returns number
  var convertedIndex = userOptions[randomIndex] // inserts randomIndex as array search parameter ie userOptions[2] = "c"
  finalPassword.push(convertedIndex) // pushes the output of the array into the final password var
  console.log(finalPassword)
}

      return finalPassword.join(""); // removes commas
    }
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
