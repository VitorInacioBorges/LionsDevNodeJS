const { rl } = require('./constants');
const { arrayMission } = require('../data/arrayMission');

function Ranking(){
    if (arrayMission === 0){
        console.log("Nenhuma missão em andamento. \nPrecione ENTER para voltar...")
        rl.question('', StartFunction)
    }else{
        rl.question('Qual destino você quer o ranking?: ', (input) => {
        let certo = input.toLowerCase().trim()
        let ranking = 0
            for(i = 0; i < arrayMission.length; i++){
                if(arrayMission[i].includes(certo)){
                    ranking++
                }
            }
            console.log(`Missão: ${certo} \nRanking: ${ranking} missões`)
        })
    }
}

module.exports = Ranking;