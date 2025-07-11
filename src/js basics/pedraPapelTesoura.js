const escolhas = ['pedra', 'papel', 'tesoura'];
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt("Escolha uma abaixo:\n1-Pedra\n2-Papel\n3-Tesoura\n4-SAIR.")
rl.prompt();
rl.on('line', (input) => {
    let escolhaUsuario = parseInt(input) - 1;
    let escolhaComputador = Math.floor(Math.random() * 3);

    if(escolhaUsuario >= 3){
        console.clear();
        console.log("FECHANDO...");
        rl.close();
    }
    else if(escolhaUsuario === escolhaComputador){
        console.clear();
        console.log(`Empate!\nMaquina: ${escolhas[escolhaComputador]}\nVoce: ${escolhas[escolhaUsuario]}\n\n`);
        rl.prompt();
    }
    else if(escolhaUsuario === 0 && escolhaComputador === 1 || escolhaUsuario === 1 && escolhaComputador === 2 || escolhaUsuario === 2 && escolhaComputador === 0){
        console.clear();
        console.log(`Você perdeu... :(\nMaquina: ${escolhas[escolhaComputador]}\nVoce: ${escolhas[escolhaUsuario]}\n\n`);
        rl.prompt();
    }
    else {
        console.clear();
        console.log(`Você GANHOU!!!!\nMaquina: ${escolhas[escolhaComputador]}\nVoce: ${escolhas[escolhaUsuario]}\n\n`);
        rl.prompt();
    }
});