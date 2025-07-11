const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.prompt();
console.log("Escreva a tabuada a ser apresentada (de 1 a 10):\nEscreva 0 para sair!!!");
rl.on('line', (input) => {
    if(input == 0){
        console.clear();
        console.log("PROGRAMA FECHADO...");
        rl.close();
    } else if(input < 1 || input > 10){
        console.clear();
        console.log("Escreva um numero valido!!!");
    } else {
        standardNum = parseInt(input);
        console.clear();
        console.log("A tabuada é:\n");
        for(let i=1; i<=10; i++){
            let result = standardNum * i;
            console.log(`${standardNum} x ${i} = ${result}`);
        }
        console.log("\nEscreva a tabuada a ser apresentada (de 1 a 10):\nEscreva 0 para sair!!!");
    }
})