// Assignment code here
var validationFailed = true;
  var range;
  var numbers;
  var lowercase;
  var uppercase;
  var characters;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("write password")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  
  do{
    var prompt = window.prompt('Enter the length of password (8-128)');
    range = Number.parseInt(prompt);
    if(isNaN(range)){
      window.alert("please enter a number")
    }
    else{
      console.log(range);
      if(range >  7 && range < 129){
        console.log(range);
        validationFailed = false;
      }
      else{
        window.alert("please enter within the numbers specified")
      }
    }
    
  }while(validationFailed)
  validationFailed = true;

  do{
    numbers = window.confirm('Do you want numbers?')
    lowercase = window.confirm('Do you want lowercase letters?')
    uppercase = window.confirm('Do you want upppercase letters?')
    characters = window.confirm('Do you want special characters?')
    if(numbers || lowercase || uppercase || characters){
      validationFailed = false;
    }
    else{
      validationFailed = true;
      window.alert("please select at least 1 character set")
    }
  } while(validationFailed);

  return makePassword(range, characters, numbers, lowercase, uppercase);
}

function makePassword(length, usecharacters, useNumbers, useLowercase, useUppercase){
  let password = "";
  var charset = "";
  if(usecharacters === true){
    charset += "!@#$%^&*()_+";
  }
  if(useUppercase === true){
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if(useLowercase === true){
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if(useNumbers === true){
    charset += "0123456789";
  }
  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
