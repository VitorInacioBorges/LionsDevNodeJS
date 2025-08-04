const {askQuestion, rl} = require("./utils/askQuestion")
const adicionarTorneio = require("./utils/addTorneio")
const listarTorneio = require("./utils/listTorneio")
const filtrarPartidas = require("./utils/filterPartidas")
const registrarPartida = require("./utils/registrarPartida")
const listarPartidas = require("./utils/listPartidas")
const removerTorneio = require("./utils/removeTorneio")

async function startFunction() {
   
let cond = !false
    while (cond) {
        let menu = 
        parseInt(await askQuestion(`
    ====== E-SPORTS MENU ======
    1. Adicionar Torneio
    2. Listar Torneios
    3. Registrar Partida
    4. Listar Partidas
    5. Filtrar Torneios por Jogo
    6. Remover Torneio
    7. SAIR
    `))
        switch (menu) {
            case 1: await adicionarTorneio(); break;
            case 2: await listarTorneio(); break;
            case 3: await registrarPartida(); break;
            case 4: await listarPartidas(); break;
            case 5: await filtrarPartidas(); break;
            case 6: await removerTorneio(); break;
            case 7:
                cond = !true 
                rl.close(); 
                break;
            default:
                console.log("Digite um número Valido...")
                startFunction();
                break;
        }
    }
}
startFunction()