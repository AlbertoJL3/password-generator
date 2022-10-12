// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passwordLength = window.prompt("Please choose a password length (8-128 characters): ");

// Need a variable to store the user's choice for whether to use each character set
var useUpper = window.confirm("Would you like to use Upper Case Characters? (yes/no)");
console.log(useUpper);
var useLower = window.confirm("Would you like to use Lower Case Characters? (yes/no)");
var useNumbers = window.confirm("Would you like to use numbers? (yes/no)");
var useCharacters = window.confirm("Would you like to use Special Characters? (yes/no)");

if (+passwordLength > 128) {
  alert("Your password is too long!");
}
else if (+passwordLength < 8) {
  alert("Your password is too short!")
}

var UppercaseVariables = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var LowercaseVariables = ["abcdefghijklmnopqrstuvwxyz"];
var NumberVariables = [1234567890];
var SpecialCharacters = ["!@#$%^&*()_+"];




if (useUpper == undefined && useLower == undefined && useNumber == undefined && useCharacters == undefined) {
  window.alert("Invalid combination! Password filters empty!")
}

// declare all characters
var characters = '';
if (useUpper === true) {
  var characters = characters + UppercaseVariables;
}
else {
  var characters = '';
}
if (useLower === true) {
  var characters = characters + LowercaseVariables;
}
if (useNumbers === true) {
  var characters = characters + NumberVariables;
}
if (useCharacters === true) {
  var characters = characters + SpecialCharacters;
}



function generatePassword(length) {
  let result = '';
  var charactersLength = characters.length;
  for (let i = 0; i < passwordLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

var password = generatePassword(+passwordLength);


// try adding button functionality
// onOff = true;
// function toggle(button) {
//   if (document.getElementById("1").value == "false" && onOff == false) {
// document.getElementById("1").value = "True"
// onOff = true;
//   }
//   else if (document.getElementById("1").value == "True" && onOff == true) {
//     document.getElementById("1").value = "False"
//     onOff = false;
//   }
// }
console.log(password); 