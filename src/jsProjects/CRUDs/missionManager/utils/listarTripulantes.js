const { arrayMission } = require('../data/arrayMission');

function listarTripulantes(){
    console.log('========= TRIPULANTES EM CADA MISSAO =========');
    for(let i = 0; i < arrayMission.length; i++){
        console.log(`\n${i + 1} - Missao: ${arrayMission[i].nomeMissao}`);
        for (let j = 0; j < arrayMission[i].arrayTripulantes.length; j++) {
            console.log(`#${j+1} - ${arrayMission[i].arrayTripulantes[j]}`);
        }
    }
}

module.exports = listarTripulantes;