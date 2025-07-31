const arrayMission = require("../data/arrayMission")

async function list() {
    console.log("-=".repeat(15));
    if (arrayMission.length == 0) {
        console.log("Não Tem Missões Registradas");
        
    } else {
        for (let i = 0; i < arrayMission.length; i++) {
            console.log(`------------------------
#${i+1}
Nome da Missão: ${arrayMission[i].nomeMissao}
Destino: ${arrayMission[i].destino}
Prioridade: ${arrayMission[i].prioridade}
Status: ${arrayMission[i].stats}`);
                console.log("=-Tripulantes-=");
                
                for (let j = 0; j < arrayMission[i].arrayTripulantes.length; j++) {
                    console.log(`#${j+1} - ${arrayMission[i].arrayTripulantes[j]}`);
                }
        }
    }
}

module.exports = list;