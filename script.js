const allUpper =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const allLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const allNum = [1,2,3,4,5,6,7,8,9,10];
const allSpecial = ["!","#","$","%","&","*","+"];

var generatedPassword = [];
var allPossibleCharacters = [];
var stringPassword = "";


function generatePassword() {
  generatedPassword = [];
  var howManyCharacters = parseInt(prompt("How many characters"));
  if (!howManyCharacters ||howManyCharacters < 8 || howManyCharacters > 128){
    window.alert("Password should have a minimum of 8 characters and shouldn't exceed 128 characters");
    return;
  }
  var uppercaseYN = confirm("Do you want uppercase?");
  var lowercaseYN = confirm("Do you want lowercase?");
  var numbersYN = confirm("Do you want numbers?");
  var specialYN = confirm("Do you want special character?");

if (uppercaseYN){
    allPossibleCharacters = allPossibleCharacters.concat(allUpper);
}

if (lowercaseYN){
    allPossibleCharacters = allPossibleCharacters.concat(allLower);
}

if (numbersYN){
    allPossibleCharacters = allPossibleCharacters.concat(allNum);
}
if (specialYN){
  allPossibleCharacters = allPossibleCharacters.concat(allSpecial);
}

for (var i = 0; i < howManyCharacters; i++){
    let randomNum = Math.floor(Math.random() * allPossibleCharacters.length);
   
    generatedPassword.push(allPossibleCharacters[randomNum]);
    
    stringPassword = generatedPassword.join("");     

  }
};

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  generatePassword();
  var password = stringPassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
