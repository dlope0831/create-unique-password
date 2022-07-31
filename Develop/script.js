const allUpper =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const allLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const allNum = [1,2,3,4,5,6,7,8,9,10];
const allSpecial = ["!","#","$","%","&","*","+"];

var howManyCharacters = parseInt(prompt("How many characters"));
var uppercaseYN = confirm("Do you want uppercase?");
var lowercaseYN = confirm("Do you want lowercase?");
var numbersYN = confirm("Do you want numbers?");
var specialYN = confirm("Do you want special character?");

var generatedPassword = [];
var allPossibleCharacters = [];

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

// This is where we actually go and get the characters for the password
for (var i = 0; i < howManyCharacters; i++){
    let randomNum = Math.floor(Math.random() * allPossibleCharacters.length);

    generatedPassword.push(allPossibleCharacters[randomNum]);

};

// We use join to turn the array into a string
// Whatevers in the join() is what is between the parts of the array
// So like, if we did ["a","b","z"].join("***"), it would give you "a***b***z"
// We put nothing in there so it combines without separating: "abz"
var stringPassword = generatedPassword.join("");
function stringPassword() {

}

console.log(stringPassword);