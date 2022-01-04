// Assignment Code
var generateBtn = document.querySelector("#generate");

// generator numbers/symbols/letters
var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

function generatePassword(){
  // window prompt for uppercase letter
// passwordLength= 1-128
// window.prompt("Uppercase Letters?")

// window.prompt("Lowercase Letters")

// window.prompt("numbers?")

// window.prompt("symbols?")




// for (var i = 0; i <= passwordLength; i++) {
//     var randomNumber = Math.floor(Math.random() * chars.length);
//     password += chars.substring(randomNumber, randomNumber +1);
//    }

//first prompt should ask the length of password. min 8 max 128 characters

var passwordLength= parseInt(prompt("what length should your password be?"))

if(Number.isNaN(passwordLength)){
  alert("This must be a number")
  return null;
}

if(passwordLength<8){
alert("Min of 8 characters");
return null;
}
if(passwordLength>128){
alert("Max of 128 characters")
return null;
}

var uppercase= confirm("Uppercase characters?")

var lowercase= confirm("Lowercase characters?")
var numbers=
var symbols=

//once the user confirms what they want in their password then push all the available characters into an empty array

//create a forloop that pushes into a final array using the random function . 

//return the joined array...look at .join('')

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

