let mediaNotas;
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const notas = [];

console.clear();
rl.prompt();
rl.question('Escreva sua primeira nota: ', (input1) => {
    let nota1 = parseFloat(input1);
    if(isNaN(input1) || input1 > 10){
        console.log("Escreva uma nota válida: ");
        rl.prompt();
    }
    else {
        notas.push(nota1);
        rl.question('Escreva sua segunda nota: ', (input2) => {
            let nota2 = parseFloat(input2);
            if(isNaN(input2) || input2 > 10){
                console.log("Escreva uma nota válida: ");
                rl.prompt();
            }
            else {
                notas.push(nota2);
            }
            let soma = nota1 + nota2;
            mediaNotas = soma / 2;
            console.log(`A média das notas é ${mediaNotas} pts`);
            rl.close();
        })
    }
});