// Assignment Code
var generateBtn = document.querySelector("#generate");

// event listener to start prompts and then generate password
generateBtn.addEventListener("click", writePassword);

function generatePassword () {

  var newpass = [];
  var posspass = [];
  var lowerchars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperchars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numbers = ["1","2","3","4","5","6","7","8","9","0"];
  var specialchars = ["~"," ","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}",";","'",":",".","|",",","/","<",">","?"];

  var generate = confirm("Would you like to generate a password?");

  if (generate) {
    // 1. prompt for length - a least 8 chars and <= 128
    var inputlength = prompt("Please input your password length between 8 and 128","8");

    // if lengths not between 8-128, give error message and repeat

    while (inputlength < 8 || inputlength > 128) {
      alert("Error, you put a length not between 8 and 128. Please try again.");
      inputlength = prompt("Please input your password length between 8 and 128","8");
    }

    inputlength = parseInt(inputlength);

    // 2. asked for char types - lower, uppercase, numeric, and/or special
    var lowerCase = confirm("Would you like lowercase characters?");
    var upperCase = confirm("Would you like uppercase characters?");
    var numeric = confirm("Would you like numeric characters?");
    var special = confirm("Would you like special characters?");

    // if none are selected, give error message and repeat until something is selected
    while (lowerCase === false && upperCase === false && numeric === false && special === false) {
      alert("Error, you didn't select any character types. At least 1 character must be selected.");
      lowerCase = confirm("Would you like lowercase characters?");
      upperCase = confirm("Would you like uppercase characters?");
      numeric = confirm("Would you like numeric characters?");
      special = confirm("Would you like special characters?");
    }
  }

  // input characters array into posspass array
  if (lowerCase) {
    posspass = posspass.concat(lowerchars);
  }
  if (upperCase) {
    posspass = posspass.concat(upperchars);
  }
  if (numeric) {
    posspass = posspass.concat(numbers);
  }
  if  (special) {
    posspass = posspass.concat(specialchars);
  }
  
  console.log(posspass);

  for (i = 0; i < inputlength; i++) {
    indexrandom = Math.floor(Math.random()*posspass.length);
    newpass[i] = posspass[indexrandom];
  }

  return newpass.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
