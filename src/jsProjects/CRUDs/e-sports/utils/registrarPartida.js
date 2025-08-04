const {askQuestion} = require("./askQuestion")
const arrayTorneio = require("../data/arrayTorneio")

async function registrarPartida() {
    const dataDaPartida = new Date();    // registra a data atual
    console.log("=-".repeat(20));
    for (let i = 1; i <= arrayTorneio.length; i++) {
        console.log(`${i} : ${arrayTorneio[i-1].nome} , ${arrayTorneio[i-1].jogo}, ${arrayTorneio[i-1].data}`);
    }

    let idTorneio = await askQuestion("Selecione o ID do Torneiro: ")
    let qtsJogadores = await askQuestion("Qual a Quantidade de Jogadores: ")
    let jogadores = []
    // let data = await askQuestion("Informe a Data: ")
    for (let i = 0; i < qtsJogadores; i++) {
        jogadores.push(await askQuestion("Nickname do Jogador ou Equipe: "))
    }
    let ganhador = await askQuestion("Ganhador da Partida: ")
    let partida = {
        jogadores : jogadores,
        data : dataDaPartida,
        ganhador : ganhador
    }
    arrayTorneio[idTorneio-1].partidas.push(partida);    
    console.log("Partida Salva! ")
}

module.exports = registrarPartida;