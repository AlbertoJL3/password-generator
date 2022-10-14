// Assignment Code
var generateBtn = document.querySelector("#generate");

var UppercaseVariables = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var LowercaseVariables = ["abcdefghijklmnopqrstuvwxyz"];
var NumberVariables = [1234567890];
var SpecialCharacters = ["!@#$%^&*()_+"];


// Write password to the #password input

function writePassword() {
  var passwordLength = window.prompt("Please choose a password length (8-128 characters): ");
  var password = generatePassword(passwordLength);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  if (useUpper == undefined && useLower == undefined && useNumber == undefined && useCharacters == undefined) {
    window.alert("Invalid combination! Password filters empty!")
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(passwordLength) {

  var useUpper = window.confirm("Would you like to use Upper Case Characters? (yes/no)");
  var useLower = window.confirm("Would you like to use Lower Case Characters? (yes/no)");
  var useNumbers = window.confirm("Would you like to use numbers? (yes/no)");
  var useCharacters = window.confirm("Would you like to use Special Characters? (yes/no)");
  let result = '';

  var characters = '';
  var charactersLength = characters.length;

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

  

  for (let i = 0; i < passwordLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    var charactersLength = characters.length + i;
  }

  if (+passwordLength > 128) {
    alert("Your password is too long!");
  }
  else if (+passwordLength < 8) {
    alert("Your password is too short!")
  }
  return result; 
}
console.log(password);

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
