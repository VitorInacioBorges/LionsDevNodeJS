const rl = require("readline").createInterface({
    input : process.stdin,
    output : process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => {
        rl.question(query, resolve);
    });
}

const arrayMission = [];

let cond = true;
async function startFunction(params) {
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
                addMission()
                break;
            case "2":
                list()
                break;
            case "3":
                edit();
                break;
            case "4":
                concludeMission();
                break;
            case "5":
                filtrarPrioridade() 
                break;
            case "6":
                Ranking();
                break;
            case "7":
                listarTripulantes();
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

function concludeMission(){
    if(arrayMission.length == 0){
        console.log('Sem missões para concluir.');
        startFunction();
    } else {
        for(let i = 0; i < arrayMission.length; i++){
            console.log('========= MISSÕES LISTADAS =========');
            console.log(`${i + 1} - Nome: ${arrayMission[i].nomeMissao}, Destino: ${arrayMission[i].destino}, Prioridade: ${arrayMission[i].prioridade}, Tripulantes: ${arrayMission[i].arrayTripulantes}, Status: ${arrayMission[i].stats}`);
        }
        rl.question('Escreva o número da missão que você quer concluir: ', (input) => {
            const index = parseInt(input) - 1;
            if(isNaN(index) || index < 0 || index > arrayMission.length){
                console.log('Opcao invalida!!');
                startFunction();
            } else {
                arrayMission[index].stats = 'concluida';
                console.log('Missao concluida com sucesso!!');
                startFunction();
            }
        });
    }
}

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
    startFunction();
}

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

async function edit() {
    list()
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
    arrayMission[idEdit-1] = mission
    startFunction();
}

function filtrarPrioridade() {
    if (arrayMission.length === 0) {
        console.log('Nenhuma missão em andamento!\nPressione ENTER para voltar...');
        rl.question('', startFunction);
        return;
    }

    const prioridade = [...new Set(arrayMission.map(missao => missao.prioridade))];

    console.log('Níveis de Prioridade:\n');
    prioridade.forEach((p, index) => {
        console.log(`${index + 1}. ${p}`);
    });

    rl.question('Digite qual nível de prioridade deseja verificar:\n', (input) => {
        const indice = parseInt(input) - 1;

        if (isNaN(indice) || indice < 0 || indice >= prioridade.length) {
            console.log('Digite um número válido\n');
            return filtrarPrioridade();
        }

        const prioridadeEscolhida = prioridade[indice];
        const nivelPrioridade = arrayMission.filter(missao => missao.prioridade === prioridadeEscolhida);

        console.log(`\nMissões com a prioridade ${prioridadeEscolhida}:`);
        nivelPrioridade.forEach((missao, index) => {
            const tripulantes = missao.arrayTripulantes.length > 0
                ? missao.arrayTripulantes.join(', ')
                : 'Nave vazia';
            console.log(`${index + 1}. Missão: ${missao.destino}, Tripulantes: ${tripulantes}, Prioridade: ${missao.prioridade}`);
        });

        console.log('\nPressione ENTER para voltar...');
        rl.question('', startFunction);
    });
}

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
            console.log("\nPrecione ENTER para voltar...")
            rl.question('', MenuPrincipal)
        })
    }
}

function listarTripulantes(){
    console.log('========= TRIPULANTES EM CADA MISSAO =========');
    for(let i = 0; i < arrayMission.length; i++){
        console.log(`\n${i + 1} - Missao: ${arrayMission[i].nomeMissao}`);
        for (let j = 0; j < arrayMission[i].arrayTripulantes.length; j++) {
            console.log(`#${j+1} - ${arrayMission[i].arrayTripulantes[j]}`);
        }
    }
    console.log('Digite ENTER para retornar ao menu.');
    rl.question('', startFunction);
}

startFunction();