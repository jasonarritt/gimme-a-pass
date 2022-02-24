// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var generatePassword = function() {
  //Collect input from user
  //Collect desired number of characters
   var numChars = window.prompt("How many characters would you like your password to be? (8-128)");
  if (numChars >= 8 && numChars <= 128) {
    console.log("That is a valid number of characters.");
  } else {
    window.alert("Please enter a value of no less than 8 and no more than 128 characters.");
    generatePassword();
  }
  
  //Ask if they would like letters or not
  var letterConfirm = window.confirm("Would you like the password to contain letters?");
  //If they would like letters confirm uppercase/lowercase
  if (letterConfirm) {
    //Check about uppercase letters
    var uppercaseConfirm = window.confirm("Would you like to include uppercase letters in your password?");
    //Check about lowercase letters
    var lowercaseConfirm = window.confirm("Would you like to include lowercase letters in your password?");
  }

}

generatePassword();

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
