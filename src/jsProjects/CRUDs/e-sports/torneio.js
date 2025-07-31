const { log } = require('console');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let torneios = [];

function askQuestion(query) {
    return new Promise(resolve => {
        rl.question(query, resolve);
    });
}

function menuPrincipal(){
    console.log(`
    ====== E-SPORTS MENU ======
    1. Adicionar Torneio
    2. Listar Torneios
    3. Registrar Partida
    4. Listar Partidas
    5. Filtrar Torneios por Jogo
    6. Remover Torneio
    7. SAIR
`)

rl.question('\n Escolha uma opção acima:\n', (input1)=>{
    let menu = parseInt(input1)
switch (menu){
    case 1:
        adicionarTorneio();
        break;
    case 2:
        listarTorneio();
        break;
    case 3: 
        registrarPartida();
        break;
    case 4:
        listarPartidas();
        break;
    case 5:
        filtrarPartidas();
        break;
    case 6:
        removerTorneio();
        break;
    case 7:
        rl.close();
        break;
    default:
        console.log("Digite um número Valido...")
        menuPrincipal();
        break;
        }
    })
    
}

async function adicionarTorneio(){
    let participantes = [];
    let nome = await askQuestion('Digite o nome do torneio: ');
    let jogo = await askQuestion('Digite o nome do jogo: ');
    let data = await askQuestion('Digite a data do torneio: ');
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
        data,
        participantes,
        partidas : []
    }

    torneios.push(torneio);
    menuPrincipal();
    console.log('Torneio Registrado!!!');
}

function listarTorneio(){
    if(torneios.length == 0){
        console.log('Sem torneios para listar! Pressione ENTER para voltar...');
        rl.question('', menuPrincipal);
    }
    for(let i=0; i<torneios.length; i++){
        console.log('========== LISTAGEM DE TORNEIOS ==========');
        console.log(`${i + 1} - Nome: ${torneios[i].nome}, Jogo: ${torneios[i].jogo}, Data: ${torneios[i].data}`);
        console.log('Participantes: ');
        for(let j=0; j<torneios[i].participantes.length; j++){
            console.log(`${j + 1} - ${torneios[i].participantes[j]}`);
        }
    }
    console.log('Pressione ENTER para voltar...');
    rl.question('', menuPrincipal);
}    

function filtrarPartidas(){
console.log("=".repeat(10)+' Filtrar Torneio por jogo '+ '='.repeat(10))
    if( partidas.lenght === 0){
        console.log('Nenhum torneio regitsrado...\nPressione Enter para voltar\n')
            rl.question('', menuPrincipal)
                return;
    }

    const games = [...new Set(array.map(game => game.jogo))];
    console.log('Torneios:\n');
    campeonatos.forEach((c, index) => {
        console.log(`${index + 1}. ${c}`)
    })

    rl.question('Escolha um jogo para acompanhar:\n', (jogo) =>{
    let indice = parseInt(jogo) -1
    if (indice < 0 || isNaN(indice)|| indice >= games.length){
        console.log('Escolha um numemro valido...')
        return filtrarPartidas()
    }

    const gamechoice = games[indice];
    const torneiosFiltrados = array.filter(torneio => torneio.jogo === gamechoice);
    console.log(`\nTorneios do jogo "${gamechoice}":\n`);

    if (torneiosFiltrados.length === 0) {
        console.log('Nenhum torneio encontrado para este jogo.\n');
    } else {
        torneiosFiltrados.forEach((torneio, i) => {
        console.log(`${i + 1}. ${torneio.nome} (${torneio.jogo})`);
        });
    }

    console.log('\nPressione Enter para voltar');
    rl.question('', menuPrincipal);
    });
}

async function registrarPartida() {
    console.log("=-".repeat(20));
    for (let i = 1; i <= torneios.length; i++) {
        console.log(`${i} : ${torneios[i-1].nome} , ${torneios[i-1].jogo}, ${torneios[i-1].data}`);
    }

    let idTorneio = await askQuestion("Selecione o ID do Torneiro: ")
    let qtsJogadores = await askQuestion("Qual a Quantidade de Jogadores: ")
    let jogadores = []
    // let data = await askQuestion("Informe a Data: ")
    for (let i = 0; i < qtsJogadores; i++) {
        jogadores.push(await askQuestion("Nickname do Jogador ou Equipe: "))
    }
    let ganhador = await askQuestion("Ganhador da Partida: ")
    let partida = {
        jogadores : jogadores,
        // data : data,
        ganhador : ganhador
    }
    torneios[idTorneio-1].partidas.push(partida);    
    menuPrincipal();
    console.log("Partida Salva! ")
}

async function listarPartidas() {
    for (let i = 0; i < torneios.length; i++) {
        console.log("=-".repeat(20));
        console.log(`Torneio ${torneios[i].nome}`);
        console.log("=-".repeat(20));
        for (let y = 0; y < torneios[i].partidas.length; y++) {
            console.log(`Partida #${y+1}`);
            for (let z = 0; z < torneios[i].partidas[y].jogadores.length; z++) {
                console.log(`Jogadores/Equipes : ${torneios[i].partidas[y].jogadores[z]}`)
            }
            console.log(`Data: | Ganhador: ${torneios[i].partidas[y].ganhador}`);
            console.log("-".repeat(25));
        }
    }
    menuPrincipal();
}

async function removerTorneio() {
    if (torneios.length == 0) {
        console.log('Sem torneios registrados! Pressione ENTER para voltar...');
        rl.question('', menuPrincipal);
    } else {
        for(let i=0; i<torneios.length; i++){
            console.log('========== LISTAGEM DE TORNEIOS ==========');
            console.log(`${i + 1} - Nome: ${torneios[i].nome}, Jogo: ${torneios[i].jogo}, Data: ${torneios[i].data}`);
            console.log('Participantes: ');
            for(let j=0; j<torneios[i].participantes.length; j++){
                console.log(`${j + 1} - ${torneios[i].participantes[j]}`);
            }
        }
        let input = await askQuestion('Digite o ID do torneio que quer remover: ');
        menuPrincipal();
        console.log('Sem torneios registrados!');
        input -= 1;
        if(input<0 || input > torneios.length || isNaN(input)){
            menuPrincipal();
            console.log('Reposta inválida!');
        } else {
            const [removido] = torneios.splice(input, 1);
            menuPrincipal();
            console.log('Removido com sucesso!');
        }
    }
}
menuPrincipal();