const arrayTorneio = require("../data/arrayTorneio")
const {askQuestion} = require("./askQuestion")

async function removerTorneio() {
    console.log('========== REMOVER TORNEIO ==========');
    if (arrayTorneio.length === 0) {
        console.log('Nenhum torneio para remover.');
        console.log('\nPressione ENTER para voltar...');
        await askQuestion('');
        return;
    }

    console.log('Torneios disponíveis para remoção:');
    arrayTorneio.forEach((t, index) => {
        console.log(`${index + 1} - ${t.nome} (${t.jogo})`);
    });

    const input = await askQuestion('Digite o NÚMERO do torneio que quer remover: ');
    const indexToRemove = parseInt(input) - 1; // Convert to 0-based index

    // Validate input
    if (isNaN(indexToRemove) || indexToRemove < 0 || indexToRemove >= arrayTorneio.length) {
        console.log('Entrada inválida. Por favor, digite um número válido da lista.');
    } else {
        const removedTorneio = arrayTorneio.splice(indexToRemove, 1);
        console.log(`Torneio "${removedTorneio[0].nome}" foi removido com sucesso!`);
    }
}

module.exports = removerTorneio;