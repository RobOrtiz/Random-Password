var passLength = "";
var passSpecial;
var passNumeric;
var passUpper;
var passLower;

// Character Arrays 
var charnumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charspecial = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  prompt("How many characters would you like your password to contain?");
   
  if (passLength > 8 || passLength < 128) {
    alert(`Your password will have ${passLength} characters`);
  } else alert("Password length must be between 8-128 characters. Try again");
};   
    

// Confirm character types
passLower = confirm("Would you like to use lowercase letters?");
passUpper = confirm("Would you like to use uppercase letter?");
passSpecial = confirm("Would you like to use special characters?");
passNumeric = confirm("Would you like to use numeric characters?");    

while (passUpper === false && passLower === false && passSpecial === false && passNumeric === false) {
    alert("You must choose at least one parameter");
    passLower = confirm("Would you like to use lowercase letters?");
    passUpper = confirm("Would you like to use uppercase letter?");
    passSpecial = confirm("Would you like to use special characters?");
    passNumeric = confirm("Would you like to use numeric characters?");  
} 
 
var passwordCharacters = []

if (passLower) {
  passwordCharacters = passwordCharacters.concat(charLower)
}

if (passUpper) {
  passwordCharacters = passwordCharacters.concat(charUpper)
}      
if (passSpecial) {
  passwordCharacters = passwordCharacters.concat(charSpecial)
}

if (passNumeric) {
  passwordCharacters = passwordCharacters.concat(charNumber)
}
  
console.log(passwordCharacters);

var randomPassword = "";
      
  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

