const {askQuestion} = require("./askQuestion")
const arrayTorneio = require("../data/arrayTorneio")

async function adicionarTorneio(){
    let participantes = [];
    let nome = await askQuestion('Digite o nome do torneio: ');
    let jogo = await askQuestion('Digite o nome do jogo: ');

    let data = await askQuestion('Digite a data do torneio(DD/MM/YYYY): ');
    const dataFormat = data.split('/')                                        
    const dataFormatISO = `${dataFormat[0]}/${dataFormat[1]}/${dataFormat[2]}`//data
                        //                     dd/MM/yyyy
    let condition = true;
    while(condition){
        let participante = await askQuestion('Escreva o nome de um participante: ');
        participantes.push(participante);
        let addMais = await askQuestion("Deseja inserir participantes? (S/N)");
        if (addMais.toUpperCase() == "S") {
            continue;
        } else {
            condition = !condition;
        }
    }

    let torneio = {
        nome,
        jogo,
        data : dataFormatISO,
        participantes,
        partidas : []
    }

    arrayTorneio.push(torneio);
    console.log('Torneio Registrado!!!');
}

module.exports = adicionarTorneio