//ask user question set variables as confirms
//save user answers asign to variables
//a way to see possible character using iff statements
//add acceptable characters to password options
//generate a random password for loop with random number

  lowerCase = "abcdefghijklmnopqrstuvwxyz"
  upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  specialCharacters = ["!", "@", "#", "$", "%^", "&", "*", "(", ")", "_", "+", "=", "-"];

  var LenghtOfPassword = function () {
    promptLenght = prompt("How many characters would you like your password to have?")
    if (promptLenght < 8) {
      window.alert("Your password should have at least 8 characters")
      return LenghtOfPassword();
    } else if (promptLenght > 128) {
      window.alert("Your password should have less than 128 characters")
      return LenghtOfPassword();
    } else {
      return promptLenght;
    }
  }
var passwordLength = LenghtOfPassword()


var LowerCaseQ = confirm("Do you want to include lower case letters")
var UpperCaseQ = confirm("Do you want Upper case letters")
var NumbersQ = confirm("Do you want to include numbers?")
var SpecialCharactersQ = confirm("Do you want to include special characters?")
var passOption = [];



if (LowerCaseQ == true) {
  passOption+= lowerCase;
};

if (UpperCaseQ == true) {
  passOption+= upperCase;
} ;

if (NumbersQ == true) {
  passOption+= numbers
};

if (SpecialCharactersQ == true) {
  passOption+= specialCharacters
};



function passwords() {
  var text = "";
  var allCharacters = passOption;

  for (var i = 0; i < passwordLength; i++)
    text += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));

  return text;
}

// alert("Your password: " + password());



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = passwords();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
