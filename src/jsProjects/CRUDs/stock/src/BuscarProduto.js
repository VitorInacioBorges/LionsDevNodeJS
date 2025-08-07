async function BuscarProduto(){
    const input = await askQuestion('Escreva o nome do produto que deseja procurar: ');
    const resposta = input.toLowerCase.trim();
    let resultado = 0;
    for(let i=0; i<estoque.length; i++){
        if(resposta == estoque[i].Nome){
            resultado++;
            console.log(`Número de resultados: ${resultado}\n${i + 1}. \nNome: ${estoque[i].Nome} \nQuantidade: ${estoque[i].Quantidade} \nPreço: ${estoque[i].Preco}`);
        }
    }
    if(resultado == 0){
        console.log('Sem resultados para essa pesquisa! Aperte ENTER para voltar ao menu...');
        await askQuestion("Press ANY key to proceed...");
    }
}
// comentaRIO