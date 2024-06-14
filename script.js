document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById("submit");
    button.addEventListener("click", generate);

function generate(){
    const passcodeasscode = document.getElementById("Passcode")
    const button = document.getElementById("submit");

 button.innerText = "Generating..."
 setTimeout(function(){
    const password = generatePassword(12, true, true, true, true)
    Passcode.value = password;
    button.innerText = "Genereted"
    console.log(`generated password: ${password}`);
 }, 3000);
}

function generatePassword(length, includeLowerCase, includeUpperCase, includeNumber, includeSymbols) {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let allCharacters = '';
    if (includeLowerCase) allCharacters += lowerCase;
    if (includeUpperCase) allCharacters += upperCase;
    if (includeNumber) allCharacters += numbers;
    if (includeSymbols) allCharacters += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }
    return password;
}

// function generatePassword( length,ncludeLowerCase, includeUpperCase, includeNumber, includeSymbols){
  
    

//     return  "";
// }
      



//     const passwordLength = 12;
//     const includeLowerCase = true;
//     const includeUpperCase = true;
//     const includeNumber = true;
//     const includeSymbols = true;

//     const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumber, includeSymbols)
//     function generate(){
//         passcode.textContent =` ${password}`
//         console.log(`generte password ${password}`)

//     }

  
})
