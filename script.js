// Assignment Code

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
  //Declare variables
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*_+"

  var password = "";

  var availableChars = "";
  var numAvailableChars = 0;

  //Collect inputs
  const numChars = getNumChars();
  const uppercaseConfirm = wantUppercase();
  const lowercaseConfirm = wantLowercase();
  const numConfirm = wantNums();
  const symConfirm = wantSymbols();

  //Test return of inputs
  console.log("The values you have set are: " + numChars, uppercaseConfirm, lowercaseConfirm, numConfirm, symConfirm);

  //Determine set of available characters and sum
  if (uppercaseConfirm) availableChars += uppercaseLetters , numAvailableChars += 26;
  if (lowercaseConfirm) availableChars += lowercaseLetters , numAvailableChars += 26;
  if (numConfirm) availableChars += numbers , numAvailableChars += 10;
  if (symConfirm) availableChars += symbols , numAvailableChars += 12;

  //Inform of available characters and sum
  console.log("The available characters chosen are: " + availableChars);
  console.log("The number of available characters is: " + numAvailableChars);

  //Take inputs and generate password
  for (i = 0; i < numChars; i++) {
    password += availableChars.charAt(Math.floor(Math.random() * numAvailableChars));
  }
 
  console.log(password);

  //Return password to user
  return password;
}

writePassword();

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
