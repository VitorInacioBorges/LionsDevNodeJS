const { askQuestion } = require("./askQuestion");
const arrayTorneio = require("../data/arrayTorneio")

async function listarTorneio(){
    for(let i=0; i<arrayTorneio.length; i++){
        console.log('========== LISTAGEM DE TORNEIOS ==========');
        console.log(`${i + 1} - Nome: ${arrayTorneio[i].nome}, Jogo: ${arrayTorneio[i].jogo}, Data: ${arrayTorneio[i].data}`);
        console.log('Participantes: ');
        for(let j=0; j<arrayTorneio[i].participantes.length; j++){
            console.log(`${j + 1} - ${arrayTorneio[i].participantes[j]}`);
        }
    }
    console.log('Pressione ENTER para voltar...');
    await askQuestion(" ")
}   
module.exports = listarTorneio