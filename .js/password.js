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
    let promptMessage = "Write the type of characters you want to include in your generated password:\n";
    promptMessage += `1 - Capslock letters -------- [${includeCaps ? 'ACTIVATED' : 'DEACTIVATED'}]\n`;
    promptMessage += `2 - Letters ----------------- [${includeLetters ? 'ACTIVATED' : 'DEACTIVATED'}]\n`;
    promptMessage += `3 - Numbers ----------------- [${includeNumbers ? 'ACTIVATED' : 'DEACTIVATED'}]\n`;
    promptMessage += `4 - Especials Characters ---- [${includeEspecial ? 'ACTIVATED' : 'DEACTIVATED'}]\n`;
    promptMessage += "Enter numbers to toggle options (e.g., '13' to activate Caps and Numbers), then 'P' to proceed or '0' to close! --> ";
    rl.setPrompt(promptMessage);
    rl.prompt();
}

console.clear();
updatePrompt();
rl.on('line', (input) => {
    if(isNaN(input)){
        console.log("Invalid number!\n");
        rl.prompt();
    } else if (input == 'P'){
        rl.question("\nEnter the length you want for your password: ", (lengthInput) => {
            if(isNaN(lengthInput) || lengthInput < 1){
                console.log("Invalid length! Try again!");
                updatePrompt();
            }

            let password = '';
            let availableCharacters = '';
            if (includeLetters) availableCharacters += characters;
            if (includeCaps) availableCharacters += capsCharacters;
            if (includeNumbers) availableCharacters += numbers;
            if (includeEspecial) availableCharacters += especialCharacters;

            if (availableCharacters.length === 0) {
                console.log("No characters selected, it is not possible to generate a password!");
                rl.prompt();
                return;
            }
            console.log(`\nYour generated password is: ${password}\n`);
            updatePrompt();
        })
    } else {
        let validToggle = false;
        switch(input){
                case 0:
                    rl.close();
                    break;
                case 1:
                    includeCaps = false;
                    validToggle = true;
                    updatePrompt()
                    break;
                case 2:
                    includeLetters = !includeLetters;
                    validToggle = true;
                    break;
                case 3:
                    includeNumbers = !includeNumbers;
                    validToggle = true;
                    break;
                case 4:
                    includeEspecial = !includeNumbers;
                    validToggle = true;
                    break;
                default:
                    break;
            }
        if (!validToggle && input !== 'P' && input !== '0') {
            console.log("Invalid input! Enter numbers to toggle options, 'G' to generate or '0' to close the program.");
        }
        updatePrompt();
    }
})
