// Global Variables
var generateBtn = document.querySelector("#generate");
// Character Bank - This is where the for loop will pick from to generate password characters, if you want to add more/less special characters for example, just edit the string value.
var UppercaseVariables = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var LowercaseVariables = ["abcdefghijklmnopqrstuvwxyz"];
var NumberVariables = [1234567890];
var SpecialCharacters = ["!@#$%^&*()_+"];



//This function will prompt the user to input a password length, then it will verify that it is within lenght parameters, if it fails the length parameter validation it will re-run the function until the parameter is satisfied. 

function writePassword() {
  var passwordLength = window.prompt("Please choose a password length (8-128 characters): ");

  if (+passwordLength > 128) {
    alert("Your password is too long!");
    writePassword()
  }
  else if (+passwordLength < 8) {
    alert("Your password is too short!")
    writePassword()
  }
  var password = generatePassword(passwordLength);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Event listener to generate button - runs writepassword function every time you click on the generate button.
generateBtn.addEventListener("click", writePassword);

//This function will ask for which character type you want to use in the password. It also validates that the 
function generatePassword(passwordLength) {

  var useUpper = window.confirm("Would you like to use Upper Case Characters? (yes/no)");
  var useLower = window.confirm("Would you like to use Lower Case Characters? (yes/no)");
  var useNumbers = window.confirm("Would you like to use numbers? (yes/no)");
  var useCharacters = window.confirm("Would you like to use Special Characters? (yes/no)");
  let result = '';

  if (useUpper == false && useLower == false && useNumbers == false && useCharacters == false) {
    window.alert("Invalid combination! Password filters empty!")
    writePassword()
  }

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
