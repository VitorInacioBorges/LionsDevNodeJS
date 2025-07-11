const characters = 'abcdefghijklmnopqrstuvwxyz';
const capsCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '1234567890';
const especialCharacters = '!?/:;.,<>-=+_()*&¨%$#@!"^~}]{[';
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let includeCaps = true;
let includeLetters = true;
let includeNumbers = true;
let includeEspecial = true;

function updatePrompt() {
    console.clear();
    rl.setPrompt(`Write the type of characters you want to include in your generated password:
    1 - Capslock letters -------- [${includeCaps ? 'ACTIVATED' : 'DEACTIVATED'}]
    2 - Letters ----------------- [${includeLetters ? 'ACTIVATED' : 'DEACTIVATED'}]
    3 - Numbers ----------------- [${includeNumbers ? 'ACTIVATED' : 'DEACTIVATED'}]
    4 - Especials Characters ---- [${includeEspecial ? 'ACTIVATED' : 'DEACTIVATED'}]
    Enter numbers to toggle options (e.g., '13' to activate Caps and Numbers), then 'P' to proceed or '0' to close! --> `);
    rl.prompt();
}

updatePrompt();
rl.on('line', (input) => {
    input = input.trim().toUpperCase();

    if(input === '0'){
        console.clear();
        console.log("Program CLOSED!");
        rl.close();
    }
    else if (input == 'P'){
        if(!includeCaps && !includeLetters && !includeNumbers && !includeEspecial) {
            updatePrompt();
            console.log("\nYou must select at least one type of character to generate a password!");
            return;
        }
        rl.question("Enter the length you want for your password: ", (lengthInput) => {
            const length = parseInt(lengthInput);

            if(isNaN(length) || length < 1){
                updatePrompt();
                console.log("\nInvalid length! Press 'P' to proceed once more!");
                return;
            }

            let availableCharacters = '';
            if (includeLetters) availableCharacters += characters;
            if (includeCaps) availableCharacters += capsCharacters;
            if (includeNumbers) availableCharacters += numbers;
            if (includeEspecial) availableCharacters += especialCharacters;

            if (availableCharacters.length === 0) {
                console.log("No characters selected, it is not possible to generate a password!");
                updatePrompt();
                return;
            }
            
            let password = '';
            for(let i = 0; i < length; i++){
                const randomIndex = Math.floor(Math.random() * availableCharacters.length);
                password += availableCharacters[randomIndex];
            }
            updatePrompt();
            console.log(`\nYour generated password is: ${password}\n`);
        })
    }
    else if (/^[1-4]+$/.test(input)) {
        for (let i = 0; i < input.length; i++) {
            switch(input[i]) {
                case '1': includeCaps = !includeCaps; break;
                case '2': includeLetters = !includeLetters; break;
                case '3': includeNumbers = !includeNumbers; break;
                case '4': includeEspecial = !includeEspecial; break;
            }
        }
        updatePrompt();
    }
    else {
        updatePrompt();
        console.log("\nInvalid input! Use numbers (1–4), 'P' to proceed, or '0' to exit.");
    }
})