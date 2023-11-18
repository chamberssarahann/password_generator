// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";
const upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericStr = "0123456789";
const specialStr = "!\"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~";

  // let tempPassword = '';
  // let selectionStr = '';
  let generatePassword = "";

  let length = prompt("Please choose a password length between 8 and 128 characters");    // return string
  if (length < 8 || length > 128) {
    window.prompt("Invalid selection. Please choose a password length between 8 and 128 characters")
  } 
  let isLower = confirm("Would you like to include lowercase letters? Press 'Ok' for yes, and 'Cancel' for no");       // return true or false
  if (isLower === true) {
    console.log("Lower is true")
  }
  else {
    console.log("Lower is false")
  }
  let isUpper = confirm("Would you like to include uppercase letters? Press 'Ok' for yes, and 'Cancel' for no");       // return true or false
  if (isUpper === true) {
    console.log("Upper is true")
  }
  else {
    console.log("Upper is false")
  }
  let isNumber = confirm("Would you like to include numbers? Press 'Ok' for yes, and 'Cancel' for no");     // return true or false
  if (isNumber === true) {
    console.log("Number is true")
  }
  else {
    console.log("Number is false")
  }
  let isSpecial = confirm("And finally, would you like to include special characters? Press 'Ok' for yes, and 'Cancel' for no");   // return true or false
  if (isSpecial === true) {
    console.log("Special is true")
  }
  else {
    console.log("Special is false")
  }



  // let userInput = {}
  // function getUserInput() {
  //   userInput.length = prompt("Choose a password length between 8 and 128 characters");
  //     if (length < 8 || length > 128) {
  //   window.prompt("Invalid selection. Please choose a password length between 8 and 128 characters")
  // } 
  //   userInput.lower = confirm("Would you like to include lowercase letters? Press 'Ok' for yes, and 'Cancel for no");
  //   userInput.upper = confirm("Would you like to include uppercase letters? Press 'Ok' for yes, and 'Cancel for no");
  //   userInput.number = confirm("Would you like to include numbers as well? Press 'Ok' for yes, and 'Cancel for no");
  //   userInput.special = confirm("And finally, would you like to include special characters? Press 'Ok' for yes, and 'Cancel for no");
  // }
  //   console.log(generatePassword)

  //   function generatePassword() {
  //     if (userInput.lower === true) {
  //       console.log("Lowercase is true")
  //     } 
  //   }


  
  // selectionStr += lowerCaseStr;

  // for (let i = 0; i < length; i++) {}


  // return password;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
