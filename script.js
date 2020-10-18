
var passSpecial;
var passNumeric;
var passUpper;
var passLower;

// Character Arrays 
var charNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charSpecial = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Assignment Code
var generateBtn = document.querySelector(".btn");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var passLength = prompt("How many characters would you like your password to contain?");

if (passLength > 8 || passLength < 128){
  confirm("Your password will be " + passLength + " charcters long");
} 
if (passLength < 8 || passLength > 128){
  alert("Length must be 8-128 characters");
  return;
} 
var passLower = confirm("Would you like to use lowercase letters?");
var passUpper = confirm("Would you like to use uppercase letter?");
var passSpecial = confirm("Would you like to use special characters?");
var passNumeric = confirm("Would you like to use numeric characters?");  
if (passUpper === false && passLower === false && passSpecial === false && passNumeric === false) {
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

// Randomly select characters according to length
var randomPassword = "";
      
  for (var i = 0; i < passLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  };

};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

