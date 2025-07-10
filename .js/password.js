const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!?/:;.,<>-=+_()*&¨%$#@!"^~}]{[';
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.clear();
rl.setPrompt("Write the length of the password you want to generate:\n0 to close! --> ");
rl.prompt();
rl.on('line', (input) => {
    if(isNaN(input)){
        console.log("Invalid number!\n");
        rl.prompt();
    } else if(input == 0){
        console.log("CLOSING...")
        rl.close();
    } else {
        const length = parseInt(input);
        let password = '';
        for(let i=0; i<length; i++){
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters.charAt(randomIndex);
        }
        console.clear();
        console.log(`Generated Password: ${password}`);
        rl.prompt();
    }
})