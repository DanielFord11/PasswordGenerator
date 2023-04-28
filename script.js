// Array of special characters for password
const pass = null

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters for password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters for password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters for password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var PasswordOptions = {
  Special : specialCharacters,
  Lower : lowerCasedCharacters
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log("Password in parent function: " + password)

  passwordText.value = password;

}

function generatePassword() {
  //Creates initial lowercase chcaracter options for the funciton to use as baseline
  var InclustionList = lowerCasedCharacters;
  //Blank variables for password and character count 
  var CharacterCount = 0
  var Password = ""

  var UserCharacterCount = window.prompt("How many characters do you want? 8-128")
    //Basic exception handeling to insure valid input
    if (UserCharacterCount >= 8 && UserCharacterCount <= 128){
      //Stores User Input for Character Count
      CharacterCount = UserCharacterCount
      }else{
        console.error("Invalid Entry. Enter a number in this range 8-128")
        window.alert("Invalid Entry. Enter a number in this range 8-128");
        return;
      }
    
  var UserIncludeSpecialCharacters = window.prompt("Do you want a special character? y/n")
    //Basic exception handeling to insure valid input
    if (UserIncludeSpecialCharacters == 'y'){
      //Adds selection to included characters
      InclustionList = InclustionList.concat(specialCharacters)
    }else{
      pass
    }
  
  var UserIncludeUppercase = window.prompt("Do you want uppercase characters? y/n")
  
    if (UserIncludeUppercase == 'y'){
      //Adds selection to included characters
      InclustionList = InclustionList.concat(upperCasedCharacters)
    }else{
      pass
    }

  var UserIncludeNumeric = window.prompt("Do you want numeric characters? y/n")
  
    if (UserIncludeNumeric == 'y'){
      //Adds selection to included characters
      InclustionList = InclustionList.concat(numericCharacters)
    }else{
      pass
    }
  
  for (var i = 0;  i < CharacterCount; i++) {
      //creates random index value with the range of the included characters array
      index = Math.floor(Math.random() * InclustionList.length)
      //adds each character to the password until the set character count is reached
      Password = Password + InclustionList[index]
  }
  //sends password to the parent function
  return Password
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


