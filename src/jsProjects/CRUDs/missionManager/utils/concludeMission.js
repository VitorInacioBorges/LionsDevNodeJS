const { arrayMission } = require('../data/arrayMission');
const askQuestion = require('./askQuestion');

async function concludeMission(){
    if(arrayMission.length == 0){
        console.log('Sem missões para concluir.');
    } else {
        for(let i = 0; i < arrayMission.length; i++){
            console.log('========= MISSÕES LISTADAS =========');
            console.log(`${i + 1} - Nome: ${arrayMission[i].nomeMissao}, Destino: ${arrayMission[i].destino}, Prioridade: ${arrayMission[i].prioridade}, Tripulantes: ${arrayMission[i].arrayTripulantes}, Status: ${arrayMission[i].stats}`);
        }
        const index = parseInt(await askQuestion("Selecione a Missão que Deseja Concluir: ")) - 1;
        if(isNaN(index) || index < 0 || index > arrayMission.length){
            console.log('Opcao invalida!!');
        } else {
            arrayMission[index].stats = 'concluida';
            console.log('Missao concluida com sucesso!!');
        }
    }
}

module.exports = concludeMission;