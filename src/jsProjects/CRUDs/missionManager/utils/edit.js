const { arrayMission } = require('../data/arrayMission');
const askQuestion = require('./askQuestion');
const list = require('./list');

async function edit() {
    list();
    console.log("\n");
    let idEdit = await askQuestion("Qual Missão Você Deseja Editar: ")
    
    let nomeMissao = await askQuestion("Insira o Nome da Missão : ")
    let destino = await askQuestion("Insira o Destino da Tripulação : ")
    let prioridade = await askQuestion("insira a Prioridade (1-5) : ")
    let stats = await askQuestion("Insira o Status da Missão : ")
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
        stats : stats
    }
    arrayMission[idEdit-1] = mission;
}

module.exports = edit;