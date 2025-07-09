const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.prompt();
console.log('Escreva uma operação:\n1-Adição\n2-Subtração\n3-Multiplicação\n4-Divisão');
rl.on('line', (input) => {
    let answer;
    console.log('Agora escreva 2 números:');
    if(input == 1) answer = num1 + num2;
    else if(input == 2) answer = num1 - num2;
    else if(input == 2) answer = num1 * num2;
    else if(input == 2) answer = num1 / num2;
    console.log()
});