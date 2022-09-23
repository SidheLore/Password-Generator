// Assignment code here

// Variables declared
    var charUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var charLowerercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var charNumeric = ['0', '1', '2', '3', '4', '5', '6' ,'7', '8', '9'];
    var charSpecial = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '~', '[', ']', '{', '}', '/', '<', '>',];
    var charString = charUppercase + charLowercase + charNumeric + charSpecial;
    var charSet = var passwordSelect();
    var password="";
    var passwordLength;

//
function generatePassword(){
  
  var passwordLength = prompt("What would you like the character length of your password to be? Please enter a value between 8 and 128.");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be at least 8 characters and no more than 128 characters. Please try again.");
    return null;
  }
  else (charLength >= 8 && charLength <= 128) {
    return password;
  }

  charUppercase = confirm("Would you like to include uppercase letters");
  if (charUppercase){
    charUppercase;
  }
  else{
    charUppercase="";
  }

  charLowercase = confirm("Would you like to include lowercase letters?")
  if (charLowercase){
    charLowercase;
  }
  else{
    charLowercase="";
  }
  
  charNumeric = confirm("Would you like to include numbers?")
  if (charNumeric){
    charNumeric;
  }
  else{
    charNumeric="";
  }

  charSpecial = confirm("Would you like to include special characters?")
  if (charSpecial){
    charSpecial;
  }
  else{
    charSpecial="";
  }

  if (!charUppercase && !charLowercase && !charNumeric && !charSpecial){
    window.alert("Please choose at least one character type.");
     return;
  }

}

// Generate random password
for (var i = 0; i < charLength; i++){
  password += charSet[Math.floor(Math.random() * charSet.length)];
console.log(password);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
