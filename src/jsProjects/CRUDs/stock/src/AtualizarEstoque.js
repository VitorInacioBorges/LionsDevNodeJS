function AtualizarEstoque(){
    if(estoque.length === 0){
        console.log('nenhum item cadastrado! \nPrecione enter para voltar')
        rl.question('', MenuPrincipal);
    }

    console.log('estoque: ')
    estoque.forEach((produto, index) => {
        console.log(`${index + 1}. \nNome: ${estoque[index].Nome} \nQuantidade: ${estoque[index].Quantidade} \nPreço: ${estoque[index].Preco}\n`)
    })

    rl.question('digite o número do estoque que você quer editar: ', (input) => {
        let i = parseInt(input, 10) - 1
        if(i >= 0 && i < estoque.length){
            rl.question('digite a nova quantidade: ', (quantidade) => {
                if(quantidade < 0 || isNaN(quantidade)){
                    console.log('valor inválido!')
                    return AtualizarEstoque()
                }

                estoque[i].Quantidade = parseInt(quantidade);
                       
                console.log('Estoque editado com sucesso! \nDeseja editar outro? (s/n)')
                rl.question('', (resposta) =>{
                    resposta.toLowerCase() === 's'
                    ? AtualizarEstoque()
                    : MenuPrincipal()
                })
            })
        }else{
            console.log('posição inválida!\n')
            console.log('precione enter para voltar')
            rl.question('', MenuPrincipal)
        }
    })  
}