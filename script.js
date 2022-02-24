// Assignment Code




// function getLetters() {
//   //Ask if they would like letters or not
//   var letterConfirm = window.confirm("Would you like the password to contain letters?");
//   //If they would like letters confirm uppercase/lowercase
//   if (letterConfirm) {
//     //Check about uppercase letters
//     var uppercaseConfirm = window.confirm("Would you like to include uppercase letters in your password?");
//     //Check about lowercase letters
//     var lowercaseConfirm = window.confirm("Would you like to include lowercase letters in your password?");
//   }
// }




var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//Collect input from user
//Collect desired number of characters
function getNumChars() {
  numChars = window.prompt("How many characters would you like your password to be? (8-128)");
  if (numChars >= 8 && numChars <= 128) {
    console.log("That is a valid number of characters.");
  } else {
    window.alert("Please enter a value of no less than 8 and no more than 128 characters.");
    getNumChars();
  };
  console.log("You have chosen " + numChars + " characters for your password.");
  return numChars;
};

//Ask if uppercase letters are wanted
function wantUppercase() {
  uppercaseConfirm = window.confirm("Would you like to include uppercase letters in your password?");
  console.log("You have set uppercase letters to " + uppercaseConfirm);
  return uppercaseConfirm;
}

//Ask if lowercase letters are wanted
function wantLowercase() {
  lowercaseConfirm = window.confirm("Would you like to include lowercase letters in your password?");
  console.log("You have set lowercase letters to " + lowercaseConfirm);
  return lowercaseConfirm;
}

//Ask if number are wanted
function wantNums() {
  numConfirm = window.confirm("Would you like to include numbers in your password?");
  console.log("You have set numbers included to " + numConfirm);
  return numConfirm;
}

//Ask if symbols are wanted
function wantSymbols() {
  symConfirm = window.confirm("Would you like to include symbols in your password?");
  console.log("You have set symbols included to " + symConfirm);
  return symConfirm;
}

//Generate password
function generatePassword() {
  //Collect inputs
  const numChars = getNumChars();
  const uppercaseConfirm = wantUppercase();
  const lowercaseConfirm = wantLowercase();
  const numConfirm = wantNums();
  const symConfirm = wantSymbols();


  //Test return of inputs
  console.log(numChars, uppercaseConfirm, lowercaseConfirm, numConfirm, symConfirm);


  //Take inputs and generate password
}

generatePassword();

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
