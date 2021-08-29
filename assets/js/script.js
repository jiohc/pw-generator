var generateBtn = document.querySelector("#generate");

// Assignment code here

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numbers = "0123456789";
var symbols = "~!@#$%^&*()_-`=+[]{}|;':,./<>?";


var confirmUppercase;
var confirmLowercase;
var confirmNumbers;
var confirmSymbols;
  
// function to generate password
function generatePassword() {
    var confirmCharLength = "";

      window.alert("Enter criteria from the following selections.");

      //criteria prompt for character length
    var confirmCharLength = prompt("How many characters would you like your password to be? (8-128 characters)");
  
      //return function to beginning if invalid selection
  if (confirmCharLength < 8 || confirmCharLength > 128) {
      confirmCharLength = window.alert("Invalid selection. Please try again.") 
    return ""; 
  } 

      //prompts for password criteria
    var confirmUppercase = window.confirm("Would you like to use uppercase letters?");
    var confirmLowercase = window.confirm("Would you like to use lowercase letters?");
    var confirmNumbers = window.confirm("Would you like to use numbers?");
    var confirmSymbols = window.confirm("Would you like to use symbols?");
  
    
      //if no criteria is chosen, return to beginning
  if (confirmUppercase === false && confirmLowercase === false && confirmNumbers === false && confirmSymbols === false) {
      window.alert("You must select at least one character type! Please try again.");
    return "";
  }

      //password generation based off criteria selection
  var passwordChar = "";
  
  var randomizedPassword = "";

  if (confirmUppercase) {
    passwordChar += (uppercase)
  }

  if (confirmLowercase) {
    passwordChar += (lowercase)
  }

  if (confirmNumbers) {
    passwordChar += (numbers)
  }

  if (confirmSymbols) {
    passwordChar += (symbols)
  }


console.log("this is passwordChar", passwordChar);

  for (var i = 0; i < confirmCharLength; i++) {
    randomizedPassword += passwordChar[getRandom(passwordChar)];
  }

  return randomizedPassword;

}
//helper function 
  function getRandom(pwList) {
    var randomSlot = Math.floor(Math.random() * pwList.length);
    return randomSlot;
  }


// Write password to the #password input
  function writePassword() {

    var password = generatePassword();

    var passwordText = document.getElementById("password");
    passwordText.value = password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

