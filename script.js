// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";
const upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericStr = "0123456789";
const specialStr = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// function generatePassword() {
//   let tempPassword = '';
//   let selectionStr = '';

//   let length = prompt('length: ');    // return string
//   // if (passwordLength < 8 || passwordLength > 128) {
//   //   window.prompt("Please choose a length between 8 and 128")
//   // } 
//   let isLower = confirm("lower");       // return true or false
//   let isUpper = confirm("upper");       // return true or false
//   let isNumber = confirm("number");     // return true or false
//   let isSpecial = confirm("special");   // return true or false

  let userInput = {}
  function getUserInput() {
    userInput.length = prompt("length");
    userInput.lower = confirm("lower");
    userInput.upper = confirm("upper");
    userInput.number = confirm("number");
    userInput.special = confirm("special");
  }
    console.log(result)

  // function generatePassword() {

  
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
