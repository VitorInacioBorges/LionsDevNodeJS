const arrayTorneio = require("../data/arrayTorneio")

async function listarPartidas() {
    for (let i = 0; i < arrayTorneio.length; i++) {
        console.log("=-".repeat(20));
        console.log(`Torneio ${arrayTorneio[i].nome}`);
        console.log("=-".repeat(20));
        for (let y = 0; y < arrayTorneio[i].partidas.length; y++) {
            console.log(`Partida #${y+1}`);
            for (let z = 0; z < arrayTorneio[i].partidas[y].jogadores.length; z++) {
                console.log(`Jogadores/Equipes : ${arrayTorneio[i].partidas[y].jogadores[z]}`)
            }
            console.log(`Data: ${arrayTorneio[i].partidas[y].data.toLocaleDateString('pt-BR')} | Ganhador: ${arrayTorneio[i].partidas[y].ganhador}`);
            console.log("-".repeat(25));
        }
    }
}

module.exports = listarPartidas;