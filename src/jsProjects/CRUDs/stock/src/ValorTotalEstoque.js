function ValorTotalEstoque(){
    if(estoque.length === 0){
        console.log('nenhum item cadastrado! \nPrecione enter para voltar')
        rl.question('', MenuPrincipal)
    }

    console.log('estoque: ')
    estoque.forEach((produto, index) => {
        console.log(`${index + 1}. \nNome: ${estoque[index].Nome} \nQuantidade: ${estoque[index].Quantidade} \nPreço: ${estoque[index].Preco}\n`)
    })

    rl.question('digite o número do estoque que você quer ver o valor total: ', (input) => {
        let i = parseInt(input, 10) - 1
        if(i >= 0 && i < estoque.length){
            console.log(`Valor total: ${estoque[i].Quantidade * estoque[i].Preco}`) 
            console.log('precione enter para voltar')
            rl.question('', MenuPrincipal)

        }else{
            console.log('posição inválida!\n')
            console.log('precione enter para voltar')
            rl.question('', MenuPrincipal)
        }
    })  
}