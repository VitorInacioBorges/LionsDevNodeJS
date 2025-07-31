const { arrayMission } = require('../data/arrayMission');
const askQuestion = require('./askQuestion');

async function addMission() {
    console.log(`
        Adicionando uma Missao....
        `);
        
    let nomeMissao = await askQuestion("Insira o Nome da Missão : ")
    let destino = await askQuestion("Insira o Destino da Tripulação : ")
    let prioridade = await askQuestion("insira a Prioridade (1-5) : ")
    let tripulantes = []
    let conditionAddMission = true 
    while (conditionAddMission) {
        console.log("-".repeat(30));
        let tripulante = await askQuestion("Insira o Nome do Tripulante : ")
        tripulantes.push(tripulante)
        console.log("Nome Adicionado com Sucesso.");
        let addMais = await askQuestion("Deseja Inserir Mais Algum Tripulante ? (S/N)")
        if (addMais.toUpperCase() == "S") {
            continue;
        } else {
            console.log("Adicionado todos os tripulantes desejados...");
            conditionAddMission = !true
        }
    }
    let mission = {
        nomeMissao : nomeMissao,
        destino : destino,
        prioridade : prioridade,
        arrayTripulantes : tripulantes,
        stats : "Pendente"
    }
    arrayMission.push(mission)
    console.log("Missão Registrada.");
}

module.exports = addMission;