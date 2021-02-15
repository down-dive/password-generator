// Assignment code here
/* GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria */

passwordVariations = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  noLowerCase:"",
  upperCase: "ABCDEFGHIGKLMNOPQRSTUVQXYZ",
  noUpperCase:"",
  numbers: "123456789",
  noNumbers: "",
  specialCharacters: "!@#$%^&*()_+=-",
  noSpecialCharacters: ""
}
var LowerCase = "1";
var UpperCase = "2";
var Numbers = "3";
var SpecialCharacters = "4";
var promptLenght = "";

// I choose lowercase, uppercase, numeric, and/or special characters
var promptCase1 = function() {
   LowerCase = window.confirm("Would you like your password to include lower case characters?");
  if (LowerCase) {
    LowerCase = passwordVariations.lowerCase;
    return promptCase2();
  } else {
     LowerCase = passwordVariations.noLowerCase;
     return promptCase2();
  }
}


var promptCase2 = function() {
   UpperCase = window.confirm("Would you like your password to include upper case characters?");
  if (UpperCase) {
    UpperCase = passwordVariations["upperCase"];
    return promptCase3()
    
  } else {
     UpperCase = passwordVariations["noUpperCase"];
     return promptCase3()
  }
}

var promptCase3 = function() {
   Numbers = window.confirm("Would you like your password to include numbers?");
  if (Numbers) {
    Numbers = passwordVariations["numbers"];
     return promptCase4()
    
  } else {
     Numbers = passwordVariations["noNumbers"];
      return promptCase4()
  }
}

var promptCase4 = function() {
  SpecialCharacters = window.confirm("Would you like your password to include special characters?");
  if (SpecialCharacters) {
    SpecialCharacters = passwordVariations["specialCharacters"];
    
  } else {
     SpecialCharacters= passwordVariations["noSpecialCharacters"];
     return Nocharacters();
  }
}
// the end of character selection

// my input should be validated and at least one character type should be selected
var Nocharacters = function() {
  if ( LowerCase === passwordVariations["noLowerCase"] || UpperCase === passwordVariations["noUpperCase"] || Numbers === passwordVariations["noNumbers"] || SpecialCharacters === passwordVariations["noSpecialCharacters"]) {
    window.alert("You have to select at least one character type for your password!");
    return promptCase1()
  } else {
    return password();
  }
}

// the password is either displayed in an alert or written to the page

// I choose a length of at least 8 characters and no more than 128 characters
var LenghtOfPassword = function() {
  promptLenght = window.prompt("How many characters would you like your password to have?");
  if (promptLenght < 8) {
    window.alert("Your password should have at least 8 characters")
    return LenghtOfPassword();
  } else if (promptLenght > 128) {
    window.alert("Your password should have less than 128 characters")
    return LenghtOfPassword();
  } else {
    promptCase1()
    console.log(LowerCase)
    console.log(UpperCase)
  }
}
console.log(promptLenght)


// a password is generated that matches the selected criteria
var password = function() {
  var text = ""
  var allCharacters = LowerCase + UpperCase + Numbers + SpecialCharacters;
for (var i = 0 ;i < LenghtOfPassword(); i++) 
text += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));

return text

}
console.log(password());

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
