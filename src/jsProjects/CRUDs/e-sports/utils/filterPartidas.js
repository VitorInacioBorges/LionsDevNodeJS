const arrayTorneio = require("../data/arrayTorneio")
const {askQuestion} = require("./askQuestion")

async function filtrarPartidas(){
console.log("=".repeat(10)+' Filtrar Torneio por jogo '+ '='.repeat(10))
    if( arrayTorneio.length === 0){
        console.log('\nBuscando... '.repeat(3) + '\nNenhum torneio regitsrado...\n\nPressione Enter para voltar\n')
            await askQuestion(" ")
                return;
    }   

    const games = [...new Set(arrayTorneio.map(game => game.jogo))];
    console.log('Torneios:\n');
    games.forEach((c, index) => {
        console.log(`${index + 1}. ${c}`)
    })

    let jogo = await askQuestion('\nEscolha um jogo para acompanhar:\n')

    let indice = parseInt(jogo) -1
    if (indice < 0 || isNaN(indice)|| indice >= games.length){
        console.log('Escolha um numemo valido...')
        return filtrarPartidas()
    }

    const gamechoice = games[indice];
    const torneiosFiltrados = arrayTorneio.filter(arrayTorneio => arrayTorneio.jogo === gamechoice);
    console.log('=-'.repeat(30) + `\n Torneios do jogo "${gamechoice}":\n`);

    if (torneiosFiltrados.length === 0) {
        console.log('Nenhum torneio encontrado para este jogo.\n');
    } else {
        torneiosFiltrados.forEach((arrayTorneio, i) => {
        console.log(`${i + 1}. ${arrayTorneio.nome} (${arrayTorneio.jogo})`);
        });
    }

    console.log('=-'.repeat(30) + '\nPressione Enter para voltar');
    await askQuestion(" ")
}

module.exports = filtrarPartidas;