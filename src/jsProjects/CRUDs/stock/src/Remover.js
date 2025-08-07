function Remover(){
    if(estoque.length == 0){
        console.log('Estoque vazio!');
        MenuPrincipal();
    } else {
        console.log('============ PRODUTOS LISTADOS ============');
        estoque.forEach((produto, index) => {
            console.log(`${index + 1} - Nome: ${estoque[index].Nome}, Quantidade: ${estoque[index].Quantidade}, Preço: ${estoque[index].Preco}`);
        });
        rl.question('Escolha o número do produto que deseja remover: ', (input) => {
            const index = parseInt(input) - 1;
            if(isNaN(index) || index < 0 || index > estoque.length){
                console.log('Entrada inválida!! Volte ao menu!');
                MenuPrincipal();
            } else {
                const [removido] = estoque.splice(index, 1);
                rl.question('', MenuPrincipal);
                console.log('Produto removido com sucesso!!');
                MenuPrincipal();
            }
        });
    }
}