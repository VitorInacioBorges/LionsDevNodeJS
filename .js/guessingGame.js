// With Functions:
/*
const readline1 = require('readline');
const rl_1 = readline1.createInterface({
    input: process.stdin,
    output: process.stdout
});
let num_1 = Math.floor(Math.random() * 11);
function adivinharNum (){
    rl_1.question('Digite um numero:', (resposta) => {
        verificarNum(num_1, resposta);
    })
}
function verificarNum(randomNum, resposta){
    if(resposta == randomNum) {
        console.log('Você acertou!!!'); 
        rl_1.close();
    } else {
        console.log('ERROU! Tente de novo!');
        console.log('---------------------');
        adivinharNum();
    }
}
adivinharNum();
*/
// Without Functions:
const readline2 = require('readline');
const rl_2 = readline2.createInterface({
    input: process.stdin,
    output: process.stdout
});
const x = 10;
let num_2 = Math.floor(Math.random() * x + 1), cont = 0, level = 1, estalecas = 1000;
console.log(`LEVEL ${level} - Chute um numero de 1 a ${x * level}:\nDigite 0 p/ sair!`);
rl_2.prompt();
rl_2.on('line', (input) => {
    const palpite = parseInt(input);
    if(palpite == 0){
        console.clear();
        console.log('FECHANDO...');
        rl_2.close();
    }
    else if(isNaN(palpite)){
        console.clear();
        console.log('Escreva um numero válido...');
    }
    else if (palpite == num_2){
        console.clear();
        cont++;
        estalecas = estalecas * num_2;
        console.log(`ESTÁ CERTO!!! O número era ${num_2} e você levou ${cont} tentativas!\nVocê agora tem: ${estalecas} kwanzas monetários!`);
        cont = 0;
        level++;
        num_2 = Math.floor(Math.random() * (x * level) + 1);
        console.log(`---------------------------------------------------------------------\nLEVEL ${level} - Chute um numero de 1 a ${x * level}:\nDigite 0 p/ sair!`);
    } 
    else if(palpite < num_2){
        console.clear();
        cont++;
        console.log(`Maior que ${input} ^^^`);
    }
    else if(palpite > num_2){
        console.clear();
        cont++;
        console.log(`Menor que ${input} vvv`);
    }
})

//TODO adicionar vidas
