// Assignment Code
var generateBtn = document.querySelector("#generate");

// generator numbers/symbols/letters
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

function generatePassword() {
  var allCharacters = [];
  var resultPassword = "";
  var confirmLength = (prompt("what length would you like your password be?"));

  if (confirmLength < 8 || confirmLength > 128) {
    alert("Please make password between 8-128 characters.")
    return;
  }

  if (confirmLength) {
    if (confirm("want uppercase?")) {
      allCharacters.push(alphaUpper);
    }
    if (confirm("want lowercase?")) {
      allCharacters.push(alphaLower);
    }
    if (confirm("want number characters?")) {
      allCharacters.push(numbers);
    }
    if (confirm("want symbolds?")) {
      allCharacters.push(symbols);
    }
    if (allCharacters.length === 0) {
      alert("Atleast one character must be selected");
      return;
    } else {
      for (var i = 0; i < confirmLength; i++) {
        var randomCharacter = Math.floor(Math.random() * allCharacters.length);
        const selectedChar = allCharacters[randomCharacter];
        var randomChar = Math.floor(Math.random() * selectedChar.length);
        resultPassword += selectedChar[randomChar];
      }
    }
  }

  document.getElementById("password").textContent= resultPassword
  return resultPassword;
}
  // if(Number.isNaN(passwordLength)){
  //   alert("This must be a number")
  //   return null;
  // }

  // if(passwordLength<8){
  // alert("Min of 8 characters");
  // return null;
  // }
  // if(passwordLength>128){
  // alert("Max of 128 characters")
  // return null;
  // }
  // Add event listener to generate button
  generateBtn.addEventListener("click", generatePassword);