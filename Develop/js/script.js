// Assignment code here
/* GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria */





// I choose lowercase, uppercase, numeric, and/or special characters
var promptCase = function(){
  var lowerCase = window.confirm("Would you like your password to include lower case characters?");
  if (lowerCase) {
    promptCase = ["abcdefghijklmnopqrstuvwxyz"]
  } else {
    upperCase
  }
}

// GIVEN I need a new, secure password

// my input should be validated and at least one character type should be selected

// a password is generated that matches the selected criteria
// for (var i = 0; i < 5; i++) i should be equial to promptLenght
// text += possible.charAt(Math.floor(Math.random() * possible.length));

// return text;

// the password is either displayed in an alert or written to the page

// I choose a length of at least 8 characters and no more than 128 characters

var LenghtOfPassword = function() {
  var promptLenght = window.prompt("How many characters would you like your password to have?");
  if (promptLenght < 8) {
    window.alert("Your password should have at lease 8 characters!")
    return LenghtOfPassword();
  } else if (promptLenght > 128) {
    window.alert("Your password shout have less than 128 characters!")
    return LenghtOfPassword();
  } else {
    promptCase()
  }
}

// function for prompt to gererate code or not
var generateOrNot = function() {
  //ask user if they'd like to gererante new password
  var promptGenerate = window.confirm("Hello! Welcome to Password Generator Page! Would you like to create a new password?");

  if (promptGenerate) {
    LenghtOfPassword();
} else {
  window.alert("You do not wish to proceed. Have a nice day!")
}

};
generateOrNot();







/* 
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page */



































































// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
