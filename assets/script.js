// Assignment code here

// Variables declared.
    var charUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var charLowerercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var charNumeric = ['0', '1', '2', '3', '4', '5', '6' ,'7', '8', '9'];
    var charSpecial = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '~', '[', ']', '{', '}', '/', '<', '>',];


//
function generatePassword(){

}
//
if (charLength < 8 || charLength > 128){
  window.alert("Password must be at least 8 characters and no more than 128 characters. Please try again.");
}
else if (charLength >= 8 && charLength <= 128) {
    return password;
}





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);