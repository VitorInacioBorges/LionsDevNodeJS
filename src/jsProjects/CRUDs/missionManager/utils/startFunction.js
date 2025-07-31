const { rl } = require('./constants');
const askQuestion = require('./askQuestion');
const concludeMission = require('./concludeMission');
const addMission = require('./addMission');
const list = require('./list');
const edit = require('./edit');
const filtrarPrioridade = require('./filtrarPrioridade');
const Ranking = require('./ranking');
const listarTripulantes = require('./listarTripulantes');

async function startFunction(params) {
    let cond = true;
    while (cond) {
        let menu = await askQuestion(`
                Menu de Opções
            1 - Adicionar Missão
            2 - Listar Missões
            3 - Editar Missões
            4 - Marcar Como Concluida
            5 - Filtrar por Prioridade
            6 - Ranking de Destinos
            7 - Listar Tripulantes
            8 - Sair 
            `)

        switch (menu) {
            case "1":
                await addMission();
                break;
            case "2":
                await list();
                break;
            case "3":
                await edit();
                break;
            case "4":
                await concludeMission();
                break;
            case "5":
                await filtrarPrioridade();
                break;
            case "6":
                await Ranking();
                break;
            case "7":
                await listarTripulantes();
                break;
            case "8":
                console.log("Saindo...");
                cond = !true
                rl.close();
                break;
            default:
                break;
        }
    }
}

module.exports = startFunction;