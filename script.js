// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";
const upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericStr = "0123456789";
const specialStr = "!\"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~";

let userInput = {};

  // function retrieveUserInput(){
    userInput.length = number(window.prompt("Please choose a password length between 8 and 128 characters"));
      if (userInput.length < 8 || userInput.length > 128){
        window.alert("Invalid selection. \nPlease choose a password length between 8 and 128 characters");
        retrieveUserInput();
        console.log(userInput.length)
      // }
    //  let isLower = confirm("Would you like to include lowercase letters? Press 'Ok' for yes, and 'Cancel' for no");       // return true or false
    //  let isUpper = confirm("Would you like to include uppercase letters? Press 'Ok' for yes, and 'Cancel' for no");       // return true or false
    //  let isNumber = confirm("Would you like to include numbers? Press 'Ok' for yes, and 'Cancel' for no");     // return true or false
    //  let isSpecial = confirm("And finally, would you like to include special characters? Press 'Ok' for yes, and 'Cancel' for no");   // return true or false
    //  if (!isSpecial && !isNumber && !isUpper && !isLower) {
    // window.alert("Password must be comprised of at least one option (lowercase, uppercase, numbers, or special characters). Please restart and choose one.")
  }

  retrieveUserInput();
  //   let length = "";
  // let selectionStr = '';
  // let generatePassword = "";

  // userInput.length = prompt("Please choose a password length between 8 and 128 characters");    // return string
  // if (length < 8 || length > 128) {
  //   window.alert("Invalid selection. \nPlease choose a password length between 8 and 128 characters")
  //   userInput();
  // } 
  // let isLower = confirm("Would you like to include lowercase letters? Press 'Ok' for yes, and 'Cancel' for no");       // return true or false
  // let isUpper = confirm("Would you like to include uppercase letters? Press 'Ok' for yes, and 'Cancel' for no");       // return true or false
  // let isNumber = confirm("Would you like to include numbers? Press 'Ok' for yes, and 'Cancel' for no");     // return true or false
  // let isSpecial = confirm("And finally, would you like to include special characters? Press 'Ok' for yes, and 'Cancel' for no");   // return true or false
  // if (!isSpecial && !isNumber && !isUpper && !isLower) {
  //   window.alert("Password must be comprised of at least one option (lowercase, uppercase, numbers, or special characters). Please restart and choose one.")
  // }}
  // UserInput();
  // function tempPassword() {
  
  // }



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
