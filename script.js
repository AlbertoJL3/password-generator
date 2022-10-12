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


// Need a way to store the user's choice for length of password --> variable

// Prompt user for length of password
// IF the user chooses a number outside the acceptable range, need to do SOMETHING
// Alert that the validation failed?
// Return to the prompt, OR
// Exit out of the function
var passwordLength = window.prompt("Please choose a password length (6-128 characters): ");

if (+passwordLength > 128) {
  alert("Your password is too long!");
}
else if (+passwordLength < 6) {
  alert("Your password is too short!")
}

var UppercaseVariables = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var LowercaseVariables = ["abcdefghijklmnopqrstuvwxyz"];
var NumberVariables = [1234567890];
var SpecialCharacters = ["!@#$%^&*()_+"];


// Need a variable to store the user's choice for whether to use each character set
var useUpper = window.confirm("Would you like to use Upper Case Characters? (yes/no)");
console.log(useUpper);
var useLower = window.confirm("Would you like to use Lower Case Characters? (yes/no)");
var useNumbers = window.confirm("Would you like to use numbers? (yes/no)");
var useCharacters = window.confirm("Would you like to use Special Characters? (yes/no)");

if (useUpper == undefined && useLower == undefined && useNumber == undefined && useCharacters == undefined) {
  window.alert("Invalid combination! Password filters empty!")
}

// declare all characters
var characters = '';
if (useUpper === true) {
  var characters = UppercaseVariables;
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
    for ( let i = 0; i < passwordLength; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));   
    }
    return result;
}

var password = generatePassword(+passwordLength);

console.log(password);



// Genearte a mega array with each desired variable type by concatenating numbers(i)+upper(i)+lower(i)+special(i) to make a mega array and then create a for loop that randomly chooses elements from that array and iterate for password length to create a unique and random password!


// if yes for a var, then generate a lot of random variables in an array the size of the chosen characters, then if that

// IF the user fails to select any characters, need to do SOMETHING
// Alert that the validation failed?
// Return to the prompt, OR
// Exit out of the function


// Generate a random character from each chosen array
// May be some IF statements regarding which character arrays were chosen


// Generate a random array index using Math.floor(Math.random() * array.length)
// Grab the character at the randomly-generated index
// Add it to the end of the password string
// Need a variable to store the generated password
// Repeat ^ for each chosen array


// Join/concatenate the up to four selected character sets
// Iterate until password.length === the length the user chose
// Generate a random character from the mega-array and add it to the end of the password string on each loop
// Return the generated password


// const months = ["January", "February", "March", "April", "May", "June", "July"];
// make a random array for each character set, randomly add 



//const random = Math.floor(Math.random() * +passwordLength);
//console.log(random, months[random];


  //if all 4 "yes" -> randomly pull from each array, concatenate randomly and iterate for password length
  //else if 3 "yes" ->randomly pull from each of three chosen arrays, concatenate randomly and iterate for password length
  // else if 2 "yes" ->randomly pull from each of the two arrays, concatenate randomly and iterate for password length
  //else if 1 "yes" ->randomly pull from chosen array and iterate for password length.

  //display password